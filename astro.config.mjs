import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tyler-irving.github.io',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
