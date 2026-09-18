import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";
import { pathToFileURL } from "node:url";

const workspaceDir = "C:\\Users\\José Gustavo\\OneDrive\\Escritorio\\experimentos\\experimentos-202620";
const skillDir = "C:\\Users\\José Gustavo\\\.codex\\plugins\\cache\\openai-primary-runtime\\presentations\\26.905.11957\\skills\\presentations";
const buildDir = path.join(workspaceDir, ".pptx-build");
const candidatePath = path.join(buildDir, "safespace-av1-rehecho-candidate.pptx");
const previewDir = path.join(buildDir, "preview-rehecho");
await fs.mkdir(previewDir, { recursive: true });

const { resolvePresentationFont } = await import(
  pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href,
);
const fontFamily = resolvePresentationFont();

const C = {
  ink: "#102A2A",
  dark: "#173832",
  dark2: "#214640",
  cream: "#F7F8F4",
  white: "#FFFFFF",
  coral: "#F47F70",
  coralSoft: "#FDE4DE",
  sage: "#A9C9AE",
  sageSoft: "#E6F0E6",
  blue: "#B8DCE8",
  blueSoft: "#E6F3F6",
  line: "#D5E0DC",
  muted: "#627671",
};

const A = (...parts) => path.join(workspaceDir, ...parts);
const imgCache = new Map();
async function imageBytes(relPath) {
  if (!imgCache.has(relPath)) imgCache.set(relPath, await fs.readFile(A(...relPath.split("/"))));
  return imgCache.get(relPath);
}

