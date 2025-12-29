import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "community-page container fade-in-up" }, _attrs))} data-v-c02d92ba><div class="sidebar" data-v-c02d92ba><div class="menu-group" data-v-c02d92ba><h3 data-v-c02d92ba>圈子分类</h3><ul data-v-c02d92ba><li class="active" data-v-c02d92ba>全部</li><li data-v-c02d92ba>手机摄影</li><li data-v-c02d92ba>人像摄影</li><li data-v-c02d92ba>风光摄影</li><li data-v-c02d92ba>后期修图</li></ul></div><div class="menu-group" data-v-c02d92ba><h3 data-v-c02d92ba>热门话题</h3><ul data-v-c02d92ba><li data-v-c02d92ba>#新手相机推荐</li><li data-v-c02d92ba>#秋季人像调色</li><li data-v-c02d92ba>#街头摄影技巧</li></ul></div></div><div class="main-content" data-v-c02d92ba><div class="post-editor" data-v-c02d92ba><textarea placeholder="分享你的摄影心得..." data-v-c02d92ba></textarea><div class="actions" data-v-c02d92ba><button data-v-c02d92ba>发布</button></div></div><div class="post-list" data-v-c02d92ba><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="post-item" data-v-c02d92ba><div class="post-header" data-v-c02d92ba><img${ssrRenderAttr("src", `https://i.pravatar.cc/150?u=${i}`)} class="avatar" alt="头像" data-v-c02d92ba><div class="info" data-v-c02d92ba><div class="name" data-v-c02d92ba>用户名称</div><div class="time" data-v-c02d92ba>2小时前</div></div></div><div class="post-body" data-v-c02d92ba><p data-v-c02d92ba>这里是帖子内容，大家觉得这张照片构图怎么样？求指点！</p><div class="images" data-v-c02d92ba><img${ssrRenderAttr("src", `https://picsum.photos/seed/post${i}-1/200/200`)} class="img" alt="图片1" data-v-c02d92ba><img${ssrRenderAttr("src", `https://picsum.photos/seed/post${i}-2/200/200`)} class="img" alt="图片2" data-v-c02d92ba></div></div><div class="post-footer" data-v-c02d92ba><span data-v-c02d92ba><i class="icon" data-v-c02d92ba>👍</i> 点赞 12</span><span data-v-c02d92ba><i class="icon" data-v-c02d92ba>💬</i> 评论 5</span><span data-v-c02d92ba><i class="icon" data-v-c02d92ba>↗</i> 分享</span></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c02d92ba"]]);
export {
  index as default
};
//# sourceMappingURL=index-BPxPioWW.js.map
