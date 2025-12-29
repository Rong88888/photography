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
  </div>
</template>

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
  background: var(--card-bg);
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
</style>
