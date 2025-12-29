import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/hookable/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/unctx/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/radix3/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/defu/dist/defu.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/ufo/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/klona/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-dfa3e464><section class="banner fade-in-up" data-v-dfa3e464><div class="container" data-v-dfa3e464><h1 data-v-dfa3e464>发现摄影之美</h1><p data-v-dfa3e464>全场景摄影分享与垂直交流生态平台</p><div class="banner-actions" data-v-dfa3e464><button class="btn-explore" data-v-dfa3e464>开始探索</button></div></div><div class="banner-bg" data-v-dfa3e464></div></section><section class="recommend-works container" data-v-dfa3e464><h2 class="section-title fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-dfa3e464>推荐作品</h2><div class="works-grid" data-v-dfa3e464><!--[-->`);
  ssrRenderList(8, (i) => {
    _push(`<div class="work-card fade-in-up" style="${ssrRenderStyle({ animationDelay: `${0.1 * i + 0.2}s` })}" data-v-dfa3e464><div class="img-wrapper" data-v-dfa3e464><img${ssrRenderAttr("src", `https://picsum.photos/seed/${i}/600/400`)} class="work-image" alt="作品封面" data-v-dfa3e464><div class="overlay" data-v-dfa3e464><button data-v-dfa3e464>查看详情</button></div></div><div class="work-info" data-v-dfa3e464><h3 data-v-dfa3e464>作品标题 ${ssrInterpolate(i)}</h3><p data-v-dfa3e464>作者名称</p></div></div>`);
  });
  _push(`<!--]--></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfa3e464"]]);
export {
  index as default
};
//# sourceMappingURL=index-DTAZ2un8.js.map
