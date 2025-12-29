<template>
  <div class="tutorials-page container fade-in-up">
    <div class="header">
      <h1>摄影教程</h1>
      <div class="categories">
        <span class="active">全部</span>
        <span>基础入门</span>
        <span>后期修图</span>
        <span>器材使用</span>
        <span>商业接单</span>
      </div>
    </div>

    <div class="tutorial-list">
      <div v-for="i in 8" :key="i" class="tutorial-card">
        <div class="thumbnail">
          <img :src="`https://picsum.photos/seed/tutorial${i}/400/300`" class="thumb-img" alt="教程封面" />
          <span class="badge">免费</span>
          <div class="play-icon">▶</div>
        </div>
        <div class="info">
          <h3>零基础学摄影：光圈与快门 {{ i }}</h3>
          <p class="desc">本课程详细讲解相机基础参数设置，帮助新手快速入门...</p>
          <div class="meta">
            <span class="author">讲师：老张</span>
            <span class="count">1200 人学习</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tutorials-page {
  padding-top: 40px;
  padding-bottom: 60px;
}

.header {
  background: var(--card-bg);
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 40px;
  text-align: center;
  border: 1px solid var(--border-color);
  
  h1 { 
    margin-top: 0; 
    color: var(--text-color);
    font-size: 32px;
    margin-bottom: 30px;
  }
  
  .categories {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    
    span {
      cursor: pointer;
      padding: 8px 24px;
      border-radius: 30px;
      background: rgba(255,255,255,0.05);
      color: var(--text-secondary);
      transition: all 0.3s;
      border: 1px solid transparent;

      &:hover { 
        background: rgba(255,255,255,0.1);
        color: var(--text-color);
      }

      &.active { 
        background: var(--primary-color); 
        color: #000; 
        font-weight: bold;
      }
    }
  }
}

.tutorial-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.tutorial-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover { 
    transform: translateY(-8px); 
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);

    .thumbnail .play-icon {
      transform: translate(-50%, -50%) scale(1.1);
      background: var(--primary-color);
      color: #000;
    }
  }
  
  .thumbnail {
    height: 180px;
    background: #333;
    position: relative;
    overflow: hidden;
    
    .thumb-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #52c41a;
      color: #fff;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      z-index: 2;
    }

    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      background: rgba(0,0,0,0.6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      transition: all 0.3s;
      backdrop-filter: blur(4px);
      z-index: 2;
    }
  }
  
  .info {
    padding: 20px;

    h3 {
      margin: 0 0 10px;
      font-size: 16px;
      color: var(--text-color);
      line-height: 1.4;
      height: 44px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .desc {
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 15px;
      height: 36px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: var(--text-secondary);
      border-top: 1px solid rgba(255,255,255,0.05);
      padding-top: 12px;
    }
  }
}
</style>
