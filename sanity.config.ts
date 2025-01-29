import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';


const config = defineConfig({
    projectId: "p8uemwn7",
    dataset: "production",
    title: "Job Vortex",
    apiVersion: "2025-01-29",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }
})

export default config;