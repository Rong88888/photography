<template>
  <div class="home-page">
    <section class="banner fade-in-up">
      <div class="container">
        <h1>发现摄影之美</h1>
        <p>全场景摄影分享与垂直交流生态平台</p>
        <div class="banner-actions">
          <button class="btn-explore">开始探索</button>
        </div>
      </div>
      <div class="banner-bg"></div>
    </section>

    <section class="recommend-works container">
      <h2 class="section-title fade-in-up" style="animation-delay: 0.2s">推荐作品</h2>
      <div class="works-grid">
        <div v-for="i in 8" :key="i" class="work-card fade-in-up" :style="{ animationDelay: `${0.1 * i + 0.2}s` }">
          <div class="img-wrapper">
            <img :src="`https://picsum.photos/seed/${i}/600/400`" class="work-image" alt="作品封面" />
            <div class="overlay">
              <button>查看详情</button>
            </div>
          </div>
          <div class="work-info">
            <h3>作品标题 {{ i }}</h3>
            <p>作者名称</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 平台特色介绍（全宽，无背景色） -->
    <section class="platform-features-wide fade-in-up container" style="animation-delay: 0.4s">
      <div class="features-inner">
        <h2 class="section-title">平台特色</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>多元交流</h3>
            <p>支持作品评论、私信、圈子讨论，结识志同道合的摄影师。</p>
          </div>
          <div class="feature-card">
            <h3>垂直分类</h3>
            <p>涵盖风光、人像、纪实、商业等多种摄影领域，精准推荐内容。</p>
          </div>
          <div class="feature-card">
            <h3>优质教程</h3>
            <p>专业摄影师分享实用技巧，助力摄影成长。</p>
          </div>
          <div class="feature-card">
            <h3>活动赛事</h3>
            <p>定期举办线上线下摄影活动，展示你的作品与实力。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门摄影师推荐（全宽自动轮播，无背景色） -->
    <section class="hot-photographers fade-in-up" style="animation-delay: 0.6s">
      <div class="container">
        <h2 class="section-title">热门摄影师</h2>
        <div class="carousel-container">
          <div class="carousel-track">
            <div v-for="(i, index) in seamlessPhotographerList" :key="index" class="photographer-card">
              <img :src="`https://randomuser.me/api/portraits/men/${(i % 10) + 10}.jpg`" class="avatar" alt="摄影师头像" />
              <div class="info">
                <h3>摄影师 {{ i }}</h3>
                <p>擅长领域：风光、人像</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作品牌展示（全宽自动轮播） -->
    <section class="cooperative-partner fade-in-up" style="animation-delay: 1.4s">
      <div class="container">
        <h2 class="section-title">合作品牌</h2>
        <div class="carousel-container">
          <div class="carousel-track">
            <div v-for="(logo, idx) in seamlessPartnerList" :key="idx" class="partner-card">
              <img :src="logo.src" :alt="logo.alt" class="partner-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新动态/公告 -->
    <section class="latest-news container fade-in-up" style="animation-delay: 0.8s">
      <h2 class="section-title">最新动态</h2>
      <ul class="news-list">
        <li>2025-12-28 平台摄影大赛报名开启！</li>
        <li>2025-12-20 新增“商业摄影”分类，欢迎投稿。</li>
        <li>2025-12-10 优质教程《夜景拍摄技巧》上线。</li>
      </ul>
    </section>

    <!-- 用户评价/社区互动 -->
    <section class="user-feedback container fade-in-up" style="animation-delay: 1.6s">
      <h2 class="section-title">用户评价</h2>
      <div class="feedback-list">
        <div class="feedback-card">
          <p>“在这里结识了很多优秀摄影师，作品交流很有收获！”</p>
          <span>—— 用户A</span>
        </div>
        <div class="feedback-card">
          <p>“平台活动丰富，教程实用，摄影水平提升很快。”</p>
          <span>—— 用户B</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 合作品牌logo
const partnerLogos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Canon_logo.svg', alt: 'Canon' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Nikon_logo.svg', alt: 'Nikon' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg', alt: 'Sony' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Fujifilm_logo.svg', alt: 'Fujifilm' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Pentax_logo.svg', alt: 'Pentax' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Olympus_logo.svg', alt: 'Olympus' },
]

// 为了实现无缝轮播，将数据列表复制一份
const photographerList = Array.from({ length: 10 }, (_, i) => i + 1)
// 复制4份，确保在宽屏下也能无缝衔接，配合CSS的25%移动
const seamlessPhotographerList = [...photographerList, ...photographerList, ...photographerList, ...photographerList]

// 合作品牌较少，复制4份以确保在宽屏下也能无缝衔接（两份作为一组，共两组）
const seamlessPartnerList = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

