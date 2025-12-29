import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tutorials-page container fade-in-up" }, _attrs))} data-v-e426165c><div class="header" data-v-e426165c><h1 data-v-e426165c>摄影教程</h1><div class="categories" data-v-e426165c><span class="active" data-v-e426165c>全部</span><span data-v-e426165c>基础入门</span><span data-v-e426165c>后期修图</span><span data-v-e426165c>器材使用</span><span data-v-e426165c>商业接单</span></div></div><div class="tutorial-list" data-v-e426165c><!--[-->`);
  ssrRenderList(8, (i) => {
    _push(`<div class="tutorial-card" data-v-e426165c><div class="thumbnail" data-v-e426165c><img${ssrRenderAttr("src", `https://picsum.photos/seed/tutorial${i}/400/300`)} class="thumb-img" alt="教程封面" data-v-e426165c><span class="badge" data-v-e426165c>免费</span><div class="play-icon" data-v-e426165c>▶</div></div><div class="info" data-v-e426165c><h3 data-v-e426165c>零基础学摄影：光圈与快门 ${ssrInterpolate(i)}</h3><p class="desc" data-v-e426165c>本课程详细讲解相机基础参数设置，帮助新手快速入门...</p><div class="meta" data-v-e426165c><span class="author" data-v-e426165c>讲师：老张</span><span class="count" data-v-e426165c>1200 人学习</span></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tutorials/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e426165c"]]);
export {
  index as default
};
//# sourceMappingURL=index-D5S4eHvV.js.map
