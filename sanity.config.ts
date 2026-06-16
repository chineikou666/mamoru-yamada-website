import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import building from "./sanity.schemaTypes/building";
import researchLog from "./sanity.schemaTypes/researchLog";
import staff from "./sanity.schemaTypes/staff";
import project from "./sanity.schemaTypes/project";

export default defineConfig({
  name: "mamoru-yamada",
  title: "Mamoru Yamada Website",
  projectId: "hdz4dsff",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [building, researchLog, staff, project],
  },
});
