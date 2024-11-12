import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CYIVHeH9.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import "@iconify/vue/offline";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"","lang":"zh-CN","frontmatter":{"config":[{"type":"banner","banner":"/img/154.jpg","bannerMask":{"dark":0.5,"light":0.3},"hero":{"name":"WentUrc Docs","tagline":"为什么昨晚的清醒与今日的倦意遥相呼应","text":"话说这个 text 必须要写吗","actions":[{"text":"快速开始","link":"/learn/","theme":"brand"},{"text":"Github","link":"https://github.com/Unerge/vuepress-starter","theme":"alt"},{"text":"WentUrc","link":"https://wenturc.com","theme":"alt"}]}}],"pageLayout":"home","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-03T15:16:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-03T15:16:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-03T15:16:15.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.24,"words":71},"git":{"createdTime":1727101230000,"updatedTime":1730646975000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":6},{"name":"Larch2352","email":"114554982+Larch4@users.noreply.github.com","commits":5},{"name":"Chucklee","email":"59095086+Cedar2352@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"74816859+IGCrystal@users.noreply.github.com","commits":1}]},"filePathRelative":"README.md","categoryList":[],"bulletin":false}');
export {
  index_html as comp,
  data
};
