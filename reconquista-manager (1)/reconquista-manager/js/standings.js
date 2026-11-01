function computeStandings() {
  const map = {};
  OFFICIAL_TEAMS.forEach(t => {
    map[t] = {
      name: t,
      pj: 0,
      pg: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dif: 0,
      pts: 0,
      form: []
    };
  });

  state.matches.forEach(m => {
    const tHome = cleanTeamName(m.home);
    const tAway = cleanTeamName(m.away);
    if (!map[tHome]) map[tHome] = { name: tHome, pj: 0, pg: 0, pp: 0, gf: 0, gc: 0, dif: 0, pts: 0, form: [] };
    if (!map[tAway]) map[tAway] = { name: tAway, pj: 0, pg: 0, pp: 0, gf: 0, gc: 0, dif: 0, pts: 0, form: [] };

    const ptsH = parseInt(m.homePts) || 0;
    const ptsA = parseInt(m.awayPts) || 0;

    map[tHome].pj++;
    map[tAway].pj++;
    map[tHome].gf += ptsH;
    map[tHome].gc += ptsA;
    map[tAway].gf += ptsA;
    map[tAway].gc += ptsH;

    if (ptsH > ptsA) {
      map[tHome].pg++;
      map[tHome].pts += 2;
      map[tHome].form.push('W');
      map[tAway].pp++;
      map[tAway].pts += 1;
      map[tAway].form.push('L');
    } else if (ptsA > ptsH) {
      map[tAway].pg++;
      map[tAway].pts += 2;
      map[tAway].form.push('W');
      map[tHome].pp++;
      map[tHome].pts += 1;
      map[tHome].form.push('L');
    }
  });

  Object.values(map).forEach(t => {
    t.dif = t.gf - t.gc;
  });

  state.standings = Object.values(map).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dif !== a.dif) return b.dif - a.dif;
    return b.gf - a.gf;
  });
}

function renderStandings() {
  const tbody = document.getElementById('standingsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  state.standings.forEach((team, idx) => {
    const isRec = team.name === "RECONQUISTA";
    const isPlayoff = idx < 8;
    const tr = document.createElement('tr');
    tr.className = `hover:bg-purple-900/30 transition ${isRec ? 'bg-emerald-950/30 border-l-4 border-emerald-400' : ''}`;

    const recentForm = team.form.slice(-5);
    let formHtml = `<div class="flex items-center justify-center gap-1">`;
    if (recentForm.length === 0) {
      formHtml += `<span class="text-gray-600 text-[10px]">-</span>`;
    } else {
      recentForm.forEach(res => {
        if (res === 'W') {
          formHtml += `<span class="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 font-black text-[9px] flex items-center justify-center" title="Victoria">G</span>`;
        } else {
          formHtml += `<span class="w-4 h-4 rounded-full bg-red-600 text-white font-black text-[9px] flex items-center justify-center" title="Derrota">P</span>`;
        }
      });
    }
    formHtml += `</div>`;

    tr.innerHTML = `
      <td class="py-2.5 px-2 text-center font-bold ${isPlayoff ? 'text-emerald-400' : 'text-gray-500'}">
        ${idx + 1}
      </td>
      <td class="py-2.5 px-3 flex items-center gap-2">
        <span class="w-5 h-5 rounded-md ${isRec ? 'bg-emerald-500 text-slate-950' : 'bg-[#22103b] text-gray-300 border border-purple-800'} font-bold text-[10px] flex items-center justify-center flex-shrink-0">
          ${team.name.charAt(0)}
        </span>
        <span class="font-bold ${isRec ? 'text-emerald-400 text-sm' : 'text-white'} truncate max-w-[170px]">${team.name}</span>
      </td>
      <td class="py-2.5 px-2 text-center font-bold text-gray-300">${team.pj}</td>
      <td class="py-2.5 px-2 text-center font-bold text-emerald-400">${team.pg}</td>
      <td class="py-2.5 px-2 text-center font-bold text-red-400">${team.pp}</td>
      <td class="py-2.5 px-2 text-center text-gray-300">${team.gf}</td>
      <td class="py-2.5 px-2 text-center text-gray-400">${team.gc}</td>
      <td class="py-2.5 px-2 text-center font-bold ${team.dif > 0 ? 'text-emerald-400' : (team.dif < 0 ? 'text-red-400' : 'text-gray-400')}">
        ${team.dif > 0 ? '+' + team.dif : team.dif}
      </td>
      <td class="py-2.5 px-3 text-center font-black text-sm text-emerald-300 bg-purple-950/40">${team.pts}</td>
      <td class="py-2.5 px-3 text-center">${formHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderMatchesHistory() {
  const container = document.getElementById('matchesHistoryList');
  if (!container) return;
  container.innerHTML = '';
  const countDisp = document.getElementById('matchesCountDisplay');
  if (countDisp) countDisp.innerText = state.matches.length;

  if (state.matches.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-gray-500 text-xs">No hay partidos cargados todavía.</div>`;
    return;
  }

  state.matches.slice().reverse().forEach(m => {
    const div = document.createElement('div');
    div.className = "bg-[#110620] p-2.5 rounded-xl border border-purple-900/60 flex items-center justify-between hover:border-purple-700 transition";
    const isRecHome = cleanTeamName(m.home) === "RECONQUISTA";
    const isRecAway = cleanTeamName(m.away) === "RECONQUISTA";
    div.innerHTML = `
      <div class="text-[10px] text-gray-400 font-semibold w-16">
        <span class="text-emerald-400 block font-bold">${m.round || "Partido"}</span>
        <span>${m.date || ""}</span>
      </div>
      <div class="flex-1 px-2 text-xs">
        <div class="flex justify-between items-center ${isRecHome ? 'text-emerald-400 font-bold' : 'text-gray-300'}">
          <span class="truncate max-w-[100px]">${cleanTeamName(m.home)}</span>
          <span class="font-black text-white text-sm ml-1">${m.homePts}</span>
        </div>
        <div class="flex justify-between items-center ${isRecAway ? 'text-emerald-400 font-bold' : 'text-gray-300'}">
          <span class="truncate max-w-[100px]">${cleanTeamName(m.away)}</span>
          <span class="font-black text-white text-sm ml-1">${m.awayPts}</span>
        </div>
      </div>
      <button onclick="removeMatch('${m.id}')" title="Eliminar partido" class="text-gray-500 hover:text-red-400 text-xs p-1">
        ✕
      </button>
    `;
    container.appendChild(div);
  });
}