function addText(slide, text, { left, top, width, height, size = 20, color = C.ink, bold = false, align = "left", italic = false, name } = {}) {
  const box = slide.shapes.add({
    geometry: "textbox",
    name,
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = {
    typeface: fontFamily,
    fontSize: size,
    color,
    bold,
    italic,
    alignment: align,
    autoFit: "shrinkText",
  };
  return box;
}

function addRect(slide, { left, top, width, height, fill = C.white, lineFill = C.line, radius = 0, name } = {}) {
  return slide.shapes.add({
    geometry: radius ? "roundRect" : "rect",
    name,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: lineFill, width: lineFill === "none" ? 0 : 1 },
    ...(radius ? { borderRadius: radius } : {}),
  });
}

function addRule(slide, left, top, width, color = C.coral, thickness = 4) {
  return slide.shapes.add({
    geometry: "line",
    position: { left, top, width, height: 0 },
    fill: "none",
    line: { style: "solid", fill: color, width: thickness },
  });
}

async function addImage(slide, relPath, { left, top, width, height, fit = "contain", geometry = "roundRect", radius = 16, alt } = {}) {
  const image = {
    blob: await imageBytes(relPath),
    contentType: relPath.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg",
    alt: alt ?? relPath,
    fit,
    geometry,
    position: { left, top, width, height },
  };
  if (geometry === "rect" || geometry === "roundRect") image.borderRadius = radius;
  return slide.images.add(image);
}

function addHeader(slide, kicker, title, page) {
  addText(slide, kicker.toUpperCase(), { left: 56, top: 30, width: 900, height: 24, size: 12, color: C.coral, bold: true });
  addText(slide, title, { left: 56, top: 58, width: 1080, height: 58, size: 31, color: C.ink, bold: true });
  addRule(slide, 56, 126, 76, C.coral, 4);
  addText(slide, String(page).padStart(2, "0"), { left: 1170, top: 34, width: 54, height: 24, size: 13, color: C.muted, bold: true, align: "right" });
}

function addFooter(slide, label = "SafeSpace · Avance 1") {
  addText(slide, label, { left: 56, top: 686, width: 500, height: 18, size: 10, color: C.muted });
  addRule(slide, 56, 672, 1168, C.line, 1);
}

function addPill(slide, text, left, top, width, fill = C.sageSoft, color = C.dark) {
  const p = addRect(slide, { left, top, width, height: 28, fill, lineFill: "none", radius: 14 });
  p.text = text;
  p.text.style = { typeface: fontFamily, fontSize: 12, color, bold: true, alignment: "center", autoFit: "shrinkText" };
  return p;
}

function styleTable(table, rows, { fontSize = 14, headerFill = C.dark, bandFill = C.sageSoft } = {}) {
  table.styleOptions = { headerRow: true, bandedRows: true };
  table.borders.assign({ style: "solid", fill: C.line, width: 1 });
  for (let r = 0; r < rows.length; r += 1) {
    for (let c = 0; c < rows[r].length; c += 1) {
      const cell = table.getCell(r, c);
      cell.text.style = {
        typeface: fontFamily,
        fontSize: r === 0 ? fontSize - 1 : fontSize,
        color: r === 0 ? C.white : C.ink,
        bold: r === 0,
        autoFit: "shrinkText",
      };
      cell.fill = r === 0 ? headerFill : (r % 2 === 0 ? bandFill : C.white);
    }
  }
}

function addTable(slide, rows, { left, top, width, height, columnWidths, fontSize = 14 } = {}) {
  const table = slide.tables.add({
    rows: rows.length,
    columns: rows[0].length,
    left,
    top,
    width,
    height,
    columnWidths,
    values: rows,
  });
  styleTable(table, rows, { fontSize });
  return table;
}

const presentation = Presentation.create({ slideSize: { width: 1280, height: 720 } });

// 1. Cover
{
  const s = presentation.slides.add();
  s.background.fill = C.cream;
  addRect(s, { left: 830, top: 0, width: 450, height: 720, fill: C.dark, lineFill: "none" });
  addText(s, "AVANCE 1 · 2026-20", { left: 62, top: 58, width: 480, height: 24, size: 13, color: C.coral, bold: true });
  addText(s, "SafeSpace", { left: 60, top: 112, width: 700, height: 72, size: 52, color: C.ink, bold: true });
  addRule(s, 62, 202, 92, C.coral, 5);
  addText(s, "Bienestar laboral y comunicación segura", { left: 62, top: 230, width: 660, height: 76, size: 29, color: C.dark, bold: true });
  addText(s, "Diseño de Experimentos de Ingeniería de Software\nIngeniería de Software · UPC · NRC 9097", { left: 62, top: 332, width: 560, height: 62, size: 16, color: C.muted });
  addText(s, "The Successful Ones Corp", { left: 62, top: 430, width: 500, height: 28, size: 16, color: C.ink, bold: true });
  await addImage(s, "assets/images/cap5/mobile/mobile-home.png", { left: 888, top: 72, width: 210, height: 456, fit: "cover", radius: 24, alt: "Inicio de SafeSpace en Android" });
  addText(s, "Una experiencia para empleados y RR. HH.", { left: 860, top: 552, width: 330, height: 46, size: 18, color: C.white, bold: true, align: "center" });
  const team = [
    ["Mauricio", "Pajés León", "assets/images/cap1/team/Mauricio.jpeg"],
    ["Milenko", "Cayanchi Avila", "assets/images/cap1/team/Milenko.jpeg"],
    ["Diego", "Ávalos Cordova", "assets/images/cap1/team/diego.png"],
    ["Jose", "Asto Jacome", "assets/images/cap1/team/Asto.jpeg"],
    ["Alexther", "Diaz Martinez", "assets/images/cap1/team/Alexther.jpeg"],
    ["Jean Niels", "Arizabal Condori", "assets/images/cap1/team/JeanNiels.png"],
  ];
  for (let i = 0; i < team.length; i += 1) {
    const x = 62 + i * 122;
    await addImage(s, team[i][2], { left: x, top: 520, width: 56, height: 56, fit: "cover", geometry: "ellipse", radius: 28, alt: team[i][0] });
    addText(s, `${team[i][0]}\n${team[i][1]}`, { left: x - 16, top: 583, width: 88, height: 40, size: 9, color: C.muted, align: "center" });
  }
}

// 2. Problem and solution
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "01 · Contexto", "Un problema de confianza y seguimiento", 2);
  addText(s, "Los empleados necesitan un canal seguro para comunicar situaciones sensibles. RR. HH. necesita información ordenada para responder a tiempo.", { left: 56, top: 152, width: 760, height: 56, size: 20, color: C.dark });
  addRect(s, { left: 56, top: 244, width: 350, height: 168, fill: C.coralSoft, lineFill: "none", radius: 18 });
  addText(s, "Problema", { left: 82, top: 270, width: 260, height: 30, size: 18, color: C.coral, bold: true });
  addText(s, "La información se dispersa y comunicar un problema puede generar desconfianza.", { left: 82, top: 312, width: 290, height: 66, size: 19, color: C.ink, bold: true });
  addRect(s, { left: 434, top: 244, width: 350, height: 168, fill: C.sageSoft, lineFill: "none", radius: 18 });
  addText(s, "Propuesta", { left: 460, top: 270, width: 260, height: 30, size: 18, color: C.dark, bold: true });
  addText(s, "SafeSpace centraliza bienestar, encuestas, reportes y orientación con privacidad.", { left: 460, top: 312, width: 290, height: 66, size: 19, color: C.ink, bold: true });
  await addImage(s, "assets/images/cap5/web/frontend-hr-home.png", { left: 820, top: 176, width: 382, height: 210, fit: "contain", radius: 14, alt: "Resumen de bienestar de RR. HH." });
  await addImage(s, "assets/images/cap5/mobile/mobile-home.png", { left: 886, top: 430, width: 138, height: 240, fit: "cover", radius: 18, alt: "Registro de ánimo en Android" });
  addText(s, "Empleados", { left: 844, top: 648, width: 220, height: 20, size: 12, color: C.muted, align: "center" });
  addText(s, "RR. HH.", { left: 840, top: 392, width: 320, height: 22, size: 13, color: C.muted, align: "center" });
  addFooter(s);
}

