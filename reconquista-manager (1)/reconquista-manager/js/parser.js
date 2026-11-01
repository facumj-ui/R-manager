function handleBatchMatches(e) {
  const files = Array.from(e.target.files);
  if (!files || files.length === 0) return;

  let processedCount = 0;
  let newMatchesAdded = 0;

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

        // 1. Extraer nombres de equipos del título
        let title = "";
        for (let r = 0; r < Math.min(10, rows.length); r++) {
          const c0 = String(rows[r][0] || "");
          if (c0.includes(" vs ") && c0.includes("Estadísticas")) {
            title = c0;
            break;
          }
        }

        let homeName = "", awayName = "";
        if (title) {
          const m = title.match(/Estadísticas\s*-\s*(.*?)\s+vs\s+(.*?)\s+-/i);
          if (m) {
            homeName = cleanTeamName(m[1]);
            awayName = cleanTeamName(m[2]);
          }
        }

        // 2. Buscar las DOS filas de TOTALES REALES de cada equipo
        // Una fila de totales real tiene:
        // - "TOTALES" en la columna 0 o 1
        // - Un tiempo de partido en col 2 (ej: "200:00" o minutos)
        // - Un puntaje numérico válido en col 3
        const realTotals = [];
        for (let r = 0; r < rows.length; r++) {
          const c0 = String(rows[r][0] || "").trim().toUpperCase();
          const c1 = String(rows[r][1] || "").trim().toUpperCase();
          const c2 = String(rows[r][2] || "").trim();
          const c3 = String(rows[r][3] || "").trim();

          if (c0 === "TOTALES" || c1 === "TOTALES") {
            const hasTime = c2.includes(":") || !isNaN(parseFloat(c2));
            const hasPts = c3 !== "" && !isNaN(parseInt(c3));

            if (hasTime && hasPts) {
              realTotals.push({
                row: r,
                pts: parseInt(c3)
              });
            }
          }
        }

        if (realTotals.length >= 2 && homeName && awayName) {
          const homePts = realTotals[0].pts;
          const awayPts = realTotals[1].pts;

          // Evitar registrar partidos duplicados si ya existen en la memoria
          const exists = state.matches.find(m => 
            cleanTeamName(m.home) === homeName && 
            cleanTeamName(m.away) === awayName && 
            m.homePts === homePts && 
            m.awayPts === awayPts
          );

          if (!exists) {
            const matchId = "m_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4);
            state.matches.push({
              id: matchId,
              round: "Torneo Oficial",
              date: "Fecha Oficial",
              home: homeName,
              homePts: homePts,
              away: awayName,
              awayPts: awayPts
            });
            newMatchesAdded++;
          }
        }
      } catch (err) {
        console.error("Error al procesar planilla CABB:", err);
      } finally {
        processedCount++;
        if (processedCount === files.length) {
          localStorage.setItem("rec_u21_matches", JSON.stringify(state.matches));
          computeStandings();
          renderStandings();
          renderMatchesHistory();
          renderTopPerformers();
          alert(`¡Procesamiento completo! Se leyeron ${files.length} planillas. Partidos nuevos registrados: ${newMatchesAdded}.`);
        }
      }
    };
    reader.readAsArrayBuffer(file);
  });
}