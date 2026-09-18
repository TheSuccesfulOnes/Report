import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const workspaceDir = "C:\\Users\\José Gustavo\\OneDrive\\Escritorio\\experimentos\\experimentos-202620";
const skillDir = "C:\\Users\\José Gustavo\\.codex\\plugins\\cache\\openai-primary-runtime\\presentations\\26.905.11957\\skills\\presentations";
const pythonExecutable = "C:\\Users\\José Gustavo\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe";
const candidatePath = path.join(workspaceDir, ".pptx-build", "safespace-av1-rehecho-candidate.pptx");
const finalPath = path.join(workspaceDir, "presentation-output", "SafeSpace-AV1-rehecho.pptx");
const stagingDir = path.join(workspaceDir, ".pptx-finalizer");

await fs.mkdir(stagingDir, { recursive: true });
await fs.mkdir(path.dirname(finalPath), { recursive: true });

const { finalizePresentation } = await import(
  pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href,
);

const requirements = {
  explicitTotalSlideCount: 15,
  requiredNativeTableOwnerSlides: [13, 14, 15],
};

const result = await finalizePresentation({
  ...requirements,
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable,
  integrityValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs: [
    "--expected-slide-size-emu", "12192000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
    ...requirements.requiredNativeTableOwnerSlides.flatMap((number) => ["--require-native-table-slide", String(number)]),
  ],
  fontPolicy: { basis: "design", families: ["Arial"] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(stagingDir, "SafeSpace-AV1-rehecho.validation.json"),
});

console.log(JSON.stringify(result, null, 2));
