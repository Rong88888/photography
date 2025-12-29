import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-default" }, _attrs))} data-v-82e5bc66><header class="header" data-v-82e5bc66><div class="container header-content" data-v-82e5bc66><div class="logo" data-v-82e5bc66>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`影集社`);
      } else {
        return [
          createTextVNode("影集社")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="nav" data-v-82e5bc66>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`首页`);
      } else {
        return [
          createTextVNode("首页")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/works" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`作品`);
      } else {
        return [
          createTextVNode("作品")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/community" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`社区`);
      } else {
        return [
          createTextVNode("社区")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/tutorials" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`教程`);
      } else {
        return [
          createTextVNode("教程")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/business" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`商业对接`);
      } else {
        return [
          createTextVNode("商业对接")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div class="user-actions" data-v-82e5bc66>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    class: "btn-login"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`登录/注册`);
      } else {
        return [
          createTextVNode("登录/注册")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/user",
    class: "btn-user"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`个人中心`);
      } else {
        return [
          createTextVNode("个人中心")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></header><main class="main" data-v-82e5bc66>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="footer" data-v-82e5bc66><div class="container" data-v-82e5bc66><p data-v-82e5bc66>© 2025 影集社 - 摄影分享与交流平台</p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-82e5bc66"]]);
export {
  _default as default
};
//# sourceMappingURL=default-GIzBLB8i.js.map
