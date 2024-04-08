import { defineConfig, presetIcons } from 'unocss'

const sleep = (time: number) => new Promise(res => setTimeout(res, time))

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}']
  },
  presets: [presetIcons()],
  rules: [
    ['foo', { 'width': '1px' }],
    [/bar/, async () => {
      await sleep(1000)
      return { 'height': '1px' }
    }]
  ]
})
