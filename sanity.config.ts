import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "mamoru-yamada",
  title: "Mamoru Yamada Website",
  projectId: "abwpxqk7",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [],
  },
});
