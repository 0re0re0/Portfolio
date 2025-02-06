import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfoliojaviercp.netlify.app',
  base: '/',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});