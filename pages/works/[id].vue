<template>
  <div class="work-detail-page container fade-in-up">
    <div class="work-detail-header">
      <img :src="coverUrl" class="work-detail-cover" alt="作品封面" />
      <div class="work-detail-info">
        <h1 class="title">摄影作品示例 {{ workId }}</h1>
        <div class="meta">
          <span class="author">
            <img :src="authorAvatar" class="avatar-mini" />
            摄影师A
          </span>
          <span class="likes">
            <i class="icon-heart">♥</i> 102
          </span>
        </div>
        <p class="desc">这里是作品的详细描述。可以介绍拍摄思路、器材、后期技巧等。</p>
      </div>
    </div>
    <div class="work-detail-section">
      <h2>作品详情</h2>
      <ul>
        <li>拍摄时间：2025-12-01</li>
        <li>拍摄地点：上海外滩</li>
        <li>器材：Canon EOS R5 + RF 24-70mm F2.8</li>
        <li>后期软件：Lightroom, Photoshop</li>
      </ul>
    </div>
    <div class="work-detail-section">
      <h2>用户评论</h2>
      <div class="comments">
        <div class="comment-card">
          <div class="comment-author">用户A</div>
          <div class="comment-content">色彩很棒，氛围感十足！</div>
        </div>
        <div class="comment-card">
          <div class="comment-author">用户B</div>
          <div class="comment-content">构图很有创意，学习了！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const workId = route.params.id || 1
const coverUrl = `https://picsum.photos/seed/${Number(workId) + 10}/800/600`
const authorAvatar = `https://i.pravatar.cc/150?u=${workId}`
</script>

<style lang="scss" scoped>
.work-detail-page {
  padding-top: 40px;
  padding-bottom: 60px;
}
.work-detail-header {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
}
.work-detail-cover {
  width: 480px;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  @media (max-width: 900px) {
    width: 100%;
    height: 220px;
  }
}
.work-detail-info {
  flex: 1;
  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 18px;
    color: var(--text-color);
  }
  .meta {
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 16px;
    margin-bottom: 18px;
    .author {
      display: flex;
      align-items: center;
      gap: 8px;
      .avatar-mini {
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
    }
    .likes {
      display: flex;
      align-items: center;
      gap: 4px;
      .icon-heart {
        color: #ff4d4f;
      }
    }
  }
  .desc {
    color: var(--text-secondary);
    font-size: 15px;
    margin-bottom: 10px;
  }
}
.work-detail-section {
  margin-bottom: 36px;
  h2 {
    font-size: 22px;
    margin-bottom: 16px;
    color: var(--primary-color);
  }
  ul {
    padding-left: 20px;
    color: var(--text-secondary);
    li { margin-bottom: 8px; }
  }
  .comments {
    display: flex;
    flex-direction: column;
    gap: 18px;
    .comment-card {
      background: var(--card-bg);
      border-radius: 10px;
      padding: 18px;
      color: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      .comment-author {
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 6px;
      }
      .comment-content {
        font-size: 15px;
        color: var(--text-secondary);
      }
    }
  }
}
</style>
