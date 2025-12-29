import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "E:/Work/999-demo/Ai生成/Photography/photography/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const workId = route.params.id || 1;
    const coverUrl = `https://picsum.photos/seed/${Number(workId) + 10}/800/600`;
    const authorAvatar = `https://i.pravatar.cc/150?u=${workId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "work-detail-page container fade-in-up" }, _attrs))} data-v-f5ae2670><div class="work-detail-header" data-v-f5ae2670><img${ssrRenderAttr("src", coverUrl)} class="work-detail-cover" alt="作品封面" data-v-f5ae2670><div class="work-detail-info" data-v-f5ae2670><h1 class="title" data-v-f5ae2670>摄影作品示例 ${ssrInterpolate(unref(workId))}</h1><div class="meta" data-v-f5ae2670><span class="author" data-v-f5ae2670><img${ssrRenderAttr("src", authorAvatar)} class="avatar-mini" data-v-f5ae2670> 摄影师A </span><span class="likes" data-v-f5ae2670><i class="icon-heart" data-v-f5ae2670>♥</i> 102 </span></div><p class="desc" data-v-f5ae2670>这里是作品的详细描述。可以介绍拍摄思路、器材、后期技巧等。</p></div></div><div class="work-detail-section" data-v-f5ae2670><h2 data-v-f5ae2670>作品详情</h2><ul data-v-f5ae2670><li data-v-f5ae2670>拍摄时间：2025-12-01</li><li data-v-f5ae2670>拍摄地点：上海外滩</li><li data-v-f5ae2670>器材：Canon EOS R5 + RF 24-70mm F2.8</li><li data-v-f5ae2670>后期软件：Lightroom, Photoshop</li></ul></div><div class="work-detail-section" data-v-f5ae2670><h2 data-v-f5ae2670>用户评论</h2><div class="comments" data-v-f5ae2670><div class="comment-card" data-v-f5ae2670><div class="comment-author" data-v-f5ae2670>用户A</div><div class="comment-content" data-v-f5ae2670>色彩很棒，氛围感十足！</div></div><div class="comment-card" data-v-f5ae2670><div class="comment-author" data-v-f5ae2670>用户B</div><div class="comment-content" data-v-f5ae2670>构图很有创意，学习了！</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5ae2670"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-Dc51YbCR.js.map