// 3. Users and needs
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "02 · Investigación", "Dos usuarios, una necesidad de confianza", 3);
  addText(s, "Las entrevistas y el análisis de necesidades orientan la solución hacia dos experiencias complementarias.", { left: 56, top: 150, width: 980, height: 34, size: 19, color: C.dark });
  await addImage(s, "assets/images/cap2/andres-perez.png", { left: 72, top: 230, width: 160, height: 160, fit: "cover", geometry: "ellipse", radius: 80, alt: "Persona empleada" });
  addText(s, "Andrés · empleado", { left: 58, top: 408, width: 190, height: 26, size: 18, color: C.ink, bold: true, align: "center" });
  addText(s, "Necesita privacidad, una forma sencilla de reportar situaciones y seguimiento sin exponerse.", { left: 270, top: 236, width: 340, height: 92, size: 20, color: C.ink, bold: true });
  addPill(s, "Privacidad", 270, 354, 120, C.coralSoft, C.coral); addPill(s, "Seguimiento", 402, 354, 130, C.blueSoft, C.dark);
  await addImage(s, "assets/images/cap2/beatriz-lugo.png", { left: 666, top: 230, width: 160, height: 160, fit: "cover", geometry: "ellipse", radius: 80, alt: "Persona de RR. HH." });
  addText(s, "Beatriz · RR. HH.", { left: 650, top: 408, width: 194, height: 26, size: 18, color: C.ink, bold: true, align: "center" });
  addText(s, "Necesita una vista clara del clima laboral, encuestas accionables y gestión de casos.", { left: 864, top: 236, width: 340, height: 92, size: 20, color: C.ink, bold: true });
  addPill(s, "Resumen", 864, 354, 112, C.sageSoft, C.dark); addPill(s, "Acción", 988, 354, 96, C.blueSoft, C.dark);
  addRect(s, { left: 56, top: 510, width: 1140, height: 98, fill: C.dark, lineFill: "none", radius: 18 });
  addText(s, "Hipótesis Lean UX", { left: 84, top: 532, width: 220, height: 24, size: 14, color: C.coral, bold: true });
  addText(s, "Un canal confidencial con seguimiento facilita que los empleados comuniquen sus inquietudes y que RR. HH. actúe con evidencia.", { left: 310, top: 528, width: 820, height: 40, size: 19, color: C.white, bold: true });
  addFooter(s);
}

