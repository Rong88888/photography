<template>
  <div class="works-page container fade-in-up">
    <div class="filter-bar">
      <div class="filter-group">
        <span class="label">分类：</span>
        <a href="#" class="active">全部</a>
        <a href="#">人像</a>
        <a href="#">风光</a>
        <a href="#">静物</a>
        <a href="#">商业</a>
      </div>
      <div class="filter-group">
        <span class="label">排序：</span>
        <a href="#" class="active">最新</a>
        <a href="#">热门</a>
      </div>
    </div>

    <div class="works-list">
      <div v-for="i in 12" :key="i" class="work-item">
        <div class="cover-wrapper">
          <img :src="`https://picsum.photos/seed/${i + 10}/400/300`" class="cover" alt="作品封面" />
          <div class="overlay">
            <button class="btn-view">查看详情</button>
          </div>
        </div>
        <div class="info">
          <div class="title">摄影作品示例 {{ i }}</div>
          <div class="meta">
            <span class="author">
              <img :src="`https://i.pravatar.cc/150?u=${i}`" class="avatar-mini" />
              摄影师A
            </span>
            <span class="likes">
              <i class="icon-heart">♥</i> 102
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works-page {
  padding-top: 40px;
  padding-bottom: 60px;
}

.filter-bar {
  background: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .filter-group {
    display: flex;
    align-items: center;

    .label {
      font-weight: bold;
      margin-right: 15px;
      color: var(--text-color);
    }

    a {
      margin-right: 25px;
      color: var(--text-secondary);
      padding: 6px 16px;
      border-radius: 20px;
      transition: all 0.3s;
      
      &:hover {
        color: var(--text-color);
        background: rgba(255,255,255,0.05);
      }

      &.active {
        color: #000;
        background: var(--primary-color);
        font-weight: bold;
      }
    }
  }
}

.works-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  .work-item {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);

      .cover {
        transform: scale(1.05);
      }
      
      .overlay {
        opacity: 1;
      }
    }
    
    .cover-wrapper {
      position: relative;
      overflow: hidden;
      height: 240px;
    }

    .cover {
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
      background: rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s;

      .btn-view {
        padding: 10px 24px;
        background: rgba(255,255,255,0.2);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255,255,255,0.4);
        color: #fff;
        border-radius: 30px;
        cursor: pointer;
        font-weight: bold;
        transition: background 0.3s;

        &:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: #000;
        }
      }
    }

    .info {
      padding: 20px;
      
      .title {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 12px;
        color: var(--text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: var(--text-secondary);

        .author {
          display: flex;
          align-items: center;
          gap: 8px;
          
          .avatar-mini {
            width: 24px;
            height: 24px;
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
    }
  }
}
</style>
