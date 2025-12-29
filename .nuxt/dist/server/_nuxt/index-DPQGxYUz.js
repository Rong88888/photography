import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "business-page container fade-in-up" }, _attrs))} data-v-19166b26><div class="hero" data-v-19166b26><h1 data-v-19166b26>商业合作对接</h1><p data-v-19166b26>连接优质摄影师与商业需求，保障交易安全</p><div class="actions" data-v-19166b26><button class="btn-primary" data-v-19166b26>发布需求</button><button class="btn-outline" data-v-19166b26>我是摄影师，我要接单</button></div></div><div class="demand-list" data-v-19166b26><h2 data-v-19166b26>最新需求</h2><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="demand-item" data-v-19166b26><div class="info" data-v-19166b26><h3 data-v-19166b26>婚礼跟拍需求 - 上海 ${ssrInterpolate(i)} <span class="tag" data-v-19166b26>急</span></h3><p class="budget" data-v-19166b26>预算：<span class="price" data-v-19166b26>¥3000-5000</span></p><p class="detail" data-v-19166b26>需要一位有经验的婚礼摄影师，全天跟拍，要求自带设备，有婚礼跟拍经验者优先...</p><div class="meta" data-v-19166b26><span data-v-19166b26>📍 上海市</span><span data-v-19166b26>📅 2025-05-01</span></div></div><div class="action" data-v-19166b26><button data-v-19166b26>立即接单</button></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/business/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-19166b26"]]);
export {
  index as default
};
//# sourceMappingURL=index-DPQGxYUz.js.map
