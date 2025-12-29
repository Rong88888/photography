import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "work-detail container fade-in-up" }, _attrs))} data-v-ee0b7878><div class="work-content" data-v-ee0b7878><div class="image-viewer" data-v-ee0b7878><img src="https://picsum.photos/seed/detail/1200/800" class="detail-image" alt="作品大图" data-v-ee0b7878></div><div class="work-meta" data-v-ee0b7878><h1 data-v-ee0b7878>作品标题示例</h1><div class="author-info" data-v-ee0b7878><img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" class="avatar" alt="头像" data-v-ee0b7878><div class="info" data-v-ee0b7878><div class="name" data-v-ee0b7878>摄影师Name</div><div class="time" data-v-ee0b7878>2025-12-29 发布</div></div><button class="btn-follow" data-v-ee0b7878>关注</button></div><div class="description" data-v-ee0b7878> 这里是作品的详细描述，拍摄思路，后期技巧等分享... <br data-v-ee0b7878><br data-v-ee0b7878> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div><div class="params" data-v-ee0b7878><h3 data-v-ee0b7878>拍摄参数</h3><ul data-v-ee0b7878><li data-v-ee0b7878><span class="label" data-v-ee0b7878>相机</span> Sony A7M4</li><li data-v-ee0b7878><span class="label" data-v-ee0b7878>镜头</span> FE 24-70mm GM</li><li data-v-ee0b7878><span class="label" data-v-ee0b7878>光圈</span> f/2.8</li><li data-v-ee0b7878><span class="label" data-v-ee0b7878>快门</span> 1/200s</li><li data-v-ee0b7878><span class="label" data-v-ee0b7878>ISO</span> 100</li></ul></div></div></div><div class="comments-section" data-v-ee0b7878><h3 data-v-ee0b7878>评论 (23)</h3><div class="comment-placeholder" data-v-ee0b7878> 暂无评论，快来抢沙发吧~ </div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee0b7878"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CAfCdAYN.js.map