// 4. Product flow
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "03 · Solución", "Un flujo que acompaña al usuario", 4);
  addText(s, "SafeSpace conecta el registro diario, la participación y la orientación en una sola experiencia.", { left: 56, top: 150, width: 900, height: 34, size: 19, color: C.dark });
  const steps = [
    ["01", "Registrar", "El empleado expresa cómo se siente hoy.", "assets/images/cap5/mobile/mobile-home.png"],
    ["02", "Participar", "Responde encuestas y vota en actividades.", "assets/images/cap5/mobile/mobile-surveys-overview.png"],
    ["03", "Orientarse", "Recibe apoyo conversacional privado.", "assets/images/cap5/mobile/mobile-ai-chat.png"],
  ];
  for (let i = 0; i < steps.length; i += 1) {
    const x = 56 + i * 392;
    addText(s, steps[i][0], { left: x, top: 232, width: 52, height: 42, size: 29, color: C.coral, bold: true });
    addText(s, steps[i][1], { left: x + 62, top: 238, width: 245, height: 28, size: 22, color: C.ink, bold: true });
    addText(s, steps[i][2], { left: x + 62, top: 280, width: 270, height: 48, size: 15, color: C.muted });
    await addImage(s, steps[i][3], { left: x + 62, top: 346, width: 250, height: 260, fit: "cover", radius: 18, alt: steps[i][1] });
    if (i < 2) addRule(s, x + 330, 470, 40, C.sage, 3);
  }
  addFooter(s);
}

// 5. Mobile evidence
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "04 · Producto móvil", "La experiencia del empleado ya está en marcha", 5);
  addText(s, "La aplicación Android reúne bienestar diario, encuestas, comentarios, actividades, perfil y Chat AI.", { left: 56, top: 150, width: 900, height: 34, size: 19, color: C.dark });
  await addImage(s, "assets/images/cap5/mobile/mobile-home.png", { left: 72, top: 230, width: 200, height: 432, fit: "cover", radius: 22, alt: "Inicio móvil" });
  await addImage(s, "assets/images/cap5/mobile/mobile-survey-comments.png", { left: 310, top: 230, width: 200, height: 432, fit: "cover", radius: 22, alt: "Comentarios anónimos" });
  await addImage(s, "assets/images/cap5/mobile/mobile-settings-en-dark.png", { left: 548, top: 230, width: 200, height: 432, fit: "cover", radius: 22, alt: "Configuración y tema oscuro" });
  addRect(s, { left: 812, top: 238, width: 368, height: 390, fill: C.sageSoft, lineFill: "none", radius: 18 });
  addText(s, "Flujos visibles", { left: 842, top: 270, width: 280, height: 28, size: 21, color: C.dark, bold: true });
  addText(s, "• Registro de ánimo\n• Encuestas y respuesta registrada\n• Comentarios, likes y respuestas\n• Actividad semanal y cambio de voto\n• Perfil, idioma y tema oscuro\n• Conversación privada con IA", { left: 842, top: 326, width: 296, height: 220, size: 17, color: C.ink });
  addText(s, "Kotlin · Jetpack Compose · SDK 36", { left: 842, top: 578, width: 296, height: 24, size: 13, color: C.muted, bold: true });
  addFooter(s);
}

// 6. Web experience
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "05 · Frontend web", "Participación y seguimiento desde la web", 6);
  addText(s, "El frontend web permite que los empleados respondan, reporten y consulten su actividad en un espacio único.", { left: 56, top: 150, width: 1000, height: 34, size: 19, color: C.dark });
  await addImage(s, "assets/images/cap5/web/frontend-web-mood.png", { left: 56, top: 226, width: 560, height: 316, fit: "contain", radius: 16, alt: "Estado de ánimo en frontend web" });
  await addImage(s, "assets/images/cap5/web/frontend-web-report-form.png", { left: 664, top: 226, width: 560, height: 316, fit: "contain", radius: 16, alt: "Formulario de reporte" });
  addPill(s, "Estado de ánimo", 56, 572, 150, C.blueSoft, C.dark);
  addPill(s, "Reporte confidencial", 664, 572, 168, C.coralSoft, C.coral);
  addText(s, "React · Vite · TypeScript · Vercel", { left: 56, top: 624, width: 520, height: 22, size: 14, color: C.muted, bold: true });
  addText(s, "La vista de reportes permite conservar el carácter anónimo cuando el usuario lo elige.", { left: 664, top: 624, width: 520, height: 22, size: 14, color: C.muted });
  addFooter(s);
}

