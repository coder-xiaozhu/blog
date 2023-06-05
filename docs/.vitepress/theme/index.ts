// https://vitepress.dev/guide/custom-theme
import { h ,nextTick, onMounted, watch} from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import mediumZoom from 'medium-zoom'
import {  useRoute } from 'vitepress'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}