const photographerTrack = ref(null)
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  margin-bottom: 60px;

  .container {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 72px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(to right, #fff, #aaa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2px;
  }
  
  p {
    font-size: 24px;
    color: rgba(255,255,255,0.8);
    margin-bottom: 40px;
  }

  .btn-explore {
    padding: 15px 40px;
    font-size: 18px;
    background: var(--primary-color);
    border: none;
    border-radius: 30px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(54, 207, 201, 0.3);
    }
  }

  .banner-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://picsum.photos/seed/banner/1920/1080') no-repeat center/cover;
    filter: brightness(0.4);
    z-index: 1;
    transform: scale(1.1);
    animation: zoomIn 20s infinite alternate;
  }
}

@keyframes zoomIn {
  to { transform: scale(1); }
}

.section-title {
  font-size: 32px;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
  }
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.work-card {
  background: rgba(54,207,201,0.10); // 明显10%主色
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    border-color: rgba(255,255,255,0.1);

    .work-image {
      transform: scale(1.1);
    }
    
    .overlay {
      opacity: 1;
    }
  }

  .img-wrapper {
    position: relative;
    height: 260px;
    overflow: hidden;
  }

  .work-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;

    button {
      padding: 10px 24px;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255,255,255,0.4);
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
      
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }

  .work-info {
    padding: 20px;
    
    h3 {
      margin: 0 0 8px;
      font-size: 18px;
      color: #fff;
    }
    
    p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 14px;
    }
  }
}

/* 新增内容样式 */
.platform-features-wide {
  margin: 60px auto;
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  .feature-card {
    background: rgba(54,207,201,0.10); // 明显10%主色
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    color: #fff;
    h3 { margin-bottom: 10px; }
    p { color: var(--text-secondary); }
  }
}

.hot-photographers {
  margin: 60px auto;
  overflow: hidden; /* 隐藏溢出内容 */
  position: relative;

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px 0; /* 增加内边距，防止hover浮动被裁剪 */
    /* 遮罩层，让两侧有渐隐效果 */
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }

  .carousel-track {
    display: flex;
    width: max-content; /* 让宽度适应内容 */
    animation: seamlessScroll 60s linear infinite; /* 调整为60s，速度更平缓 */
    will-change: transform; /* 优化性能 */
    
    &:hover {
      animation-play-state: paused;
    }
  }

  .photographer-card {
    background: rgba(54,207,201,0.10); // 明显10%主色
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    min-width: 280px; /* 固定最小宽度，确保布局稳定 */
    flex-shrink: 0;   /* 防止被压缩 */
    margin-right: 30px; /* 使用 margin 替代 gap，确保 25% 宽度计算精确 */

    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 18px;
      object-fit: cover;
      border: 2px solid var(--primary-color);
    }
    .info h3 { margin: 0 0 6px; font-size: 18px; color: #fff; }
    .info p { margin: 0; color: var(--text-secondary); font-size: 14px; }
  }
}

.cooperative-partner {
  margin: 60px auto;
  overflow: hidden;
  position: relative;

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px 0; /* 增加内边距，防止hover浮动被裁剪 */
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }

  .carousel-track {
    display: flex;
    width: max-content;
    animation: seamlessScroll 30s linear infinite; /* 调整为30s */
    will-change: transform;

    &:hover {
      animation-play-state: paused;
    }
  }

  .partner-card {
    background: rgba(54,207,201,0.10); // 明显10%主色
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    min-width: 180px;
    height: 100px;
    flex-shrink: 0;
    margin-right: 40px; /* 使用 margin 替代 gap，确保 25% 宽度计算精确 */

    img {
      max-width: 80%;
      max-height: 80%;
      filter: grayscale(100%) brightness(2); /* 白色单色logo */
      opacity: 0.7;
      transition: all 0.3s;
    }

    &:hover img {
      filter: grayscale(0) brightness(1);
      opacity: 1;
      transform: scale(1.1);
    }
  }
}

.latest-news {
  margin: 60px auto;
  .news-list {
    margin-top: 20px;
    padding-left: 20px;
    color: var(--text-secondary);
    li { margin-bottom: 8px; }
  }
}

.user-feedback {
  margin: 60px auto;
  .feedback-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  .feedback-card {
    background: rgba(54,207,201,0.10); // 明显10%主色
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    color: #fff;
    p { font-style: italic; margin-bottom: 15px; font-size: 16px; color: rgba(255,255,255,0.9); }
    span { display: block; text-align: right; color: var(--primary-color); font-weight: bold; }
  }
}

/* 定义无缝滚动动画 */
@keyframes seamlessScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%); /* 移动1/4的距离（因为有4组数据），实现无缝衔接 */
  }
}
</style>