// 7. HR and admin
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "06 · Gestión", "RR. HH. y administración trabajan con evidencia", 7);
  addText(s, "Las vistas de gestión concentran encuestas, actividades, reportes, cuentas y planes en función del rol.", { left: 56, top: 150, width: 1000, height: 34, size: 19, color: C.dark });
  await addImage(s, "assets/images/cap5/web/frontend-hr-management-surveys.png", { left: 56, top: 226, width: 372, height: 268, fit: "contain", radius: 14, alt: "Gestión de encuestas de RR. HH." });
  await addImage(s, "assets/images/cap5/admin/admin-summary.png", { left: 454, top: 226, width: 372, height: 268, fit: "contain", radius: 14, alt: "Resumen administrativo" });
  await addImage(s, "assets/images/cap5/admin/admin-reports.png", { left: 852, top: 226, width: 372, height: 268, fit: "contain", radius: 14, alt: "Reportes administrativos" });
  addText(s, "Encuestas y comentarios", { left: 56, top: 520, width: 372, height: 26, size: 17, color: C.ink, bold: true, align: "center" });
  addText(s, "Resumen de cuentas y actividad", { left: 454, top: 520, width: 372, height: 26, size: 17, color: C.ink, bold: true, align: "center" });
  addText(s, "Seguimiento de situaciones", { left: 852, top: 520, width: 372, height: 26, size: 17, color: C.ink, bold: true, align: "center" });
  addText(s, "Spring Boot · roles EMPLOYEE, HR_MEMBER y SYSTEM_ADMIN", { left: 56, top: 600, width: 1100, height: 26, size: 15, color: C.muted, bold: true });
  addFooter(s);
}

// 8. Architecture
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "07 · Arquitectura", "Una API compartida con persistencia en Firestore", 8);
  addText(s, "Web y Android consumen una API REST en Spring Boot. La API centraliza reglas, permisos y conexión con Firestore.", { left: 56, top: 150, width: 560, height: 70, size: 20, color: C.dark, bold: true });
  addPill(s, "Java 21", 56, 268, 100, C.coralSoft, C.coral); addPill(s, "Spring Boot 3.5.5", 168, 268, 164, C.sageSoft, C.dark); addPill(s, "Firestore", 344, 268, 106, C.blueSoft, C.dark);
  addText(s, "La arquitectura mantiene separados los contextos de autenticación, perfil, mood, encuestas, comentarios, actividades, reportes, IA, pagos y administración.", { left: 56, top: 336, width: 520, height: 118, size: 17, color: C.muted });
  addText(s, "Persistencia actual", { left: 56, top: 510, width: 260, height: 26, size: 17, color: C.ink, bold: true });
  addText(s, "Firebase Firestore\nAPI REST + Bearer JWT\nGemini opcional para Chat AI", { left: 56, top: 548, width: 320, height: 82, size: 17, color: C.dark });
  await addImage(s, "assets/images/cap4/arquitectura-final/c4/contexto.png", { left: 622, top: 176, width: 602, height: 444, fit: "contain", radius: 14, alt: "Diagrama de contexto de SafeSpace" });
  addFooter(s);
}

// 9. Implementation and deployment
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "08 · Implementación", "Un producto distribuido por capas", 9);
  const layers = [
    ["Landing", "Vercel", "Presenta la propuesta y el valor de SafeSpace.", C.coralSoft],
    ["Frontend web", "Vercel", "Participación, reportes y preferencias.", C.blueSoft],
    ["Admin", "Vercel", "Cuentas, encuestas, actividades y pagos.", C.sageSoft],
    ["Android", "APK/AAB", "Experiencia móvil del empleado.", C.coralSoft],
    ["Backend", "Render", "Reglas de negocio y API REST.", C.blueSoft],
  ];
  for (let i = 0; i < layers.length; i += 1) {
    const y = 182 + i * 76;
    addRect(s, { left: 56, top: y, width: 510, height: 58, fill: layers[i][3], lineFill: "none", radius: 14 });
    addText(s, layers[i][0], { left: 78, top: y + 10, width: 145, height: 22, size: 18, color: C.ink, bold: true });
    addText(s, layers[i][1], { left: 236, top: y + 11, width: 100, height: 20, size: 14, color: C.muted, bold: true });
    addText(s, layers[i][2], { left: 340, top: y + 10, width: 200, height: 36, size: 13, color: C.ink });
  }
  await addImage(s, "assets/images/cap5/admin/admin-payments.png", { left: 640, top: 190, width: 550, height: 312, fit: "contain", radius: 16, alt: "Gestión de pagos y planes" });
  addText(s, "La distribución móvil se documenta con el APK/AAB compartido y el repositorio Android.", { left: 640, top: 548, width: 540, height: 48, size: 17, color: C.dark, bold: true });
  addFooter(s);
}

