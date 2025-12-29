import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "works-page container fade-in-up" }, _attrs))} data-v-af508c7c><div class="filter-bar" data-v-af508c7c><div class="filter-group" data-v-af508c7c><span class="label" data-v-af508c7c>分类：</span><a href="#" class="active" data-v-af508c7c>全部</a><a href="#" data-v-af508c7c>人像</a><a href="#" data-v-af508c7c>风光</a><a href="#" data-v-af508c7c>静物</a><a href="#" data-v-af508c7c>商业</a></div><div class="filter-group" data-v-af508c7c><span class="label" data-v-af508c7c>排序：</span><a href="#" class="active" data-v-af508c7c>最新</a><a href="#" data-v-af508c7c>热门</a></div></div><div class="works-list" data-v-af508c7c><!--[-->`);
  ssrRenderList(12, (i) => {
    _push(`<div class="work-item" data-v-af508c7c><div class="cover-wrapper" data-v-af508c7c><img${ssrRenderAttr("src", `https://picsum.photos/seed/${i + 10}/400/300`)} class="cover" alt="作品封面" data-v-af508c7c><div class="overlay" data-v-af508c7c><button class="btn-view" data-v-af508c7c>查看详情</button></div></div><div class="info" data-v-af508c7c><div class="title" data-v-af508c7c>摄影作品示例 ${ssrInterpolate(i)}</div><div class="meta" data-v-af508c7c><span class="author" data-v-af508c7c><img${ssrRenderAttr("src", `https://i.pravatar.cc/150?u=${i}`)} class="avatar-mini" data-v-af508c7c> 摄影师A </span><span class="likes" data-v-af508c7c><i class="icon-heart" data-v-af508c7c>♥</i> 102 </span></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-af508c7c"]]);
export {
  index as default
};
//# sourceMappingURL=index-CVAYL5UP.js.map
