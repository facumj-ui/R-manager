// Base consolidada de 169 jugadoras oficiales (Torneo CABB / APB U21)
const RAW_ROWS = [["ESTRELLA - U21F", "CASTRO, MORENA SOL", 16, 33.6, 6.2, 0.26, 0.0, 0.44, 0.25, 14.6, 0.42, 0.28, 5.1, 0.4, 3.1], ["C. MARCHIGIANO - U21F", "CATTONI, AMANCAY GIANELLA", 11, 33.4, 3.4, 0.24, 0.22, 0.58, 0.23, 12.9, 0.26, 0.54, 5.5, 1.3, 2.2], ["UNLP - U21F", "FORTAIN, MILAGROS", 13, 33.1, 4.9, 0.21, 0.16, 0.26, 0.2, 15.5, 0.32, 0.31, 4.7, 0.4, -2.8], ["C. MARCHIGIANO - U21F", "TELLECHEA, FLORENCIA", 13, 33.1, 10.5, 0.36, 0.24, 0.38, 0.33, 19.7, 0.53, 0.27, 4.2, 0.9, 5.9], ["DEPORTIVO SAN VICENTE - U21F", "FERREIRA, FLORENCIA", 14, 33.0, 7.4, 0.51, 0.2, 0.2, 0.38, 11.0, 0.68, 0.18, 7.4, 2.5, 12.9], ["BANCO PROVINCIA - U21F", "DI PASQUO ANDREOLI, FAUSTINA", 13, 31.3, 10.4, 0.26, 0.22, 0.64, 0.25, 18.3, 0.57, 0.22, 6.5, 1.3, 7.4], ["JUVENTUD LP - U21 F", "PASSARO, RENATA", 14, 31.1, 8.7, 0.36, 0.13, 0.39, 0.29, 15.9, 0.55, 0.16, 6.8, 0.8, 5.9], ["UNLP - U21F", "EGGIMANN, STEFANIA", 13, 30.5, 5.5, 0.41, 0.33, 0.37, 0.4, 11.0, 0.5, 0.4, 7.8, 1.2, 6.6], ["PLATENSE - U21F", "CHUBREGA, AINARA JAZMIN", 10, 30.0, 10.3, 0.39, 0.24, 0.62, 0.35, 14.4, 0.72, 0.15, 5.5, 2.2, 11.8], ["MERIDIANO V - U21F", "WEGENER, MIA SUYAI", 14, 29.9, 5.6, 0.32, 0.21, 0.62, 0.25, 11.0, 0.5, 0.29, 4.4, 0.6, 2.5], ["ESTRELLA - U21F", "VERA, ISABELLA", 16, 29.8, 2.1, 0.31, 0.08, 0.47, 0.25, 7.0, 0.3, 0.48, 6.4, 0.8, 2.1], ["DEPORTIVO SAN VICENTE - U21F", "LEDE,  JULIANA", 10, 29.4, 11.2, 0.4, 0.19, 0.7, 0.32, 17.1, 0.66, 0.13, 5.4, 2.2, 9.1], ["DEPORTIVO SAN VICENTE - U21F", "IBAÑEZ, PAULA", 9, 29.0, 9.4, 0.6, 0.12, 0.35, 0.54, 12.7, 0.74, 0.3, 8.7, 1.0, 12.3], ["UNLP - U21F", "QUIMBIURCO PONCE, MAYERLI CATALINA", 12, 28.8, 4.2, 0.36, 0.33, 0.16, 0.35, 9.6, 0.44, 0.37, 4.3, 0.8, 1.8], ["PLATENSE - U21F", "ARGUERO, MARIA PILAR", 12, 28.4, 13.9, 0.55, 0.19, 0.5, 0.49, 16.7, 0.83, 0.19, 9.6, 1.8, 18.1], ["ESTRELLA - U21F", "GALLARDO, MORENA SOL", 16, 28.2, 3.1, 0.22, 0.15, 0.33, 0.21, 12.2, 0.26, 0.45, 4.1, 0.3, -5.1], ["Reconquista - U21F", "CALLEGARO  , PILAR", 13, 27.5, 6.2, 0.28, 0.16, 0.44, 0.22, 15.3, 0.41, 0.27, 3.6, 3.2, 1.7], ["JUVENTUD LP - U21 F", "STRILINSKY, JUANA", 12, 27.4, 14.4, 0.36, 0.14, 0.52, 0.34, 21.8, 0.66, 0.19, 7.8, 1.2, 10.9], ["PLATENSE - U21F", "LUGONES, AGOSTINA", 13, 27.4, 14.4, 0.52, 0.1, 0.59, 0.47, 16.9, 0.85, 0.14, 6.8, 1.3, 15.3], ["Reconquista - U21F", "IGLESIAS, ALMA", 8, 27.3, 7.8, 0.33, 0.17, 0.73, 0.27, 17.1, 0.45, 0.31, 4.8, 3.1, 5.6], ["HOGAR SOCIAL - U21F", "GOMEZ, SELENE MARLENE", 14, 27.3, 9.7, 0.39, 0.19, 0.46, 0.34, 15.9, 0.61, 0.22, 5.6, 1.5, 8.5], ["BANCO PROVINCIA - U21F", "ALONSO, CLARA", 14, 27.2, 8.6, 0.27, 0.26, 0.35, 0.27, 16.3, 0.53, 0.21, 6.4, 1.1, 3.9], ["JUVENTUD LP - U21 F", "ALARCÓN, JUANA", 12, 27.2, 8.2, 0.47, 0.22, 0.46, 0.44, 11.6, 0.7, 0.24, 5.9, 1.3, 11.5], ["MERIDIANO V - U21F", "LOPEZ MERELES , IVANA PAMELA", 13, 26.6, 7.5, 0.3, 0.25, 0.47, 0.29, 13.8, 0.54, 0.23, 4.0, 0.5, 2.6], ["HOGAR SOCIAL - U21F", "MEDINA, MARTINA", 13, 26.6, 12.5, 0.43, 0.2, 0.68, 0.32, 18.1, 0.69, 0.17, 5.5, 1.4, 10.5], ["HOGAR SOCIAL - U21F", "ELIAS, ALFONSINA", 11, 26.3, 5.8, 0.28, 0.31, 0.52, 0.29, 10.9, 0.53, 0.32, 3.8, 1.6, 4.8], ["DEPORTIVO SAN VICENTE - U21F", "SOLER, ROMINA CANDELA", 12, 26.2, 10.1, 0.43, 0.27, 0.58, 0.35, 13.8, 0.73, 0.2, 5.2, 1.9, 11.8], ["PLATENSE - U21F", "DE LOS SANTOS, AMPARO", 11, 26.1, 5.7, 0.43, 0.17, 0.4, 0.33, 9.7, 0.59, 0.21, 3.1, 2.4, 5.0], ["PLATENSE - U21F", "ARIAS LUCIANI, MARIA PIA", 7, 26.1, 6.0, 0.41, 0.2, 0.44, 0.39, 9.3, 0.65, 0.22, 5.7, 2.0, 7.7], ["Reconquista - U21F", "HERNANDEZ DIAZ, BELÉN MARÍA", 13, 26.1, 5.2, 0.38, 0.14, 0.56, 0.31, 9.2, 0.56, 0.21, 2.1, 1.2, 3.2], ["C. MARCHIGIANO - U21F", "CALVO, AMPARO", 13, 25.9, 1.2, 0.18, 0.0, 0.29, 0.18, 7.1, 0.17, 0.53, 4.9, 1.4, 1.2], ["Reconquista - U21F", "DE LUCA DE REGE, MALENA", 12, 25.8, 16.2, 0.47, 0.17, 0.58, 0.46, 19.3, 0.84, 0.14, 10.3, 0.9, 21.1], ["Reconquista - U21F", "MELO, LOURDES", 8, 25.6, 16.8, 0.54, 0.33, 0.6, 0.53, 17.4, 0.96, 0.15, 9.2, 1.4, 21.2], ["MERIDIANO V - U21F", "PETTRICCA VILLALOBOS, BRUNELLA", 15, 25.4, 2.9, 0.29, 0.2, 0.33, 0.23, 7.7, 0.37, 0.4, 1.5, 0.4, -3.7], ["ESTRELLA - U21F", "SOSA, LUCIA", 15, 25.0, 2.5, 0.22, 0.11, 0.29, 0.16, 10.8, 0.24, 0.45, 3.2, 0.5, -4.6], ["UNLP - U21F", "CEPEDA, LOURDES", 7, 25.0, 5.9, 0.21, 0.35, 0.75, 0.27, 12.0, 0.49, 0.31, 3.4, 0.9, 1.4], ["Reconquista - U21F", "DELMÉNICO,  FRANCINA", 13, 24.9, 5.8, 0.41, 0.18, 0.41, 0.29, 11.6, 0.5, 0.27, 4.1, 1.7, 3.5], ["UNLP - U21F", "HUACO BAUTISTA, KAMILA JESUS", 11, 24.7, 4.5, 0.5, 0.06, 0.41, 0.38, 7.4, 0.61, 0.22, 5.5, 0.2, 6.1], ["DEPORTIVO SAN VICENTE - U21F", "URRETABIZKAYA, OLIVIA", 14, 24.5, 11.8, 0.35, 0.18, 0.43, 0.32, 19.8, 0.59, 0.17, 4.9, 1.4, 8.0], ["UNLP - U21F", "AGUILAR, KEILA AGUSTINA", 4, 24.0, 3.0, 0.4, 0.1, 0.5, 0.25, 7.5, 0.4, 0.3, 2.5, 0.5, 0.5], ["HOGAR SOCIAL - U21F", "GARCIA BARONE, MICAELA", 14, 23.8, 3.4, 0.3, 0.27, 0.2, 0.3, 6.8, 0.51, 0.18, 2.9, 0.3, 0.9], ["ESTRELLA - U21F", "GIMENEZ, ZOE", 13, 23.7, 2.2, 0.19, 0.15, 0.15, 0.18, 12.5, 0.18, 0.54, 3.2, 0.4, -5.9], ["BANCO PROVINCIA - U21F", "DE BIASE, ALMA MARTINA", 15, 23.5, 4.1, 0.43, 0.03, 0.39, 0.27, 9.3, 0.44, 0.24, 3.1, 0.7, 1.2], ["BANCO PROVINCIA - U21F", "FILLIA, CAROLA", 15, 23.5, 4.5, 0.36, 0.38, 0.38, 0.36, 7.5, 0.59, 0.24, 5.9, 0.8, 5.6], ["HOGAR SOCIAL - U21F", "PENDENZA, MARIA GUADALUPE", 11, 23.4, 6.9, 0.36, 0.21, 0.68, 0.28, 11.0, 0.63, 0.18, 5.0, 1.3, 7.5], ["HOGAR SOCIAL - U21F", "ANSALONI, ISABELLA", 12, 23.3, 11.6, 0.4, 0.15, 0.65, 0.34, 17.5, 0.66, 0.19, 7.0, 1.8, 13.2], ["DEPORTIVO SAN VICENTE - U21F", "BREY NUÑEZ , SOL GUADALUPE", 11, 23.2, 3.2, 0.35, 0.25, 0.38, 0.3, 6.2, 0.51, 0.31, 3.5, 2.5, 4.6], ["MERIDIANO V - U21F", "VAZQUEZ, ELENA", 13, 22.8, 2.4, 0.48, 0.06, 0.5, 0.33, 5.7, 0.42, 0.39, 2.4, 0.8, 1.2], ["PLATENSE - U21F", "ACETO , EMMA", 13, 22.8, 4.8, 0.37, 0.08, 0.5, 0.32, 8.3, 0.57, 0.17, 4.3, 0.7, 4.9], ["C. MARCHIGIANO - U21F", "BUSTAMANTE, JULIANA", 10, 22.6, 4.5, 0.41, 0.0, 0.46, 0.32, 8.6, 0.52, 0.28, 4.6, 0.6, 3.3], ["MERIDIANO V - U21F", "MALENA, ARIZAGA", 9, 22.5, 3.9, 0.26, 0.2, 0.38, 0.26, 7.7, 0.51, 0.17, 4.0, 0.3, 2.4], ["JUVENTUD LP - U21 F", "LISSARRAGUE, MALENA SOL", 11, 22.2, 6.5, 0.42, 0.13, 0.53, 0.33, 9.1, 0.71, 0.1, 4.6, 1.0, 7.3], ["PLATENSE - U21F", "PAZ, NAHIARA MAITEN", 9, 22.2, 13.0, 0.53, 0.33, 0.81, 0.45, 12.8, 1.01, 0.1, 4.2, 2.0, 16.4], ["MERIDIANO V - U21F", "ALBERTI, MAILEN", 11, 22.2, 4.9, 0.39, 0.12, 0.45, 0.35, 8.9, 0.55, 0.31, 3.5, 0.3, 2.6], ["HOGAR SOCIAL - U21F", "NIETO, MILENA ZOE", 11, 21.8, 3.5, 0.35, 0.12, 0.38, 0.28, 6.8, 0.51, 0.21, 4.0, 0.3, 3.3], ["C. MARCHIGIANO - U21F", "VILLALOBOS, JAZMIN MARCELA", 13, 21.4, 3.3, 0.38, 0.14, 0.31, 0.32, 9.7, 0.34, 0.5, 4.2, 0.6, 0.8], ["MERIDIANO V - U21F", "MICCINO, JULIA CONSTANZA", 11, 21.2, 5.3, 0.42, 0.26, 0.44, 0.37, 7.9, 0.67, 0.22, 5.8, 0.6, 6.7], ["C. MARCHIGIANO - U21F", "GIMENEZ, ANA JAZMIN", 10, 21.1, 1.7, 0.19, 0.14, 0.25, 0.18, 10.0, 0.17, 0.6, 4.0, 1.2, -2.2], ["UNLP - U21F", "ZARATE, MARTINA", 10, 21.0, 2.8, 0.22, 0.13, 0.62, 0.19, 8.0, 0.35, 0.39, 3.9, 0.3, 0.2], ["DEPORTIVO SAN VICENTE - U21F", "BARRANUS, DELFINA", 8, 20.9, 7.9, 0.41, 0.33, 0.75, 0.37, 9.5, 0.83, 0.09, 1.9, 0.4, 4.6], ["PLATENSE - U21F", "GEREZ, ANA MAIAM", 3, 20.1, 4.0, 0.36, 0.33, 0.25, 0.36, 7.9, 0.51, 0.34, 5.3, 0.3, 2.3], ["JUVENTUD LP - U21 F", "COULOMME, PILAR", 13, 19.7, 2.5, 0.24, 0.18, 0.8, 0.2, 5.3, 0.46, 0.17, 2.2, 0.5, 1.5], ["JUVENTUD LP - U21 F", "BUSTILLO, MERCEDES", 11, 18.8, 4.0, 0.3, 0.29, 0.5, 0.3, 7.3, 0.55, 0.22, 2.7, 0.9, 2.5], ["BANCO PROVINCIA - U21F", "HERNANDEZ, ISABELLA", 14, 18.7, 2.1, 0.35, 0.15, 0.33, 0.24, 6.5, 0.33, 0.44, 3.1, 1.4, 1.0], ["JUVENTUD LP - U21 F", "CABALETTE, JULIANA", 14, 18.7, 4.8, 0.53, 0.2, 0.38, 0.5, 6.8, 0.7, 0.28, 3.9, 0.5, 5.6], ["UNLP - U21F", "HUACO BAUTISTA, KASANDRA MANUELA", 8, 18.3, 2.2, 0.55, 0.33, 0.23, 0.5, 4.7, 0.48, 0.48, 2.4, 0.8, 2.1], ["MERIDIANO V - U21F", "GAUDIO, JULIANA", 7, 18.0, 5.6, 0.41, 0.5, 0.38, 0.43, 8.4, 0.67, 0.31, 1.7, 0.3, 2.1], ["DEPORTIVO SAN VICENTE - U21F", "HARRIAGA, BERNARDA", 6, 18.0, 12.5, 0.66, 0.42, 0.53, 0.6, 11.9, 1.05, 0.18, 3.8, 1.0, 14.0], ["JUVENTUD LP - U21 F", "MORGADO, AMPARO MARISOL", 8, 17.6, 2.6, 0.2, 0.33, 0.17, 0.22, 7.2, 0.36, 0.24, 2.8, 0.8, -0.4], ["DEPORTIVO SAN VICENTE - U21F", "ARANA , ORNELLA", 7, 17.4, 3.4, 0.57, 0.2, 0.5, 0.47, 4.5, 0.76, 0.25, 1.7, 0.6, 3.0], ["BANCO PROVINCIA - U21F", "MONGAN, FRANCISCA", 3, 17.3, 3.7, 0.44, 0.12, 0.0, 0.29, 7.2, 0.51, 0.14, 2.0, 0.3, 1.7], ["PLATENSE - U21F", "VITA SCIUTTO, JOAQUINA", 12, 17.3, 4.1, 0.29, 0.18, 0.44, 0.24, 8.5, 0.48, 0.19, 2.4, 0.8, 1.7], ["UNLP - U21F", "BIURRARENA, MORENA", 9, 17.2, 1.9, 0.38, 0.11, 0.14, 0.23, 5.3, 0.35, 0.29, 2.3, 0.1, -1.0], ["C. MARCHIGIANO - U21F", "MOLLE, MAITE", 12, 17.2, 1.2, 0.17, 0.33, 0.0, 0.18, 4.7, 0.27, 0.3, 2.2, 0.4, -0.9], ["Reconquista - U21F", "ORTIZ, MONSERRAT", 3, 17.1, 2.7, 0.21, 0.0, 0.0, 0.21, 8.3, 0.32, 0.24, 7.3, 1.3, 5.3], ["JUVENTUD LP - U21 F", "DOMINGUEZ, MARIA PILAR", 13, 16.8, 6.8, 0.47, 0.28, 0.61, 0.4, 8.4, 0.81, 0.16, 3.1, 0.2, 5.5], ["HOGAR SOCIAL - U21F", "CAREDIO, ERNESTINA", 12, 16.8, 4.5, 0.35, 0.08, 0.48, 0.3, 7.8, 0.57, 0.15, 3.2, 0.5, 3.4], ["PLATENSE - U21F", "ALBERTI, MIA", 1, 16.3, 5.0, 0.33, 0.14, 0.0, 0.2, 11.0, 0.45, 0.09, 2.0, 1.0, 0.0], ["UNLP - U21F", "GORDILLO VIDELA, VALENTINA", 10, 16.3, 1.1, 0.17, 0.0, 0.08, 0.16, 4.4, 0.25, 0.14, 3.0, 0.1, 0.3], ["PLATENSE - U21F", "PEREIRA DUARTE, MORA", 2, 16.2, 5.5, 1.0, 0.0, 0.33, 0.83, 4.2, 1.32, 0.12, 2.5, 1.0, 8.5], ["HOGAR SOCIAL - U21F", "CAREDIO, ALFONSINA", 5, 15.9, 6.8, 0.4, 0.12, 0.41, 0.34, 12.3, 0.55, 0.26, 4.2, 1.2, 5.6], ["BANCO PROVINCIA - U21F", "TELLO GALVAN, ERNESTINA", 8, 15.7, 1.8, 0.11, 0.0, 0.5, 0.11, 6.2, 0.28, 0.46, 1.6, 0.5, -0.4], ["C. MARCHIGIANO - U21F", "MIORI, MARIA VICTORIA", 10, 15.6, 2.4, 0.17, 0.09, 0.67, 0.14, 10.4, 0.23, 0.37, 2.5, 0.3, -2.6], ["DEPORTIVO SAN VICENTE - U21F", "BAUER, DANA LUCIA", 4, 15.3, 2.5, 0.27, 0.0, 0.4, 0.25, 6.8, 0.36, 0.4, 4.2, 0.5, 1.8], ["ESTRELLA - U21F", "ROGGERO, MARTINA", 10, 14.9, 0.6, 0.23, 0.0, 0.0, 0.19, 3.6, 0.17, 0.5, 2.2, 0.1, -0.9], ["BANCO PROVINCIA - U21F", "SANDOVAL, AMPARO", 14, 14.9, 2.9, 0.3, 0.0, 0.36, 0.3, 5.7, 0.5, 0.19, 4.3, 0.5, 1.7], ["C. MARCHIGIANO - U21F", "ALBARRACIN, LUCIA", 9, 14.8, 1.7, 0.23, 0.0, 0.17, 0.2, 7.1, 0.24, 0.41, 3.8, 0.2, -0.4], ["Reconquista - U21F", "VOLKER, PILAR", 1, 14.7, 9.0, 1.0, 0.4, 0.25, 0.5, 8.8, 1.03, 0.11, 1.0, 0.0, 3.0], ["UNLP - U21F", "FERNANDEZ DIAZ, FLOREANA EVELYN", 5, 14.6, 1.8, 0.67, 0.0, 0.25, 0.5, 3.1, 0.57, 0.38, 1.6, 0.2, 1.0], ["HOGAR SOCIAL - U21F", "RISCIOLESE, MARIA VALENTINA", 12, 14.5, 3.1, 0.62, 0.23, 0.5, 0.39, 4.6, 0.68, 0.27, 2.1, 1.1, 2.1], ["C. MARCHIGIANO - U21F", "BOGADO, LOANA MAGALI", 14, 14.5, 3.4, 0.31, 0.0, 0.59, 0.3, 8.6, 0.4, 0.41, 2.6, 0.3, 0.1], ["BANCO PROVINCIA - U21F", "BASTERRETCHE, JULIA", 13, 14.4, 2.8, 0.28, 0.0, 0.4, 0.23, 6.5, 0.43, 0.18, 2.4, 0.7, 0.9], ["BANCO PROVINCIA - U21F", "MOLINARI, JAZMIN LUCIA", 6, 14.3, 3.5, 0.33, 0.22, 0.5, 0.27, 7.7, 0.46, 0.33, 2.2, 0.5, 0.7], ["MERIDIANO V - U21F", "PAWLOW, LOLA", 12, 14.0, 4.4, 0.36, 0.0, 0.44, 0.35, 7.4, 0.6, 0.2, 4.8, 0.2, 3.6], ["DEPORTIVO SAN VICENTE - U21F", "ROMERO LANDINI, ALMA LUZ CAMILA", 4, 14.0, 3.2, 0.71, 0.5, 0.0, 0.67, 3.1, 1.05, 0.24, 1.5, 0.2, 1.8], ["JUVENTUD LP - U21 F", "COULOMME, SOF\u00cdA", 2, 14.0, 8.0, 0.5, 0.44, 0.0, 0.46, 7.5, 1.07, 0.13, 1.5, 1.5, 5.5], ["BANCO PROVINCIA - U21F", "MONGAN, PILAR", 11, 13.8, 4.5, 0.45, 0.29, 0.2, 0.43, 6.6, 0.67, 0.21, 2.5, 0.3, 3.9], ["MERIDIANO V - U21F", "PELLISERO, JUANITA", 14, 13.6, 1.6, 0.46, 0.0, 0.25, 0.44, 3.0, 0.55, 0.36, 1.7, 0.1, 0.6], ["Reconquista - U21F", "DEZEO, MIA LOURDES", 13, 13.4, 2.7, 0.35, 0.0, 0.39, 0.33, 5.8, 0.47, 0.33, 1.5, 0.8, 0.9], ["Reconquista - U21F", "CANALES , NAHIARA", 12, 13.2, 3.9, 0.42, 0.0, 0.33, 0.41, 7.0, 0.56, 0.31, 3.8, 1.2, 5.4], ["HOGAR SOCIAL - U21F", "DI LORENZO, ISABELA", 1, 13.2, 2.0, 0.33, 0.0, 0.0, 0.2, 6.9, 0.29, 0.15, 0.0, 0.0, -5.0], ["JUVENTUD LP - U21 F", "BUSTILLO, CATALINA", 13, 13.1, 1.5, 0.35, 0.09, 0.0, 0.26, 4.3, 0.34, 0.38, 2.0, 0.4, 0.0], ["BANCO PROVINCIA - U21F", "ROSENFELD, EMMA", 14, 13.0, 1.4, 0.26, 0.19, 0.0, 0.23, 3.8, 0.36, 0.32, 1.1, 0.4, -1.3], ["ESTRELLA - U21F", "CASTRO, CLARA MIA", 15, 13.0, 1.1, 0.21, 0.0, 0.0, 0.2, 4.3, 0.25, 0.37, 2.7, 0.1, -0.9], ["MERIDIANO V - U21F", "FLORIN FLORES, CATALINA EUGENIA", 13, 12.9, 1.8, 0.33, 0.2, 0.5, 0.3, 3.7, 0.5, 0.35, 1.5, 0.0, -0.4], ["Reconquista - U21F", "VALLADARES DALDOSSO, INDIRA", 8, 12.6, 2.5, 0.42, 0.0, 0.36, 0.35, 5.5, 0.46, 0.36, 5.1, 0.4, 3.8], ["ESTRELLA - U21F", "PLAZA, MILAGROS JAZMIN", 16, 12.1, 1.1, 0.29, 0.19, 0.14, 0.23, 3.4, 0.33, 0.39, 1.3, 0.2, -0.5], ["ESTRELLA - U21F", "SERBALI, PALOMA", 11, 11.6, 0.9, 0.29, 0.0, 0.2, 0.21, 4.7, 0.19, 0.55, 1.7, 0.1, -2.0], ["HOGAR SOCIAL - U21F", "L\u00d3PEZ FOLONE, ZOE", 8, 11.3, 2.0, 0.5, 0.21, 0.5, 0.3, 3.0, 0.67, 0.13, 1.2, 0.2, 2.9], ["PLATENSE - U21F", "DE MONTE VALLEDOR, MANUELA", 2, 11.2, 3.0, 0.38, 0.0, 0.0, 0.38, 5.5, 0.55, 0.27, 2.0, 0.5, 3.0], ["Reconquista - U21F", "ORBE, VALENTINA", 10, 11.2, 3.2, 0.44, 0.0, 0.0, 0.41, 5.5, 0.58, 0.29, 2.1, 0.3, 2.6], ["BANCO PROVINCIA - U21F", "ROSENFELD, LISA", 3, 10.9, 3.3, 0.5, 0.25, 0.5, 0.4, 6.0, 0.56, 0.39, 2.3, 0.7, 3.3], ["ESTRELLA - U21F", "SOTELO, YANET MELANY", 16, 10.8, 0.7, 0.21, 0.0, 0.2, 0.21, 3.0, 0.23, 0.46, 1.4, 0.1, -1.4], ["MERIDIANO V - U21F", "DREBERT, AGOSTINA", 10, 10.6, 0.9, 0.33, 0.0, 0.56, 0.25, 2.0, 0.45, 0.4, 1.6, 0.0, 0.4], ["PLATENSE - U21F", "LUGONES, ISABELLA", 2, 10.4, 6.5, 0.71, 0.25, 0.0, 0.55, 6.5, 1.0, 0.15, 3.5, 0.5, 8.0], ["HOGAR SOCIAL - U21F", "ARCE, ALMA VALENTINA", 11, 10.3, 2.7, 0.41, 0.14, 0.3, 0.36, 4.8, 0.57, 0.23, 2.5, 0.5, 2.5], ["DEPORTIVO SAN VICENTE - U21F", "DABROSKI, LEYLA", 11, 10.2, 1.3, 0.29, 0.25, 0.0, 0.27, 3.1, 0.41, 0.32, 2.1, 0.2, 0.6], ["Reconquista - U21F", "GIANFELICE SOTELO, VALENTINA ANTONELLA", 13, 10.0, 1.8, 0.33, 0.0, 0.37, 0.28, 3.3, 0.56, 0.14, 2.3, 0.3, 2.5], ["DEPORTIVO SAN VICENTE - U21F", "CACERES , BIANCA", 7, 9.7, 0.0, 0.0, 0.0, 0.0, 0.0, 1.7, 0.0, 0.17, 0.9, 0.6, 0.0], ["MERIDIANO V - U21F", "PALACIOS, FATIMA", 3, 9.7, 0.0, 0.0, 0.0, 0.0, 0.0, 3.7, 0.0, 0.64, 2.7, 0.0, -1.0], ["JUVENTUD LP - U21 F", "LISSARRAGUE, LUCIA MAITE", 13, 9.5, 1.3, 0.25, 0.29, 0.75, 0.26, 2.8, 0.48, 0.31, 1.2, 0.5, 0.4], ["JUVENTUD LP - U21 F", "MESSINEO, RENATA", 1, 9.4, 2.0, 1.0, 0.0, 0.0, 1.0, 2.0, 1.0, 0.5, 2.0, 0.0, 2.0], ["Reconquista - U21F", "GUTIERREZ ROCHA, RENATA", 7, 9.3, 0.9, 0.27, 0.0, 0.0, 0.21, 3.4, 0.25, 0.38, 1.6, 0.4, 0.1], ["Reconquista - U21F", "PORCEL DE PERALTA CRISTALDO, LARA JULIETA", 2, 9.3, 2.0, 0.33, 0.0, 0.5, 0.33, 3.4, 0.59, 0.3, 3.5, 0.5, 4.0], ["UNLP - U21F", "FIDALGO, FAUSTINA", 8, 9.3, 0.2, 0.2, 0.0, 0.0, 0.17, 1.0, 0.25, 0.25, 0.5, 0.2, 0.4], ["Reconquista - U21F", "LOZA BAVIO, CAMILA", 4, 9.0, 2.0, 0.5, 0.0, 0.0, 0.4, 3.8, 0.53, 0.33, 1.8, 0.0, 2.2], ["JUVENTUD LP - U21 F", "LAGRANGE, SOFIA", 3, 8.8, 0.0, 0.0, 0.0, 0.0, 0.0, 2.7, 0.0, 0.62, 0.3, 0.0, -3.3], ["Reconquista - U21F", "PEREZ, CANDELA ANAH\u00cd", 3, 8.6, 1.0, 0.0, 0.5, 0.0, 0.2, 2.3, 0.43, 0.29, 1.3, 0.3, 1.0], ["ESTRELLA - U21F", "MERCADO, JULIETA ABRIL", 2, 8.3, 0.0, 0.0, 0.0, 0.0, 0.0, 3.5, 0.0, 0.57, 1.0, 0.0, -3.0], ["Reconquista - U21F", "ROSALES FERNANDEZ, ALEJANDRA MILAGROS", 9, 8.3, 0.2, 0.33, 0.0, 0.0, 0.12, 1.6, 0.14, 0.43, 0.9, 0.2, 0.1], ["PLATENSE - U21F", "MARIANI, ONA", 12, 8.1, 3.5, 0.55, 0.1, 0.83, 0.44, 4.1, 0.85, 0.12, 1.1, 0.8, 3.9], ["Reconquista - U21F", "CAUSA, CATALINA", 6, 7.9, 0.3, 0.14, 0.0, 0.0, 0.1, 2.5, 0.13, 0.27, 1.8, 0.0, -0.2], ["MERIDIANO V - U21F", "ALTUNA, VICTORIA", 2, 7.9, 1.0, 0.25, 0.0, 0.0, 0.25, 2.5, 0.4, 0.2, 0.5, 0.0, -1.0], ["C. MARCHIGIANO - U21F", "GUERRERO, SOFIA", 12, 7.9, 0.5, 0.3, 0.0, 0.0, 0.27, 1.4, 0.34, 0.34, 1.8, 0.1, 1.2], ["BANCO PROVINCIA - U21F", "PRIARIO NOLI, JUANA", 10, 7.9, 1.0, 0.38, 0.0, 0.0, 0.26, 3.2, 0.31, 0.41, 0.6, 0.5, -1.0], ["ESTRELLA - U21F", "DERR\u00c9, PALOMA", 1, 7.8, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 0.5, 1.0, 0.0, -5.0], ["UNLP - U21F", "COPPA ELIAS, SOFIA", 8, 7.8, 0.1, 0.0, 0.0, 0.25, 0.0, 0.7, 0.17, 0.52, 0.1, 0.1, 0.0], ["DEPORTIVO SAN VICENTE - U21F", "MACRI, FLORENCIA MAITENA", 11, 7.7, 1.8, 0.33, 0.25, 0.5, 0.29, 3.1, 0.58, 0.23, 1.1, 0.4, 1.3], ["BANCO PROVINCIA - U21F", "SIMSIC BRUN, IARA", 15, 7.6, 0.2, 0.08, 0.0, 0.5, 0.07, 1.3, 0.15, 0.2, 0.8, 0.2, -0.1], ["ESTRELLA - U21F", "ARAGON VILLAVICENCIO, MATILDA AMBAR", 10, 7.5, 0.0, 0.0, 0.0, 0.0, 0.0, 1.1, 0.0, 0.55, 0.9, 0.1, -0.2], ["C. MARCHIGIANO - U21F", "CORIA, MORENA BELEN", 12, 7.2, 0.3, 0.12, 0.0, 0.5, 0.12, 1.7, 0.19, 0.53, 0.6, 0.1, -0.8], ["PLATENSE - U21F", "MANGINI, SOFIA JULIETA", 2, 7.0, 3.5, 0.0, 1.0, 0.5, 1.0, 1.4, 2.43, 0.0, 0.0, 0.5, 3.5], ["PLATENSE - U21F", "PERALTA, PALOMA", 11, 7.0, 1.3, 0.38, 0.17, 0.5, 0.32, 2.4, 0.52, 0.26, 1.2, 0.8, 1.8], ["C. MARCHIGIANO - U21F", "LUNA ORTEGA, FLORENCIA NAZARENA", 3, 6.6, 0.0, 0.0, 0.0, 0.0, 0.0, 1.3, 0.0, 0.5, 1.0, 0.0, -0.7], ["JUVENTUD LP - U21 F", "MORGADO, SERENA MARINE", 3, 6.5, 0.0, 0.0, 0.0, 0.0, 0.0, 2.6, 0.0, 0.38, 2.7, 0.3, 0.3], ["PLATENSE - U21F", "POGGIO, MAGDALENA", 6, 6.3, 0.8, 0.25, 0.5, 0.0, 0.33, 1.5, 0.56, 0.33, 0.8, 0.0, 0.8], ["Reconquista - U21F", "VEIZAGA, WENDY ARACELI", 5, 6.3, 1.0, 0.29, 0.0, 0.5, 0.29, 2.0, 0.51, 0.2, 1.2, 0.0, 1.0], ["Reconquista - U21F", "DEVECE, SOFIA", 5, 6.2, 2.4, 0.71, 0.0, 0.5, 0.62, 3.1, 0.76, 0.38, 1.2, 0.6, 2.2], ["BANCO PROVINCIA - U21F", "ALVAREZ, EMILIA", 1, 6.0, 4.0, 1.0, 0.0, 0.0, 1.0, 4.0, 1.0, 0.5, 2.0, 0.0, 4.0], ["C. MARCHIGIANO - U21F", "ORTEGA, MARIA PAULA", 2, 5.9, 1.5, 0.0, 0.5, 0.0, 0.25, 3.9, 0.38, 0.38, 0.0, 0.5, -0.5], ["MERIDIANO V - U21F", "TARCHINI EMMA, EMMA", 2, 5.8, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.5, 1.0, 0.0, -1.0], ["DEPORTIVO SAN VICENTE - U21F", "POINTIS ACERBI , LUZ MARTINA", 6, 5.8, 0.0, 0.0, 0.0, 0.0, 0.0, 1.8, 0.0, 0.18, 0.5, 0.0, -1.5], ["DEPORTIVO SAN VICENTE - U21F", "VONA , ISABELLA", 6, 5.4, 0.8, 0.5, 0.2, 0.0, 0.29, 1.5, 0.56, 0.22, 0.3, 0.3, 0.7], ["BANCO PROVINCIA - U21F", "TUR ZAPICO, NAIA", 2, 5.4, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 1.0, 0.5, -2.5], ["ESTRELLA - U21F", "SANTALUCITA MARTINEZ, SOFIA NAHIR", 2, 5.3, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0], ["ESTRELLA - U21F", "IFRAN, KENIA", 8, 5.2, 0.0, 0.0, 0.0, 0.0, 0.0, 1.6, 0.0, 0.54, 0.2, 0.0, -2.5], ["ESTRELLA - U21F", "IURADA, MANUELA", 6, 5.1, 0.3, 0.5, 0.0, 0.0, 0.33, 0.8, 0.4, 0.4, 1.2, 0.0, 1.2], ["PLATENSE - U21F", "BORZI ARAQUE, JUSTINA", 7, 4.7, 1.3, 0.75, 0.17, 0.0, 0.4, 1.8, 0.7, 0.16, 0.0, 0.0, -0.3], ["MERIDIANO V - U21F", "VITALE BARBOSA, JULIA MARIA", 13, 4.7, 0.0, 0.0, 0.0, 0.0, 0.0, 1.3, 0.0, 0.47, 0.3, 0.0, -1.2], ["PLATENSE - U21F", "ASSANTE, GUADALUPE", 3, 4.4, 0.3, 0.0, 0.0, 1.0, 0.0, 1.5, 0.23, 0.45, 1.0, 0.0, 0.0], ["JUVENTUD LP - U21 F", "CISINT, JUSTINA", 1, 4.3, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 1.0, 0.0, -2.0], ["ESTRELLA - U21F", "GALV\u00c1N, ROSARIO", 7, 4.3, 0.3, 0.25, 0.0, 0.0, 0.25, 1.6, 0.18, 0.61, 0.7, 0.0, -0.4], ["C. MARCHIGIANO - U21F", "AGUILERA, ERNESTINA", 10, 3.9, 0.5, 0.29, 0.0, 1.0, 0.29, 1.1, 0.44, 0.35, 0.6, 0.0, 0.4], ["PLATENSE - U21F", "MARTINEZ, MORENA", 7, 3.6, 0.7, 0.33, 0.0, 0.75, 0.2, 1.1, 0.64, 0.13, 0.3, 0.3, 0.4], ["DEPORTIVO SAN VICENTE - U21F", "BOGADO LOSARDO , LUDMILA MAILEN", 9, 2.6, 0.2, 0.5, 0.0, 0.0, 0.2, 0.7, 0.33, 0.17, 0.1, 0.0, -0.2], ["PLATENSE - U21F", "RIEDEL, VICTORIA NATALI", 3, 1.4, 0.0, 0.0, 0.0, 0.0, 0.0, 1.3, 0.0, 0.75, 0.0, 0.0, -1.3], ["DEPORTIVO SAN VICENTE - U21F", "MARTINEZ, SOFIA", 1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], ["JUVENTUD LP - U21 F", "ARRIARAN, AINARA", 2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], ["BANCO PROVINCIA - U21F", "AMERISE, AZARIA", 1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]];

