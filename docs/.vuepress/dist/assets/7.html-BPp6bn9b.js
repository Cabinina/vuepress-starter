import{_ as i,c as s,a as t,o as a}from"./app-BZYgsPpu.js";const l={};function n(r,e){return a(),s("div",null,e[0]||(e[0]=[t('<h1 id="嵌套虚拟化" tabindex="-1"><a class="header-anchor" href="#嵌套虚拟化"><span>嵌套虚拟化</span></a></h1><p>在Hyper-V中运行的Windows 10虚拟机内再安装和运行Hyper-V（即嵌套虚拟化）是可以实现的，但需要满足一些特定条件和配置。以下是实现该功能的步骤：</p><h3 id="_1-使能嵌套虚拟化" tabindex="-1"><a class="header-anchor" href="#_1-使能嵌套虚拟化"><span>1. 使能嵌套虚拟化</span></a></h3><p>嵌套虚拟化功能是Hyper-V在Windows Server 2016和Windows 10周年更新（版本1607）中引入的功能。首先，需要确保Hyper-V宿主机上的处理器支持虚拟化扩展（如Intel VT-x或AMD-V），并且已经在BIOS或UEFI中启用。</p><h3 id="_2-配置虚拟机" tabindex="-1"><a class="header-anchor" href="#_2-配置虚拟机"><span>2. 配置虚拟机</span></a></h3><h4 id="在宿主机上运行powershell命令" tabindex="-1"><a class="header-anchor" href="#在宿主机上运行powershell命令"><span>在宿主机上运行PowerShell命令：</span></a></h4><ol><li><p>打开PowerShell并执行以下命令以启用嵌套虚拟化：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Set-VMProcessor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">VMName </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">VMName</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ExposeVirtualizationExtensions </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将<code>&lt;VMName&gt;</code>替换为你虚拟机的名称。</p></li><li><p>确保虚拟机的CPU兼容性设置已关闭：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Set-VMProcessor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">VMName </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">VMName</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">CompatibilityForMigrationEnabled </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h3 id="_3-启用嵌套虚拟化的其他设置" tabindex="-1"><a class="header-anchor" href="#_3-启用嵌套虚拟化的其他设置"><span>3. 启用嵌套虚拟化的其他设置</span></a></h3><p>确保虚拟机的动态内存已关闭，因为动态内存与嵌套虚拟化不兼容。</p><h3 id="_4-在虚拟机中安装hyper-v" tabindex="-1"><a class="header-anchor" href="#_4-在虚拟机中安装hyper-v"><span>4. 在虚拟机中安装Hyper-V</span></a></h3><ol><li>启动虚拟机并登录Windows 10。</li><li>打开“控制面板”或“设置”，导航到“程序和功能”，选择“启用或关闭Windows功能”。</li><li>勾选“Hyper-V”并点击“确定”，然后按照提示安装并重启虚拟机。</li></ol><h3 id="_5-验证安装" tabindex="-1"><a class="header-anchor" href="#_5-验证安装"><span>5. 验证安装</span></a></h3><p>重启后，打开Hyper-V管理器，确认可以正常创建和管理虚拟机。</p><p>通过以上步骤，你应该能够在Hyper-V中的Windows 10虚拟机内再运行Hyper-V。这种配置特别适用于开发和测试需要在多层虚拟化环境下运行的应用程序或服务。</p>',14)]))}const h=i(l,[["render",n],["__file","7.html.vue"]]),o=JSON.parse('{"path":"/tech/7.html","title":"虚拟机嵌套虚拟化","lang":"zh-CN","frontmatter":{"tags":["技术文档"],"prev":{"link":"./6.md","text":"仿制哔哩哔哩站点样式"},"next":{"link":"./8.md","text":"Vuepress自定义主题配置"},"title":"虚拟机嵌套虚拟化","description":"嵌套虚拟化 在Hyper-V中运行的Windows 10虚拟机内再安装和运行Hyper-V（即嵌套虚拟化）是可以实现的，但需要满足一些特定条件和配置。以下是实现该功能的步骤： 1. 使能嵌套虚拟化 嵌套虚拟化功能是Hyper-V在Windows Server 2016和Windows 10周年更新（版本1607）中引入的功能。首先，需要确保Hyper-...","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/tech/7.html"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"虚拟机嵌套虚拟化"}],["meta",{"property":"og:description","content":"嵌套虚拟化 在Hyper-V中运行的Windows 10虚拟机内再安装和运行Hyper-V（即嵌套虚拟化）是可以实现的，但需要满足一些特定条件和配置。以下是实现该功能的步骤： 1. 使能嵌套虚拟化 嵌套虚拟化功能是Hyper-V在Windows Server 2016和Windows 10周年更新（版本1607）中引入的功能。首先，需要确保Hyper-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:tag","content":"技术文档"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟机嵌套虚拟化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"1. 使能嵌套虚拟化","slug":"_1-使能嵌套虚拟化","link":"#_1-使能嵌套虚拟化","children":[]},{"level":3,"title":"2. 配置虚拟机","slug":"_2-配置虚拟机","link":"#_2-配置虚拟机","children":[]},{"level":3,"title":"3. 启用嵌套虚拟化的其他设置","slug":"_3-启用嵌套虚拟化的其他设置","link":"#_3-启用嵌套虚拟化的其他设置","children":[]},{"level":3,"title":"4. 在虚拟机中安装Hyper-V","slug":"_4-在虚拟机中安装hyper-v","link":"#_4-在虚拟机中安装hyper-v","children":[]},{"level":3,"title":"5. 验证安装","slug":"_5-验证安装","link":"#_5-验证安装","children":[]}],"readingTime":{"minutes":1.55,"words":464},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"tech/7.md","categoryList":[{"id":"d9f913","sort":10000,"name":"tech"}],"bulletin":false}');export{h as comp,o as data};
