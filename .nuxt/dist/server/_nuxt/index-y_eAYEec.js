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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "works-page container fade-in-up" }, _attrs))} data-v-71bc7775><div class="filter-bar" data-v-71bc7775><div class="filter-group" data-v-71bc7775><span class="label" data-v-71bc7775>分类：</span><a href="#" class="active" data-v-71bc7775>全部</a><a href="#" data-v-71bc7775>人像</a><a href="#" data-v-71bc7775>风光</a><a href="#" data-v-71bc7775>静物</a><a href="#" data-v-71bc7775>商业</a></div><div class="filter-group" data-v-71bc7775><span class="label" data-v-71bc7775>排序：</span><a href="#" class="active" data-v-71bc7775>最新</a><a href="#" data-v-71bc7775>热门</a></div></div><div class="works-list" data-v-71bc7775><!--[-->`);
      ssrRenderList(12, (i) => {
        _push(`<div class="work-item" data-v-71bc7775><div class="cover-wrapper" data-v-71bc7775><img${ssrRenderAttr("src", `https://picsum.photos/seed/${i + 10}/400/300`)} class="cover" alt="作品封面" data-v-71bc7775><div class="overlay" data-v-71bc7775><button class="btn-view" data-v-71bc7775>查看详情</button></div></div><div class="info" data-v-71bc7775><div class="title" data-v-71bc7775>摄影作品示例 ${ssrInterpolate(i)}</div><div class="meta" data-v-71bc7775><span class="author" data-v-71bc7775><img${ssrRenderAttr("src", `https://i.pravatar.cc/150?u=${i}`)} class="avatar-mini" data-v-71bc7775> 摄影师A </span><span class="likes" data-v-71bc7775><i class="icon-heart" data-v-71bc7775>♥</i> 102 </span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71bc7775"]]);
export {
  index as default
};
//# sourceMappingURL=index-y_eAYEec.js.map
