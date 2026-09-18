import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const sourcePath = "C:\\Users\\José Gustavo\\Downloads\\Pedir apoyo prioridad crítica. Ánimo diario prioridad alta.pptx";
const outDir = "C:\\Users\\José Gustavo\\OneDrive\\Escritorio\\experimentos\\experimentos-202620\\.pptx-build\\source";
await fs.mkdir(outDir, { recursive: true });

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const snapshot = await presentation.inspect({
  kind: "deck,slide,textbox,shape,image,table,chart,notes,layout",
  maxChars: 50000,
});
await fs.writeFile(path.join(outDir, "inspect.ndjson"), snapshot.ndjson ?? String(snapshot));

const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(outDir, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));

for (let i = 0; i < presentation.slides.items.length; i += 1) {
  const slide = presentation.slides.items[i];
  const preview = await slide.export({ format: "png", scale: 1.5 });
  await fs.writeFile(path.join(outDir, `slide-${i + 1}.png`), new Uint8Array(await preview.arrayBuffer()));
}

console.log(JSON.stringify({ slides: presentation.slides.items.length, outDir }, null, 2));
