<template>
  <div class="user-center container fade-in-up">
    <div class="user-header">
      <div class="cover-wrapper">
        <img src="https://picsum.photos/seed/cover/1600/400" class="cover" alt="封面图" />
        <div class="overlay"></div>
      </div>
      <div class="profile">
        <img src="https://i.pravatar.cc/150?u=user" class="avatar" alt="头像" />
        <div class="info">
          <h1>我的昵称 <span class="tag">个人认证</span></h1>
          <p class="bio">这里是个人简介，热爱摄影，记录生活...</p>
          <div class="stats">
            <span><strong>128</strong> 关注</span>
            <span><strong>356</strong> 粉丝</span>
            <span><strong>1.2k</strong> 获赞</span>
          </div>
        </div>
        <div class="actions">
          <button class="btn-edit">编辑资料</button>
        </div>
      </div>
    </div>

    <div class="user-content">
      <div class="tabs">
        <a href="#" class="active">我的作品</a>
        <a href="#">我的收藏</a>
        <a href="#">我的课程</a>
      </div>
      
      <div class="content-grid">
        <div class="upload-card">
          <div class="icon">+</div>
          <p>上传新作品</p>
        </div>
        <div v-for="i in 5" :key="i" class="work-item">
          <div class="img-wrapper">
            <img :src="`https://picsum.photos/seed/${i + 100}/300/200`" class="img-placeholder" alt="作品" />
          </div>
          <div class="title">我的作品 {{ i }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-center {
  padding-top: 40px;
  padding-bottom: 60px;
}

.user-header {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  
  .cover-wrapper {
    position: relative;
    height: 240px;
    
    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    }
  }
  
  .profile {
    padding: 0 40px 30px;
    display: flex;
    align-items: flex-end;
    position: relative;
    margin-top: -60px;
    
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: var(--card-bg);
      border: 4px solid var(--card-bg);
      position: relative;
      z-index: 2;
      object-fit: cover;
    }
    
    .info {
      margin-left: 25px;
      flex: 1;
      padding-bottom: 5px;
      
      h1 { 
        margin: 0 0 8px; 
        font-size: 28px; 
        color: var(--text-color);
        display: flex;
        align-items: center;
      }
      
      .tag { 
        font-size: 12px; 
        background: rgba(54, 207, 201, 0.15); 
        color: var(--primary-color); 
        padding: 2px 8px; 
        border-radius: 4px; 
        margin-left: 10px;
        font-weight: normal;
      }
      
      .bio { 
        color: var(--text-secondary); 
        margin-bottom: 15px; 
      }
      
      .stats {
        span { 
          margin-right: 25px; 
          color: var(--text-secondary); 
          font-size: 15px;
          
          strong { 
            color: var(--text-color); 
            font-size: 18px;
            margin-right: 4px;
          } 
        }
      }
    }

    .actions {
      padding-bottom: 10px;
      
      .btn-edit {
        padding: 8px 24px;
        background: transparent;
        border: 1px solid var(--border-color);
        color: var(--text-color);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
      }
    }
  }
}

.user-content {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 16px;
  min-height: 500px;
  border: 1px solid var(--border-color);
}

.tabs {
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  
  a {
    padding-bottom: 15px;
    color: var(--text-secondary);
    position: relative;
    font-size: 16px;
    
    &.active {
      color: var(--primary-color);
      font-weight: bold;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary-color);
      }
    }
    
    &:hover { color: var(--text-color); }
  }
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  
  .upload-card {
    background: rgba(255,255,255,0.03);
    border: 2px dashed var(--border-color);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    height: 200px; /* Match image height roughly */
    
    &:hover {
      border-color: var(--primary-color);
      background: rgba(54, 207, 201, 0.05);
      
      .icon { color: var(--primary-color); transform: scale(1.1); }
      p { color: var(--primary-color); }
    }
    
    .icon {
      font-size: 40px;
      color: var(--text-secondary);
      margin-bottom: 10px;
      transition: transform 0.3s;
    }
    
    p { color: var(--text-secondary); transition: color 0.3s; }
  }
  
  .work-item {
    background: rgba(255,255,255,0.03);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s;
    
    &:hover { transform: translateY(-5px); }
    
    .img-wrapper {
      height: 160px;
      overflow: hidden;
      
      .img-placeholder {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
        
        &:hover { transform: scale(1.1); }
      }
    }
    
    .title {
      padding: 12px;
      font-size: 14px;
      color: var(--text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
