import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vuepress自定义主题配置" tabindex="-1"><a class="header-anchor" href="#vuepress自定义主题配置"><span>Vuepress自定义主题配置</span></a></h1><p>在 VuePress 中，自定义主题配置可以帮助你打造一个更符合你需求和风格的文档站。以下是一些常见的自定义主题配置建议，供你参考：</p><h3 id="_1-导航栏-navbar" tabindex="-1"><a class="header-anchor" href="#_1-导航栏-navbar"><span>1. <strong>导航栏（Navbar）</strong></span></a></h3><p>你可以自定义导航栏，以便用户可以轻松访问重要的文档部分或外部链接。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  navbar</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      text</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Home</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      link</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      text</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Guide</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      link</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/guide/</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      text</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">GitHub</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      link</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">https://github.com/your-repo</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">  ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-侧边栏-sidebar" tabindex="-1"><a class="header-anchor" href="#_2-侧边栏-sidebar"><span>2. <strong>侧边栏（Sidebar）</strong></span></a></h3><p>侧边栏通常用于展示文档的目录结构，帮助用户更好地导航。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  sidebar</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">    &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/guide/</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">      {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">        text</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Guide</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">        children</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">          &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/guide/README.md</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">          &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/guide/getting-started.md</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">          &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/guide/configuration.md</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">      },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-网站-logo" tabindex="-1"><a class="header-anchor" href="#_3-网站-logo"><span>3. <strong>网站 Logo</strong></span></a></h3><p>你可以为文档站添加一个 Logo，让它看起来更加专业。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  logo</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/images/logo.png</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将你的 Logo 图片放在 <code>docs/.vuepress/public/images/</code> 目录下，并使用相对路径引用它。</p><h3 id="_4-主页设置-home-page" tabindex="-1"><a class="header-anchor" href="#_4-主页设置-home-page"><span>4. <strong>主页设置（Home Page）</strong></span></a></h3><p>自定义主页的布局，可以让主页更具吸引力。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  home</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#1E754F", "--shiki-dark": "#4D9375" })}"> true</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  heroImage</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/images/hero.png</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  heroText</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Welcome to My Docs</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  tagline</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">The best place to find everything</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  actionText</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Get Started</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  actionLink</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">/guide/</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  features</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      title</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Feature 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      details</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Describe your feature here.</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      title</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Feature 2</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">      details</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">Describe your feature here.</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">  ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-脚注-footer" tabindex="-1"><a class="header-anchor" href="#_5-脚注-footer"><span>5. <strong>脚注（Footer）</strong></span></a></h3><p>你可以添加一个自定义的页脚，用于展示版权信息或其他链接。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  footer</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">© 2024 My Documentation Site | Powered by VuePress</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-代码高亮" tabindex="-1"><a class="header-anchor" href="#_6-代码高亮"><span>6. <strong>代码高亮</strong></span></a></h3><p>可以通过配置代码高亮样式，让代码示例在文档中更容易阅读。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  prismjs</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">    theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">prism-tomorrow</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">    plugins</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">line-numbers</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-搜索功能" tabindex="-1"><a class="header-anchor" href="#_7-搜索功能"><span>7. <strong>搜索功能</strong></span></a></h3><p>如果你的文档内容较多，可以启用搜索功能，帮助用户快速找到他们需要的内容。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  search</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#1E754F", "--shiki-dark": "#4D9375" })}"> true</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  searchMaxSuggestions</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#2F798A", "--shiki-dark": "#4C9A91" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-自定义颜色" tabindex="-1"><a class="header-anchor" href="#_8-自定义颜色"><span>8. <strong>自定义颜色</strong></span></a></h3><p>你可以更改主题颜色，使它与你的品牌或设计风格相匹配。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}">theme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#59873A", "--shiki-dark": "#80A665" })}"> defaultTheme</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  colorMode</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">light</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#A0ADA0", "--shiki-dark": "#758575DD" })}"> // &#39;light&#39; | &#39;dark&#39; | &#39;auto&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}">  colorModeSwitch</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#1E754F", "--shiki-dark": "#4D9375" })}"> true</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>这些配置可以帮助你定制 VuePress 文档站的外观和功能，使其更符合你的需求和用户体验。如果你有特定的需求或希望深入定制，可以进一步探索 VuePress 的 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官方文档</a> 或告诉我，我可以提供更具体的建议。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/tech/8.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _8_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "8.html.vue"]]);
const data = JSON.parse('{"path":"/tech/8.html","title":"Vuepress自定义主题配置","lang":"zh-CN","frontmatter":{"tags":["技术文档"],"prev":{"link":"./7.md","text":"虚拟机嵌套虚拟化"},"next":{"link":"./9.md","text":"在VuePress中添加评论功能"},"title":"Vuepress自定义主题配置","description":"Vuepress自定义主题配置 在 VuePress 中，自定义主题配置可以帮助你打造一个更符合你需求和风格的文档站。以下是一些常见的自定义主题配置建议，供你参考： 1. 导航栏（Navbar） 你可以自定义导航栏，以便用户可以轻松访问重要的文档部分或外部链接。 2. 侧边栏（Sidebar） 侧边栏通常用于展示文档的目录结构，帮助用户更好地导航。 3...","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/tech/8.html"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"Vuepress自定义主题配置"}],["meta",{"property":"og:description","content":"Vuepress自定义主题配置 在 VuePress 中，自定义主题配置可以帮助你打造一个更符合你需求和风格的文档站。以下是一些常见的自定义主题配置建议，供你参考： 1. 导航栏（Navbar） 你可以自定义导航栏，以便用户可以轻松访问重要的文档部分或外部链接。 2. 侧边栏（Sidebar） 侧边栏通常用于展示文档的目录结构，帮助用户更好地导航。 3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:tag","content":"技术文档"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vuepress自定义主题配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"1. 导航栏（Navbar）","slug":"_1-导航栏-navbar","link":"#_1-导航栏-navbar","children":[]},{"level":3,"title":"2. 侧边栏（Sidebar）","slug":"_2-侧边栏-sidebar","link":"#_2-侧边栏-sidebar","children":[]},{"level":3,"title":"3. 网站 Logo","slug":"_3-网站-logo","link":"#_3-网站-logo","children":[]},{"level":3,"title":"4. 主页设置（Home Page）","slug":"_4-主页设置-home-page","link":"#_4-主页设置-home-page","children":[]},{"level":3,"title":"5. 脚注（Footer）","slug":"_5-脚注-footer","link":"#_5-脚注-footer","children":[]},{"level":3,"title":"6. 代码高亮","slug":"_6-代码高亮","link":"#_6-代码高亮","children":[]},{"level":3,"title":"7. 搜索功能","slug":"_7-搜索功能","link":"#_7-搜索功能","children":[]},{"level":3,"title":"8. 自定义颜色","slug":"_8-自定义颜色","link":"#_8-自定义颜色","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"readingTime":{"minutes":1.88,"words":565},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"tech/8.md","categoryList":[{"id":"d9f913","sort":10003,"name":"tech"}],"bulletin":false}');
export {
  _8_html as comp,
  data
};
