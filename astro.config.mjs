// astro.config.mjs
import { defineConfig } from 'astro/config';
import iconPlugin from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [iconPlugin()],
  vite: {
    build: {
      rollupOptions: {
        external: ['virtual:astro-icon']
      }
    }
  }
});
