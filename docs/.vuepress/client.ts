import { defineClientConfig } from 'vuepress/client'
import Swiper from './theme/lib/client/features/components/Swiper.vue'
import './styles/custom.css'
import VPImageToAscii from './components/VPImageToAscii.vue'
import VPGame1 from './components/VPGame1.vue'
import VPGame2 from './components/VPGame2.vue'
import VPBackToTop1 from './components/VPBackToTop1.vue'
import VPEmbedHTML from './components/VPEmbed/VPEmbedHTML.vue'
import VPEmbedHTML1 from './components/VPEmbed/VPEmbedHTML1.vue'
import VPEmbedHTML2 from './components/VPEmbed/VPEmbedHTML2.vue'
import VPMeowWaa from './components/VPEmbed/VPMeowWaa.vue'
import VPMeowWbb from './components/VPEmbed/VPMeowWbb.vue'


export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
    app.component('VPImageToAscii', VPImageToAscii)
    app.component('VPGame1', VPGame1)
    app.component('VPGame2',VPGame2)
    app.component('VPEmbedHTML',VPEmbedHTML)
    app.component('VPEmbedHTML1',VPEmbedHTML1)
    app.component('VPBackToTop',VPBackToTop1)
    app.component('VPEmbedHTML2',VPEmbedHTML2)
    app.component('VPMeowWaa', VPMeowWaa)
    app.component('VPMeowWbb', VPMeowWbb)
  },
})