// 10. Evidence
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "09 · Evidencia", "El avance se puede revisar en artefactos reales", 10);
  addText(s, "La evidencia combina interfaces ejecutables, repositorios, despliegues y colaboración del equipo.", { left: 56, top: 150, width: 900, height: 34, size: 19, color: C.dark });
  await addImage(s, "assets/images/shared/evidence-av1.png", { left: 56, top: 226, width: 560, height: 316, fit: "contain", radius: 16, alt: "GitHub Insights del equipo" });
  await addImage(s, "assets/images/cap5/database/firestore-console.jpeg", { left: 664, top: 226, width: 560, height: 316, fit: "contain", radius: 16, alt: "Consola de Firebase Firestore" });
  addPill(s, "Colaboración en GitHub", 56, 574, 184, C.sageSoft, C.dark);
  addPill(s, "Persistencia verificada", 664, 574, 166, C.blueSoft, C.dark);
  addText(s, "La documentación mantiene la trazabilidad entre historias, versiones y evidencias visuales.", { left: 56, top: 626, width: 1120, height: 22, size: 15, color: C.muted });
  addFooter(s);
}

// 11. Closing
{
  const s = presentation.slides.add(); s.background.fill = C.dark;
  addText(s, "CIERRE DEL AVANCE", { left: 64, top: 62, width: 560, height: 24, size: 13, color: C.coral, bold: true });
  addText(s, "SafeSpace convierte una necesidad sensible en una experiencia concreta.", { left: 64, top: 122, width: 760, height: 112, size: 39, color: C.white, bold: true });
  addRule(s, 64, 270, 90, C.coral, 5);
  addText(s, "El producto integra bienestar diario, participación, reportes y acompañamiento con una arquitectura web, móvil y backend coherente.", { left: 64, top: 310, width: 650, height: 84, size: 21, color: "#DCE9E3" });
  addRect(s, { left: 64, top: 470, width: 520, height: 104, fill: C.dark2, lineFill: "none", radius: 18 });
  addText(s, "Siguiente foco", { left: 92, top: 494, width: 180, height: 24, size: 15, color: C.coral, bold: true });
  addText(s, "Consolidar el video About the Product y continuar la validación con usuarios.", { left: 92, top: 530, width: 440, height: 30, size: 17, color: C.white, bold: true });
  await addImage(s, "assets/images/cap5/mobile/mobile-ai-chat.png", { left: 900, top: 104, width: 210, height: 456, fit: "cover", radius: 24, alt: "Chat AI de SafeSpace" });
  addText(s, "SafeSpace", { left: 920, top: 600, width: 170, height: 30, size: 21, color: C.white, bold: true, align: "center" });
  addText(s, "Avance 1 · 2026-20", { left: 64, top: 682, width: 300, height: 18, size: 10, color: "#A9C2B8" });
}

// 12. Backlog divider
{
  const s = presentation.slides.add(); s.background.fill = C.coral;
  addText(s, "10 · PRODUCT BACKLOG", { left: 72, top: 84, width: 520, height: 28, size: 14, color: C.white, bold: true });
  addText(s, "22 historias\n7 épicas", { left: 72, top: 180, width: 520, height: 150, size: 58, color: C.white, bold: true });
  addText(s, "El backlog queda al final para cerrar la presentación con el alcance funcional del producto.", { left: 72, top: 414, width: 540, height: 54, size: 20, color: C.white });
  addRect(s, { left: 770, top: 122, width: 360, height: 360, fill: C.dark, lineFill: "none", radius: 180 });
  addText(s, "US01\nUS02\nUS04\n…\nUS22", { left: 855, top: 180, width: 190, height: 250, size: 36, color: C.white, bold: true, align: "center" });
  addText(s, "SafeSpace · Avance 1", { left: 72, top: 682, width: 300, height: 18, size: 10, color: C.white });
}

