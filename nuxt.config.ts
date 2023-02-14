// nuxt.config.js
export default {
  modules: [
    '@unocss/nuxt',
    '@nuxt/devtools',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [['bg-mask', { background: 'rgba(0,0,0,0.6);' }]],
  },
};
