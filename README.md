# Note

this is a minimal reproduction for [nuxt/devtools issue](https://github.com/nuxt/devtools/issues/61)

Reproduction steps:
- clone repo
- pnpm install
- pnpm run start

## Error
```
 ERROR  Cannot start nuxt: performance is not defined

  at node_modules/.pnpm/@nuxt+devtools@0.1.2_nuxt@3.2.0+vite@3.1.4/node_modules/@nuxt/devtools/dist/chunks/module-main.mjs:5196:16
  at callEachWith (node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs:46:5)
  at Hookable.callHookWith (node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs:156:7)
  at Hookable.callHook (node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs:148:17)
  at enableModule (node_modules/.pnpm/@nuxt+devtools@0.1.2_nuxt@3.2.0+vite@3.1.4/node_modules/@nuxt/devtools/dist/chunks/module-main.mjs:8415:14)
  at async normalizedModule (node_modules/.pnpm/@nuxt+kit@3.2.0/node_modules/@nuxt/kit/dist/index.mjs:167:5)
  at async installModule (node_modules/.pnpm/@nuxt+kit@3.2.0/node_modules/@nuxt/kit/dist/index.mjs:435:15)
  at async initNuxt (node_modules/.pnpm/nuxt@3.2.0_eslint@8.24.0+typescript@4.8.4/node_modules/nuxt/dist/index.mjs:2162:7)
  at async load (node_modules/.pnpm/nuxi@3.2.0/node_modules/nuxi/dist/chunks/dev.mjs:6798:9)
  at async Object.invoke (node_modules/.pnpm/nuxi@3.2.0/node_modules/nuxi/dist/chunks/dev.mjs:6859:5)
```

# Nuxt 3 Minimal Starter custom for yue

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

> unocss + nuxt3

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm i
```

## Development Server

Start the development server on http://localhost:8989

```bash
pnpm run dev
# or
pnpm run start
```
