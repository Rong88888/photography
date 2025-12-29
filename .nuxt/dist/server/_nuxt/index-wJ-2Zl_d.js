import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
    const partnerLogos = [
      { src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Canon_logo.svg", alt: "Canon" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Nikon_logo.svg", alt: "Nikon" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg", alt: "Sony" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Fujifilm_logo.svg", alt: "Fujifilm" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Pentax_logo.svg", alt: "Pentax" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Olympus_logo.svg", alt: "Olympus" }
    ];
    const photographerList = Array.from({ length: 10 }, (_, i) => i + 1);
    const seamlessPhotographerList = [...photographerList, ...photographerList, ...photographerList, ...photographerList];
    const seamlessPartnerList = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-ed7a797b><section class="banner fade-in-up" data-v-ed7a797b><div class="container" data-v-ed7a797b><h1 data-v-ed7a797b>发现摄影之美</h1><p data-v-ed7a797b>全场景摄影分享与垂直交流生态平台</p><div class="banner-actions" data-v-ed7a797b><button class="btn-explore" data-v-ed7a797b>开始探索</button></div></div><div class="banner-bg" data-v-ed7a797b></div></section><section class="recommend-works container" data-v-ed7a797b><h2 class="section-title fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-ed7a797b>推荐作品</h2><div class="works-grid" data-v-ed7a797b><!--[-->`);
      ssrRenderList(8, (i) => {
        _push(`<div class="work-card fade-in-up" style="${ssrRenderStyle({ animationDelay: `${0.1 * i + 0.2}s` })}" data-v-ed7a797b><div class="img-wrapper" data-v-ed7a797b><img${ssrRenderAttr("src", `https://picsum.photos/seed/${i}/600/400`)} class="work-image" alt="作品封面" data-v-ed7a797b><div class="overlay" data-v-ed7a797b><button data-v-ed7a797b>查看详情</button></div></div><div class="work-info" data-v-ed7a797b><h3 data-v-ed7a797b>作品标题 ${ssrInterpolate(i)}</h3><p data-v-ed7a797b>作者名称</p></div></div>`);
      });
      _push(`<!--]--></div></section><section class="platform-features-wide fade-in-up container" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-ed7a797b><div class="features-inner" data-v-ed7a797b><h2 class="section-title" data-v-ed7a797b>平台特色</h2><div class="features-grid" data-v-ed7a797b><div class="feature-card" data-v-ed7a797b><h3 data-v-ed7a797b>多元交流</h3><p data-v-ed7a797b>支持作品评论、私信、圈子讨论，结识志同道合的摄影师。</p></div><div class="feature-card" data-v-ed7a797b><h3 data-v-ed7a797b>垂直分类</h3><p data-v-ed7a797b>涵盖风光、人像、纪实、商业等多种摄影领域，精准推荐内容。</p></div><div class="feature-card" data-v-ed7a797b><h3 data-v-ed7a797b>优质教程</h3><p data-v-ed7a797b>专业摄影师分享实用技巧，助力摄影成长。</p></div><div class="feature-card" data-v-ed7a797b><h3 data-v-ed7a797b>活动赛事</h3><p data-v-ed7a797b>定期举办线上线下摄影活动，展示你的作品与实力。</p></div></div></div></section><section class="hot-photographers fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.6s" })}" data-v-ed7a797b><div class="container" data-v-ed7a797b><h2 class="section-title" data-v-ed7a797b>热门摄影师</h2><div class="carousel-container" data-v-ed7a797b><div class="carousel-track" data-v-ed7a797b><!--[-->`);
      ssrRenderList(seamlessPhotographerList, (i, index2) => {
        _push(`<div class="photographer-card" data-v-ed7a797b><img${ssrRenderAttr("src", `https://randomuser.me/api/portraits/men/${i % 10 + 10}.jpg`)} class="avatar" alt="摄影师头像" data-v-ed7a797b><div class="info" data-v-ed7a797b><h3 data-v-ed7a797b>摄影师 ${ssrInterpolate(i)}</h3><p data-v-ed7a797b>擅长领域：风光、人像</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="cooperative-partner fade-in-up" style="${ssrRenderStyle({ "animation-delay": "1.4s" })}" data-v-ed7a797b><div class="container" data-v-ed7a797b><h2 class="section-title" data-v-ed7a797b>合作品牌</h2><div class="carousel-container" data-v-ed7a797b><div class="carousel-track" data-v-ed7a797b><!--[-->`);
      ssrRenderList(seamlessPartnerList, (logo, idx) => {
        _push(`<div class="partner-card" data-v-ed7a797b><img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.alt)} class="partner-logo" data-v-ed7a797b></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="latest-news container fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.8s" })}" data-v-ed7a797b><h2 class="section-title" data-v-ed7a797b>最新动态</h2><ul class="news-list" data-v-ed7a797b><li data-v-ed7a797b>2025-12-28 平台摄影大赛报名开启！</li><li data-v-ed7a797b>2025-12-20 新增“商业摄影”分类，欢迎投稿。</li><li data-v-ed7a797b>2025-12-10 优质教程《夜景拍摄技巧》上线。</li></ul></section><section class="user-feedback container fade-in-up" style="${ssrRenderStyle({ "animation-delay": "1.6s" })}" data-v-ed7a797b><h2 class="section-title" data-v-ed7a797b>用户评价</h2><div class="feedback-list" data-v-ed7a797b><div class="feedback-card" data-v-ed7a797b><p data-v-ed7a797b>“在这里结识了很多优秀摄影师，作品交流很有收获！”</p><span data-v-ed7a797b>—— 用户A</span></div><div class="feedback-card" data-v-ed7a797b><p data-v-ed7a797b>“平台活动丰富，教程实用，摄影水平提升很快。”</p><span data-v-ed7a797b>—— 用户B</span></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed7a797b"]]);
export {
  index as default
};
//# sourceMappingURL=index-wJ-2Zl_d.js.map