function removeMatch(id) {
  if (!confirm("¿Deseas eliminar este partido del registro?")) return;
  state.matches = state.matches.filter(m => m.id !== id);
  localStorage.setItem("rec_u21_matches", JSON.stringify(state.matches));
  computeStandings();
  renderStandings();
  renderMatchesHistory();
}

function resetToSampleMatches() {
  state.matches = DEFAULT_MATCHES;
  localStorage.setItem("rec_u21_matches", JSON.stringify(state.matches));
  computeStandings();
  renderStandings();
  renderMatchesHistory();
  alert("Se restablecieron los partidos de muestra oficiales.");
}

function renderTopPerformers() {
  const grid = document.getElementById('topPerformersGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const eligible = state.scoutingData.filter(p => (p.PJ || 0) >= 1);

  const categories = [
    {
      title: "Goleadora (PTS / P)",
      icon: "fa-bullseye",
      color: "text-emerald-400",
      valExtractor: (p) => (p.PTS || 0),
      format: (v) => v.toFixed(1) + " pts / p"
    },
    {
      title: "Mejor Valoración (VAL / P)",
      icon: "fa-medal",
      color: "text-purple-400",
      valExtractor: (p) => (p.VAL || 0),
      format: (v) => v.toFixed(1) + " val / p"
    },
    {
      title: "Máxima Asistidora (AST / P)",
      icon: "fa-hands-holding",
      color: "text-blue-400",
      valExtractor: (p) => (p.AST || 0),
      format: (v) => v.toFixed(1) + " ast / p"
    },
    {
      title: "Reboteadora (RT / P)",
      icon: "fa-arrows-down-to-people",
      color: "text-amber-400",
      valExtractor: (p) => (p.RT || 0),
      format: (v) => v.toFixed(1) + " reb / p"
    },
    {
      title: "Eficiencia (PPP)",
      icon: "fa-fire",
      color: "text-rose-400",
      valExtractor: (p) => (p.PPP || 0),
      format: (v) => v.toFixed(2) + " ppp"
    }
  ];

  categories.forEach(cat => {
    const top3 = eligible.slice().sort((a, b) => cat.valExtractor(b) - cat.valExtractor(a)).slice(0, 3);
    const card = document.createElement('div');
    card.className = "bg-[#110620] rounded-2xl border border-purple-900/70 p-3 space-y-2.5 flex flex-col justify-between shadow";

    let html = `
      <div>
        <div class="flex items-center justify-between border-b border-purple-900/60 pb-1.5 mb-2">
          <span class="text-xs font-black uppercase tracking-wide text-gray-200 flex items-center gap-1.5">
            <i class="fa-solid ${cat.icon} ${cat.color}"></i> ${cat.title}
          </span>
        </div>
        <div class="space-y-2">
    `;

    top3.forEach((p, rank) => {
      const val = cat.valExtractor(p);
      const isLeader = rank === 0;
      const isRec = (p.EQUIPO || '').toLowerCase().includes('reconquista');

      html += `
        <div class="flex items-center justify-between p-1.5 rounded-lg ${isLeader ? 'bg-purple-950/60 border border-purple-800' : 'bg-transparent'}">
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 rounded-full ${isLeader ? 'bg-amber-400 text-slate-950 font-black' : 'text-gray-500 font-bold'} text-[10px] flex items-center justify-center flex-shrink-0">
              ${rank + 1}
            </span>
            <div>
              <b class="${isRec ? 'text-emerald-400' : 'text-white'} text-xs block truncate max-w-[110px]">${p.Nombre.split(',')[0]}</b>
              <span class="text-[9px] text-gray-500 block truncate max-w-[110px]">${cleanTeamName(p.EQUIPO)}</span>
            </div>
          </div>
          <span class="font-black text-xs ${cat.color}">${cat.format(val)}</span>
        </div>
      `;
    });

    html += `</div></div>`;
    card.innerHTML = html;
    grid.appendChild(card);
  });
}