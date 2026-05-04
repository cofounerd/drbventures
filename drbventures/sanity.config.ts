import { defineConfig } from 'sanity';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'choosing-joy-studio',
  title: 'Choosing Joy Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  schema: {
    types: schemaTypes
  }
});
