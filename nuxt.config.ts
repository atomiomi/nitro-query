import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    nitro: true,
    vite: false,
  },

  nitro: {
    preset: process.env.NITRO_PRESET,
  }
})
