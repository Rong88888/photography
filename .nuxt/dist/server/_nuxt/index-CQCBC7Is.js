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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-center container fade-in-up" }, _attrs))} data-v-93d74121><div class="user-header" data-v-93d74121><div class="cover-wrapper" data-v-93d74121><img src="https://picsum.photos/seed/cover/1600/400" class="cover" alt="封面图" data-v-93d74121><div class="overlay" data-v-93d74121></div></div><div class="profile" data-v-93d74121><img src="https://i.pravatar.cc/150?u=user" class="avatar" alt="头像" data-v-93d74121><div class="info" data-v-93d74121><h1 data-v-93d74121>我的昵称 <span class="tag" data-v-93d74121>个人认证</span></h1><p class="bio" data-v-93d74121>这里是个人简介，热爱摄影，记录生活...</p><div class="stats" data-v-93d74121><span data-v-93d74121><strong data-v-93d74121>128</strong> 关注</span><span data-v-93d74121><strong data-v-93d74121>356</strong> 粉丝</span><span data-v-93d74121><strong data-v-93d74121>1.2k</strong> 获赞</span></div></div><div class="actions" data-v-93d74121><button class="btn-edit" data-v-93d74121>编辑资料</button></div></div></div><div class="user-content" data-v-93d74121><div class="tabs" data-v-93d74121><a href="#" class="active" data-v-93d74121>我的作品</a><a href="#" data-v-93d74121>我的收藏</a><a href="#" data-v-93d74121>我的课程</a></div><div class="content-grid" data-v-93d74121><div class="upload-card" data-v-93d74121><div class="icon" data-v-93d74121>+</div><p data-v-93d74121>上传新作品</p></div><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="work-item" data-v-93d74121><div class="img-wrapper" data-v-93d74121><img${ssrRenderAttr("src", `https://picsum.photos/seed/${i + 100}/300/200`)} class="img-placeholder" alt="作品" data-v-93d74121></div><div class="title" data-v-93d74121>我的作品 ${ssrInterpolate(i)}</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-93d74121"]]);
export {
  index as default
};
//# sourceMappingURL=index-CQCBC7Is.js.map