// 13. Epic overview
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "10 · Product Backlog", "Épicas y cobertura funcional", 13);
  addText(s, "El backlog organiza la solución desde el acceso hasta el acompañamiento con IA.", { left: 56, top: 150, width: 980, height: 34, size: 19, color: C.dark });
  const rows = [
    ["Épica", "Objetivo", "Historias"],
    ["EP01 · Acceso e identidad", "Registro, autenticación, perfil y administración de usuarios", "US01, US02, US04, US05"],
    ["EP02 · Bienestar", "Registro diario y resumen administrativo del estado de ánimo", "US06, US07"],
    ["EP03 · Encuestas", "Encuestas, respuestas, comentarios y reacciones", "US08–US13"],
    ["EP04 · Actividades", "Votaciones semanales y gestión de actividades", "US14–US16"],
    ["EP05 · Reportes", "Reportes identificados o anónimos y seguimiento", "US17–US19"],
    ["EP06 · Pagos", "Planes y comprobantes de pago", "US20"],
    ["EP07 · IA", "Conversaciones privadas y mensajes de orientación", "US21, US22"],
  ];
  addTable(s, rows, { left: 56, top: 226, width: 1168, height: 390, columnWidths: [260, 610, 298], fontSize: 16 });
  addFooter(s, "SafeSpace · Product Backlog");
}

// 14. User stories EP01-EP03
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "10 · Product Backlog", "Historias de usuario · EP01–EP03", 14);
  const rows = [
    ["ID", "Historia de usuario", "Épica"],
    ["US01", "Registro de empleados", "EP01"],
    ["US02", "Inicio de sesión con credenciales", "EP01"],
    ["US04", "Actualización de perfil y preferencias", "EP01"],
    ["US05", "Administración de usuarios", "EP01"],
    ["US06", "Registro diario de estado de ánimo", "EP02"],
    ["US07", "Resumen administrativo de estado de ánimo", "EP02"],
    ["US08", "Consulta de encuestas publicadas", "EP03"],
    ["US09", "Respuesta única a una encuesta", "EP03"],
    ["US10", "Gestión operativa de encuestas", "EP03"],
    ["US11", "Administración avanzada de encuestas", "EP03"],
    ["US12", "Comentarios anidados en encuestas", "EP03"],
    ["US13", "Like de comentarios", "EP03"],
  ];
  addTable(s, rows, { left: 56, top: 158, width: 1168, height: 500, columnWidths: [110, 820, 238], fontSize: 17 });
  addFooter(s, "SafeSpace · Product Backlog");
}

// 15. User stories EP04-EP07
{
  const s = presentation.slides.add(); s.background.fill = C.cream; addHeader(s, "10 · Product Backlog", "Historias de usuario · EP04–EP07", 15);
  const rows = [
    ["ID", "Historia de usuario", "Épica"],
    ["US14", "Consulta de actividades abiertas", "EP04"],
    ["US15", "Votación y cambio de voto", "EP04"],
    ["US16", "Gestión de actividades semanales", "EP04"],
    ["US17", "Creación de reportes anónimos o identificados", "EP05"],
    ["US18", "Consulta de reportes propios", "EP05"],
    ["US19", "Revisión y actualización de reportes", "EP05"],
    ["US20", "Registro de planes y comprobantes de pago", "EP06"],
    ["US21", "Conversaciones con la IA", "EP07"],
    ["US22", "Envío de mensajes al asistente", "EP07"],
  ];
  addTable(s, rows, { left: 56, top: 180, width: 1168, height: 380, columnWidths: [110, 820, 238], fontSize: 18 });
  addText(s, "Las historias técnicas se gestionan fuera de este resumen funcional y se mantienen en el Capítulo III.", { left: 56, top: 602, width: 1120, height: 28, size: 14, color: C.muted });
  addFooter(s, "SafeSpace · Product Backlog");
}

const draft = await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
for (let i = 0; i < presentation.slides.items.length; i += 1) {
  const preview = await presentation.slides.items[i].export({ format: "png", scale: 1.2 });
  await fs.writeFile(path.join(previewDir, `slide-${String(i + 1).padStart(2, "0")}.png`), new Uint8Array(await preview.arrayBuffer()));
}
const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(previewDir, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));
const snapshot = await presentation.inspect({ kind: "slide,textbox,image,table", maxChars: 60000 });
await fs.writeFile(path.join(previewDir, "inspect.ndjson"), snapshot.ndjson ?? String(snapshot));
console.log(JSON.stringify({ candidatePath, slides: presentation.slides.items.length, fontFamily }, null, 2));
