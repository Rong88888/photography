<template>
  <div class="work-detail-page container fade-in-up">
    <div class="work-header">
      <button class="btn-back" @click="$router.back()">← 返回列表</button>
      <div class="work-title-section">
        <h1>作品标题示例 {{ $route.params.id }}</h1>
        <div class="author-info">
          <img :src="`https://i.pravatar.cc/150?u=${$route.params.id}`" class="avatar" alt="作者头像" />
          <div class="text">
            <span class="name">摄影师A</span>
            <span class="date">发布于 2025-01-15</span>
          </div>
          <button class="btn-follow">+ 关注</button>
        </div>
      </div>
    </div>

    <div class="work-content">
      <div class="main-image-wrapper">
        <img :src="`https://picsum.photos/seed/${Number($route.params.id) + 10}/1200/800`" class="main-image" alt="作品大图" />
      </div>
      
      <div class="work-description">
        <h3>作品描述</h3>
        <p>这是一段关于该摄影作品的详细描述。摄影师在这里分享了拍摄的灵感、使用的设备、参数设置以及后期处理的思路。通过这些文字，观众可以更深入地理解作品背后的故事。</p>
        <div class="tags">
          <span>#风光</span>
          <span>#日落</span>
          <span>#长曝光</span>
        </div>
      </div>

      <div class="work-stats">
        <div class="stat-item">
          <i class="icon">👁️</i>
          <span>1,234 浏览</span>
        </div>
        <div class="stat-item action">
          <i class="icon">♥</i>
          <span>102 点赞</span>
        </div>
        <div class="stat-item action">
          <i class="icon">⭐</i>
          <span>56 收藏</span>
        </div>
        <div class="stat-item action">
          <i class="icon">💬</i>
          <span>23 评论</span>
        </div>
      </div>
    </div>

    <div class="comments-section">
      <h3>评论 (23)</h3>
      <div class="comment-input">
        <img src="https://i.pravatar.cc/150?u=me" class="avatar-mini" />
        <input type="text" placeholder="写下你的评论..." />
        <button>发送</button>
      </div>
      <div class="comment-list">
        <div v-for="i in 3" :key="i" class="comment-item">
          <img :src="`https://i.pravatar.cc/150?u=${i+20}`" class="avatar-mini" />
          <div class="content">
            <div class="user">用户{{ i }}</div>
            <div class="text">这张照片的光影处理非常棒，构图也很讲究！</div>
            <div class="meta">2小时前 · 回复</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.work-detail-page {
  padding-top: 40px;
  padding-bottom: 80px;
}

.btn-back {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;
  &:hover { color: var(--primary-color); }
}

.work-header {
  margin-bottom: 30px;
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #fff;
  }
}

.author-info {
  display: flex;
  align-items: center;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid var(--primary-color);
  }
  .text {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    .name { font-weight: bold; font-size: 18px; color: #fff; }
    .date { font-size: 14px; color: var(--text-secondary); }
  }
  .btn-follow {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: var(--primary-color);
      color: #000;
      border-color: var(--primary-color);
    }
  }
}

.work-content {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-bottom: 40px;
}

.main-image-wrapper {
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }
}

.work-description {
  padding: 30px;
  h3 { margin-bottom: 15px; color: #fff; }
  p { line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px; }
  .tags {
    display: flex;
    gap: 10px;
    span {
      background: rgba(255,255,255,0.05);
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--primary-color);
    }
  }
}

.work-stats {
  padding: 20px 30px;
  border-top: 1px solid rgba(255,255,255,0.05);
  display: flex;
  gap: 30px;
  .stat-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    font-size: 16px;
    &.action {
      cursor: pointer;
      transition: color 0.3s;
      &:hover { color: var(--primary-color); }
    }
  }
}

.comments-section {
  max-width: 800px;
  margin: 0 auto;
  h3 { margin-bottom: 20px; color: #fff; }
}

.comment-input {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  .avatar-mini { width: 40px; height: 40px; border-radius: 50%; }
  input {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 0 15px;
    color: #fff;
    &:focus { border-color: var(--primary-color); outline: none; }
  }
  button {
    background: var(--primary-color);
    color: #000;
    border: none;
    padding: 0 24px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
}

.comment-list {
  .comment-item {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    .avatar-mini { width: 40px; height: 40px; border-radius: 50%; }
    .content {
      flex: 1;
      background: rgba(255,255,255,0.03);
      padding: 15px;
      border-radius: 8px;
      .user { font-weight: bold; color: #fff; margin-bottom: 5px; }
      .text { color: var(--text-secondary); margin-bottom: 8px; line-height: 1.5; }
      .meta { font-size: 12px; color: rgba(255,255,255,0.3); }
    }
  }
}

@media (max-width: 768px) {
  .work-header h1 { font-size: 24px; }
  .work-description { padding: 20px; }
  .work-stats { padding: 15px 20px; gap: 15px; font-size: 14px; }
}
</style>
