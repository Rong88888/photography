<template>
  <div class="business-page container fade-in-up">
    <div class="hero">
      <h1>商业合作对接</h1>
      <p>连接优质摄影师与商业需求，保障交易安全</p>
      <div class="actions">
        <button class="btn-primary">发布需求</button>
        <button class="btn-outline">我是摄影师，我要接单</button>
      </div>
    </div>

    <div class="demand-list">
      <h2>最新需求</h2>
      <div v-for="i in 5" :key="i" class="demand-item">
        <div class="info">
          <h3>婚礼跟拍需求 - 上海 {{ i }} <span class="tag">急</span></h3>
          <p class="budget">预算：<span class="price">¥3000-5000</span></p>
          <p class="detail">需要一位有经验的婚礼摄影师，全天跟拍，要求自带设备，有婚礼跟拍经验者优先...</p>
          <div class="meta">
            <span>📍 上海市</span>
            <span>📅 2025-05-01</span>
          </div>
        </div>
        <div class="action">
          <button>立即接单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.business-page {
  padding-top: 40px;
  padding-bottom: 60px;
}

.hero {
  background: linear-gradient(135deg, #1f1f1f 0%, #141414 100%);
  padding: 80px 60px;
  text-align: center;
  border-radius: 16px;
  margin-bottom: 40px;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }
  
  h1 { 
    font-size: 42px; 
    margin-bottom: 15px; 
    color: var(--text-color);
    letter-spacing: 1px;
  }
  p { 
    font-size: 18px; 
    color: var(--text-secondary); 
    margin-bottom: 40px; 
  }
  
  .actions {
    button {
      padding: 14px 36px;
      font-size: 16px;
      border-radius: 30px;
      cursor: pointer;
      margin: 0 15px;
      font-weight: bold;
      transition: all 0.3s;
      
      &.btn-primary { 
        background: var(--primary-color); 
        color: #000; 
        border: none; 
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(54, 207, 201, 0.3);
        }
      }
      
      &.btn-outline { 
        background: transparent; 
        border: 2px solid var(--primary-color); 
        color: var(--primary-color); 
        
        &:hover {
          background: rgba(54, 207, 201, 0.1);
        }
      }
    }
  }
}

.demand-list {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  
  h2 { 
    margin-top: 0; 
    border-bottom: 1px solid var(--border-color); 
    padding-bottom: 20px; 
    color: var(--text-color);
    font-size: 24px;
  }
  
  .demand-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: background 0.3s;
    
    &:last-child { border-bottom: none; }
    &:hover { background: rgba(255,255,255,0.02); }
    
    .info {
      flex: 1;
      padding-right: 40px;

      h3 { 
        margin: 0 0 10px; 
        color: var(--text-color);
        font-size: 18px;
        display: flex;
        align-items: center;
        
        .tag {
          font-size: 12px;
          background: #ff4d4f;
          color: #fff;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 10px;
          font-weight: normal;
        }
      }
      
      .budget {
        color: var(--text-secondary);
        margin-bottom: 8px;
        .price { 
          color: #ff4d4f; 
          font-weight: bold; 
          font-size: 18px;
        }
      }
      
      .detail { 
        color: var(--text-secondary); 
        font-size: 14px; 
        margin: 0 0 10px; 
        line-height: 1.6;
      }

      .meta {
        display: flex;
        gap: 20px;
        font-size: 13px;
        color: #666;
      }
    }
    
    .action button {
      padding: 10px 28px;
      background: var(--primary-color);
      color: #000;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      transition: opacity 0.3s;
      white-space: nowrap;
      
      &:hover { opacity: 0.9; }
    }
  }
}
</style>
