<template>
  <div class="work-detail container fade-in-up">
    <div class="work-content">
      <div class="image-viewer">
        <!-- 实际项目中这里是图片展示区域 -->
        <img src="https://picsum.photos/seed/detail/1200/800" class="detail-image" alt="作品大图" />
      </div>
      <div class="work-meta">
        <h1>作品标题示例</h1>
        <div class="author-info">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" class="avatar" alt="头像" />
          <div class="info">
            <div class="name">摄影师Name</div>
            <div class="time">2025-12-29 发布</div>
          </div>
          <button class="btn-follow">关注</button>
        </div>
        <div class="description">
          这里是作品的详细描述，拍摄思路，后期技巧等分享...
          <br><br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="params">
          <h3>拍摄参数</h3>
          <ul>
            <li><span class="label">相机</span> Sony A7M4</li>
            <li><span class="label">镜头</span> FE 24-70mm GM</li>
            <li><span class="label">光圈</span> f/2.8</li>
            <li><span class="label">快门</span> 1/200s</li>
            <li><span class="label">ISO</span> 100</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="comments-section">
      <h3>评论 (23)</h3>
      <!-- 评论列表组件 -->
      <div class="comment-placeholder">
        暂无评论，快来抢沙发吧~
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-detail {
  padding-top: 40px;
  padding-bottom: 60px;
}

.work-content {
  background: var(--card-bg);
  padding: 40px;
  border-radius: 16px;
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
}

.image-viewer {
  margin-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  
  .detail-image {
    width: 100%;
    height: auto;
    max-height: 800px;
    object-fit: contain;
    background: #000;
    display: block;
  }
}

.work-meta {
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: var(--text-color);
  }
}

.author-info {
  display: flex;
  align-items: center;
  margin: 30px 0;
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    border: 2px solid var(--primary-color);
  }

  .info {
    flex: 1;
    .name { 
      font-weight: bold; 
      font-size: 18px; 
      color: var(--text-color);
      margin-bottom: 5px;
    }
    .time { 
      font-size: 14px; 
      color: var(--text-secondary); 
    }
  }

  .btn-follow {
    padding: 8px 24px;
    background: var(--primary-color);
    color: #000;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 0.9;
    }
  }
}

.description {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 40px;
}

.params {
  background: rgba(255,255,255,0.03);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border-color);

  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--text-color);
    font-size: 18px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;

    li {
      color: var(--text-color);
      display: flex;
      align-items: center;
      
      .label {
        color: var(--text-secondary);
        margin-right: 10px;
        min-width: 40px;
      }
    }
  }
}

.comments-section {
  h3 {
    color: var(--text-color);
    margin-bottom: 20px;
  }
  
  .comment-placeholder {
    padding: 40px;
    text-align: center;
    color: var(--text-secondary);
    background: var(--card-bg);
    border-radius: 12px;
    border: 1px solid var(--border-color);
  }
}
</style>
