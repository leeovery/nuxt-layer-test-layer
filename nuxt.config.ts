import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: [
    {
      path: resolve('./components'),
      pathPrefix: false,
    },
  ],

  // Commenting this out and changing the import inside the Button component to
  // use a relative path over using the alias will make the error go away.
  // So it seems using an alias is causing the issue.
  alias: {
    '@base': resolve('./'),
  },
})
