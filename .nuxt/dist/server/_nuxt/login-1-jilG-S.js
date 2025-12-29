import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const type = ref("login");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-3a35a790><div class="login-box fade-in-up" data-v-3a35a790><h2 data-v-3a35a790>欢迎来到影集社</h2><div class="tabs" data-v-3a35a790><span class="${ssrRenderClass({ active: unref(type) === "login" })}" data-v-3a35a790>登录</span><span class="${ssrRenderClass({ active: unref(type) === "register" })}" data-v-3a35a790>注册</span></div><form class="form" data-v-3a35a790><div class="form-item" data-v-3a35a790><input type="text" placeholder="手机号/邮箱" data-v-3a35a790></div><div class="form-item" data-v-3a35a790><input type="password" placeholder="密码" data-v-3a35a790></div>`);
      if (unref(type) === "register") {
        _push(`<div class="form-item" data-v-3a35a790><input type="password" placeholder="确认密码" data-v-3a35a790></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="btn-submit" data-v-3a35a790>${ssrInterpolate(unref(type) === "login" ? "登录" : "注册")}</button></form><div class="other-login" data-v-3a35a790><p data-v-3a35a790>第三方登录</p><div class="icons" data-v-3a35a790><span class="icon wechat" data-v-3a35a790>微信</span><span class="icon alipay" data-v-3a35a790>支付宝</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a35a790"]]);
export {
  login as default
};
//# sourceMappingURL=login-1-jilG-S.js.map
