<template>
  <div class="community-page container fade-in-up">
    <div class="sidebar">
      <div class="menu-group">
        <h3>圈子分类</h3>
        <ul>
          <li class="active">全部</li>
          <li>手机摄影</li>
          <li>人像摄影</li>
          <li>风光摄影</li>
          <li>后期修图</li>
        </ul>
      </div>
      <div class="menu-group">
        <h3>热门话题</h3>
        <ul>
          <li>#新手相机推荐</li>
          <li>#秋季人像调色</li>
          <li>#街头摄影技巧</li>
        </ul>
      </div>
    </div>

    <div class="main-content">
      <div class="post-editor">
        <textarea placeholder="分享你的摄影心得..."></textarea>
        <div class="actions">
          <button>发布</button>
        </div>
      </div>

      <div class="post-list">
        <div v-for="i in 5" :key="i" class="post-item">
          <div class="post-header">
            <img :src="`https://i.pravatar.cc/150?u=${i}`" class="avatar" alt="头像" />
            <div class="info">
              <div class="name">用户名称</div>
              <div class="time">2小时前</div>
            </div>
          </div>
          <div class="post-body">
            <p>这里是帖子内容，大家觉得这张照片构图怎么样？求指点！</p>
            <div class="images">
              <img :src="`https://picsum.photos/seed/post${i}-1/200/200`" class="img" alt="图片1" />
              <img :src="`https://picsum.photos/seed/post${i}-2/200/200`" class="img" alt="图片2" />
            </div>
          </div>
          <div class="post-footer">
            <span><i class="icon">👍</i> 点赞 12</span>
            <span><i class="icon">💬</i> 评论 5</span>
            <span><i class="icon">↗</i> 分享</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community-page {
  display: flex;
  gap: 30px;
  padding-top: 40px;
  padding-bottom: 60px;
}

.sidebar {
  width: 280px;
  flex-shrink: 0;
  
  .menu-group {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    border: 1px solid var(--border-color);
    
    h3 { 
      margin-top: 0; 
      font-size: 18px; 
      border-bottom: 1px solid var(--border-color); 
      padding-bottom: 15px; 
      margin-bottom: 15px;
      color: var(--text-color);
    }
    
    ul li {
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 8px;
      color: var(--text-secondary);
      transition: all 0.3s;
      margin-bottom: 5px;

      &:hover { 
        background: rgba(255,255,255,0.05); 
        color: var(--text-color); 
      }
      
      &.active { 
        background: rgba(54, 207, 201, 0.15); 
        color: var(--primary-color); 
        font-weight: bold;
      }
    }
  }
}

.main-content {
  flex: 1;
}

.post-editor {
  background: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  
  textarea {
    width: 100%;
    height: 120px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(0,0,0,0.2);
    color: var(--text-color);
    padding: 15px;
    font-family: inherit;
    resize: vertical;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;

    button {
      padding: 8px 24px;
      background: var(--primary-color);
      color: #000;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      transition: opacity 0.3s;

      &:hover { opacity: 0.9; }
    }
  }
}

.post-list {
  .post-item {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 20px;
    border: 1px solid var(--border-color);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-2px);
    }

    .post-header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 15px;
      }

      .info {
        .name { 
          font-weight: bold; 
          color: var(--text-color);
          margin-bottom: 4px;
        }
        .time { 
          font-size: 12px; 
          color: var(--text-secondary); 
        }
      }
    }

    .post-body {
      p {
        color: var(--text-color);
        line-height: 1.6;
        margin-bottom: 15px;
      }

      .images {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;

        .img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          transition: opacity 0.3s;
          
          &:hover { opacity: 0.8; }
        }
      }
    }

    .post-footer {
      display: flex;
      gap: 30px;
      border-top: 1px solid rgba(255,255,255,0.05);
      padding-top: 15px;
      
      span {
        color: var(--text-secondary);
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: color 0.3s;

        &:hover { color: var(--primary-color); }
        
        .icon { font-style: normal; }
      }
    }
  }
}
</style>