// 10 Clubes oficiales de la liga
const OFFICIAL_TEAMS = [
  "BANCO PROVINCIA", "C. MARCHIGIANO", "DEPORTIVO SAN VICENTE", "ESTRELLA",
  "HOGAR SOCIAL", "JUVENTUD", "MERIDIANO V", "PLATENSE", "RECONQUISTA", "UNLP"
];

// Metadatos y posiciones del plantel de Reconquista (21 jugadoras)
const REC_METADATA = {
  "IGLESIAS, ALMA": { pos: "PG", num: 4, isStarter: true, isConvocada: true, depth: 1 },
  "DELMÉNICO, FRANCINA": { pos: "PG", num: 5, isStarter: false, isConvocada: true, depth: 2 },
  "VOLKER, PILAR": { pos: "PG", num: 22, isStarter: false, isConvocada: true, depth: 3 },
  "GUTIERREZ ROCHA, RENATA": { pos: "PG", num: 21, isStarter: false, isConvocada: false, depth: 4 },

  "CALLEGARO, PILAR": { pos: "SG", num: 6, isStarter: true, isConvocada: true, depth: 1 },
  "HERNANDEZ DIAZ, BELÉN MARÍA": { pos: "SG", num: 7, isStarter: false, isConvocada: true, depth: 2 },
  "PORCEL DE PERALTA CRISTALDO, LARA JULIETA": { pos: "SG", num: 23, isStarter: false, isConvocada: false, depth: 3 },
  "VEIZAGA, WENDY ARACELI": { pos: "SG", num: 8, isStarter: false, isConvocada: false, depth: 4 },

  "ORBE, VALENTINA": { pos: "SF", num: 9, isStarter: true, isConvocada: true, depth: 1 },
  "LOZA BAVIO, CAMILA": { pos: "SF", num: 10, isStarter: false, isConvocada: false, depth: 2 },
  "PEREZ, CANDELA ANAHÍ": { pos: "SF", num: 24, isStarter: false, isConvocada: false, depth: 3 },
  "ROSALES FERNANDEZ, ALEJANDRA MILAGROS": { pos: "SF", num: 11, isStarter: false, isConvocada: false, depth: 4 },
  "CAUSA, CATALINA": { pos: "SF", num: 12, isStarter: false, isConvocada: false, depth: 5 },
  "DEVECE, SOFIA": { pos: "SF", num: 20, isStarter: false, isConvocada: false, depth: 6 },

  "CANALES, NAHIARA": { pos: "PF", num: 13, isStarter: true, isConvocada: true, depth: 1 },
  "DEZEO, MIA LOURDES": { pos: "PF", num: 14, isStarter: false, isConvocada: true, depth: 2 },
  "GIANFELICE SOTELO, VALENTINA ANTONELLA": { pos: "PF", num: 15, isStarter: false, isConvocada: false, depth: 3 },
  "MELO, LOURDES": { pos: "PF", num: 16, isStarter: false, isConvocada: true, depth: 4 },

  "DE LUCA DE REGE, MALENA": { pos: "C", num: 17, isStarter: true, isConvocada: true, depth: 1 },
  "ORTIZ, MONSERRAT": { pos: "C", num: 18, isStarter: false, isConvocada: true, depth: 2 },
  "VALLADARES DALDOSSO, INDIRA": { pos: "C", num: 19, isStarter: false, isConvocada: true, depth: 3 }
};

