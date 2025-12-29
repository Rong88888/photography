<template>
  <div class="layout-default">
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <NuxtLink to="/">影集社</NuxtLink>
        </div>
        <nav class="nav">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/works">作品</NuxtLink>
          <NuxtLink to="/community">社区</NuxtLink>
          <NuxtLink to="/tutorials">教程</NuxtLink>
          <NuxtLink to="/business">商业对接</NuxtLink>
        </nav>
        <div class="user-actions">
          <NuxtLink to="/login" class="btn-login">登录/注册</NuxtLink>
          <NuxtLink to="/user" class="btn-user">个人中心</NuxtLink>
        </div>
      </div>
    </header>
    
    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 影集社 - 摄影分享与交流平台</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: var(--header-bg);
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  border-bottom: 1px solid rgba(255,255,255,0.1);
  height: 80px; /* 增加高度 */
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    font-size: 28px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
    
    a {
      background: linear-gradient(45deg, #36cfc9, #1890ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .nav {
    display: flex;
    gap: 40px;
    
    a {
      font-size: 16px;
      font-weight: 500;
      color: var(--text-secondary);
      position: relative;
      padding: 5px 0;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s;
      }

      &:hover, &.router-link-active {
        color: #fff;
        &::after {
          width: 100%;
        }
      }
    }
  }

  .user-actions {
    display: flex;
    gap: 20px;

    .btn-login, .btn-user {
      padding: 8px 24px;
      border-radius: 20px;
      font-size: 14px;
      transition: all 0.3s;
    }

    .btn-login {
      border: 1px solid rgba(255,255,255,0.2);
      &:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
    }

    .btn-user {
      background: var(--primary-color);
      color: #000;
      font-weight: bold;
      &:hover {
        opacity: 0.9;
        transform: scale(1.05);
      }
    }
  }
}

.main {
  min-height: calc(100vh - 80px - 80px); 
}

.footer {
  background: #000;
  color: var(--text-secondary);
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid #222;
}
</style>
