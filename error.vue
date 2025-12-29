<template>
  <div class="error-page">
    <div class="content fade-in-up">
      <h1>404</h1>
      <p>抱歉，您访问的页面似乎去流浪了...</p>
      <NuxtLink to="/" class="btn-home">返回首页</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
  color: var(--text-color);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(54, 207, 201, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }
  
  .content {
    text-align: center;
    z-index: 1;
  }
  
  h1 { 
    font-size: 120px; 
    margin: 0; 
    background: linear-gradient(to bottom, #fff, #333);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    letter-spacing: 10px;
  }
  
  p { 
    font-size: 20px; 
    color: var(--text-secondary); 
    margin: 20px 0 40px; 
  }
  
  .btn-home {
    padding: 12px 36px;
    background: var(--primary-color);
    color: #000;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    display: inline-block;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(54, 207, 201, 0.3);
    }
  }
}
</style>