// Partidos iniciales de muestra
const DEFAULT_MATCHES = [
  {
    id: "m_1",
    round: "2° Fecha",
    date: "29/3/2026",
    home: "BANCO PROVINCIA",
    homePts: 32,
    away: "DEPORTIVO SAN VICENTE",
    awayPts: 64
  },
  {
    id: "m_2",
    round: "3° Fecha",
    date: "12/4/2026",
    home: "BANCO PROVINCIA",
    homePts: 60,
    away: "UNLP",
    awayPts: 41
  },
  {
    id: "m_3",
    round: "12° Fecha",
    date: "14/6/2026",
    home: "PLATENSE",
    homePts: 89,
    away: "MERIDIANO V",
    awayPts: 37
  }
];

// Estado global de la aplicación
let state = {
  reconquista: [],
  scoutingData: [],
  matches: [],
  standings: [],
  selectedColumns: ['EQUIPO', 'Nombre', 'PJ', 'MIN', 'PTS', 'T2%', 'T3%', 'T1%', 'TC%', 'PLAYS', 'PPP', 'TO%', 'RT', 'AST', 'VAL'],
  sortCol: 'PTS',
  sortAsc: false,
  activeModalPlayerId: null,
  showReserves: true,
  selectedSwapId: null
};

function cleanTeamName(name) {
  if (!name) return "";
  let n = name.toUpperCase()
    .replace(/ - U21F/g, "")
    .replace(/ - U21 F/g, "")
    .replace(/\(U21\)/g, "")
    .replace(/\(U15\/U21\)/g, "")
    .replace(/\(U17\/U21\)/g, "")
    .trim();
  if (n.includes("SAN VICENTE")) return "DEPORTIVO SAN VICENTE";
  if (n.includes("MARCHIGIANO")) return "C. MARCHIGIANO";
  if (n.includes("RECONQUISTA")) return "RECONQUISTA";
  if (n.includes("BANCO")) return "BANCO PROVINCIA";
  if (n.includes("ESTRELLA")) return "ESTRELLA";
  if (n.includes("HOGAR")) return "HOGAR SOCIAL";
  if (n.includes("JUVENTUD")) return "JUVENTUD";
  if (n.includes("MERIDIANO")) return "MERIDIANO V";
  if (n.includes("PLATENSE")) return "PLATENSE";
  if (n.includes("UNLP") || n.includes("U.N.L.P")) return "UNLP";
  return n;
}

function calcAttributes(s) {
  const clamp = (v, min = 1, max = 20) => Math.min(max, Math.max(min, Math.round(v)));
  return {
    "Triple (3PT)": clamp((s['T3%'] || 0) * 28 + 4),
    "Media Distancia": clamp((s['T2%'] || 0) * 24 + 3),
    "Manejo & Pase": clamp((s.AST || 1) * 3 + 4),
    "Defensa Exterior": clamp((s.MIN > 20 ? 14 : 9)),
    "Defensa Interior": clamp((s.RT || 0) * 1.5 + 4),
    "Rebote Of/Def": clamp((s.RT || 0) * 1.7 + 3),
    "Físico & Resistencia": clamp((s.MIN || 0) * 0.45 + (s.VAL > 0 ? s.VAL * 0.25 : 2))
  };
}

// AUTO-GUARDADO GLOBAL
function saveRosterState() {
  const rosterState = state.reconquista.map(p => ({
    name: p.name,
    pos: p.pos,
    cat: p.cat || "U21",
    dorsal: p.dorsal,
    isStarter: p.isStarter,
    courtSlot: p.courtSlot,
    isConvocada: p.isConvocada,
    depth: p.depth,
    status: p.status
  }));
  localStorage.setItem("rec_u21_roster", JSON.stringify(rosterState));
}

function initData() {
  const savedMatches = localStorage.getItem("rec_u21_matches");
  if (savedMatches) {
    try { state.matches = JSON.parse(savedMatches); } catch (e) { state.matches = DEFAULT_MATCHES; }
  } else {
    state.matches = DEFAULT_MATCHES;
  }

  state.scoutingData = RAW_ROWS.map(r => ({
    EQUIPO: r[0],
    Nombre: r[1],
    PJ: r[2],
    MIN: r[3],
    PTS: r[4],
    'T2%': r[5],
    'T3%': r[6],
    'T1%': r[7],
    'TC%': r[8],
    PLAYS: r[9],
    PPP: r[10],
    'TO%': r[11],
    RT: r[12],
    AST: r[13],
    VAL: r[14]
  }));

  const recStats = state.scoutingData.filter(p => (p.EQUIPO || '').toLowerCase().includes('reconquista'));
  state.reconquista = recStats.map((p, idx) => {
    const cleanName = p.Nombre.replace(/\s+,\s+/g, ', ').trim();
    const metaKey = Object.keys(REC_METADATA).find(k => cleanName.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(cleanName.toLowerCase()));
    const meta = metaKey ? REC_METADATA[metaKey] : { pos: "SF", num: 20 + idx, isStarter: false, isConvocada: false, depth: 3 };
    return {
      id: "rec_" + idx,
      name: cleanName,
      pos: meta.pos,
      roleLabel: meta.pos,
      cat: meta.cat || "U21",
      dorsal: meta.num,
      isStarter: meta.isStarter,
      courtSlot: meta.pos,
      isConvocada: meta.isConvocada,
      depth: meta.depth,
      status: "ACT",
      stats: p,
      attrs: calcAttributes(p)
    };
  });

  // RESTAURAR PLANTEL GUARDADO (Dorsales, Puestos, Titulares y Convocadas fijas)
  const savedRoster = localStorage.getItem("rec_u21_roster");
  if (savedRoster) {
    try {
      const rosterData = JSON.parse(savedRoster);
      state.reconquista.forEach(p => {
        const savedP = rosterData.find(s => s.name.toLowerCase() === p.name.toLowerCase());
        if (savedP) {
          p.pos = savedP.pos;
          p.cat = savedP.cat || "U21";
          p.dorsal = savedP.dorsal;
          p.isStarter = savedP.isStarter;
          p.courtSlot = savedP.courtSlot;
          p.isConvocada = savedP.isConvocada;
          p.depth = savedP.depth;
          p.status = savedP.status;
        }
      });
    } catch(e) {
      console.error("Error al restaurar el plantel guardado:", e);
    }
  }

  // Renderizados principales
  computeStandings();
  renderStandings();
  renderMatchesHistory();
  renderTopPerformers();

  // Dibuja la planilla de 12, las reservas y la cancha táctica
  renderRosterTable();
  updateCourtPositions();

  const teamSet = new Set(state.scoutingData.map(p => p.EQUIPO).filter(Boolean));
  const teamSelect = document.getElementById('scoutTeamFilter');
  if (teamSelect) {
    teamSelect.innerHTML = '<option value="ALL">TODOS LOS EQUIPOS (10 Clubes)</option>';
    Array.from(teamSet).sort().forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.innerText = t.replace(' - U21F', '').replace(' - U21 F', '');
      teamSelect.appendChild(opt);
    });
  }

  renderColumnTags();
  if (typeof initOpponentSelect === 'function') initOpponentSelect();
}