<template>
  <div class="layout-default">
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <NuxtLink to="/">影集社</NuxtLink>
        </div>
        <button class="nav-toggle" @click="showNav = !showNav" aria-label="展开菜单">
          <span :class="{ open: showNav }"></span>
        </button>
        <nav class="nav" :class="{ open: showNav }">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/works">作品</NuxtLink>
          <NuxtLink to="/community">社区</NuxtLink>
          <NuxtLink to="/tutorials">教程</NuxtLink>
          <NuxtLink to="/business">商业对接</NuxtLink>
          <div class="user-actions-mobile">
            <NuxtLink to="/login" class="btn-login">登录/注册</NuxtLink>
            <NuxtLink to="/user" class="btn-user">个人中心</NuxtLink>
          </div>
        </nav>
        <div class="user-actions desktop-only">
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

<script setup>
import { ref } from 'vue'
const showNav = ref(false)
</script>

<style lang="scss" scoped>
.header {
  background: var(--header-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex-wrap: wrap;
    gap: 16px;
  }

  .logo {
    font-size: 28px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
    min-width: 100px;
    a {
      background: linear-gradient(45deg, #36cfc9, #1890ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    position: relative;
    z-index: 120;
    cursor: pointer;
    span {
      display: block;
      width: 28px;
      height: 3px;
      background: #fff;
      border-radius: 2px;
      position: absolute;
      left: 6px;
      top: 18px;
      transition: all 0.3s;
    }
    &::before, &::after {
      content: '';
      display: block;
      width: 28px;
      height: 3px;
      background: #fff;
      border-radius: 2px;
      position: absolute;
      left: 6px;
      transition: all 0.3s;
    }
    &::before { top: 10px; }
    &::after { top: 26px; }
    & span.open {
      background: transparent;
    }
    & span.open ~ &::before {
      transform: translateY(8px) rotate(45deg);
    }
    & span.open ~ &::after {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  .nav {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    @media (max-width: 900px) {
      gap: 20px;
    }
    @media (max-width: 700px) {
      gap: 10px;
      font-size: 14px;
    }
    a {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
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
        color: var(--primary-color); 
        &::after {
          width: 100%;
        }
      }
    }
  }

  .user-actions {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
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

  .user-actions-mobile {
    display: none;
  }
  .desktop-only {
    display: flex;
  }
  @media (max-width: 900px) {
    .user-actions-mobile {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      padding: 10px 0 0 0;
      .btn-login, .btn-user {
        width: 100%;
                padding: 16px 32px;
        font-size: 18px; 
        border-radius: 0;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        background: none !important;
        color: #fff;
        text-align: left;
        font-weight: normal !important;
        color: #fff !important;
      }
      .btn-user {
        background: var(--primary-color);
        color: #000;
        font-weight: bold;
        border-radius: 0 0 10px 10px;
      }
    }
    .desktop-only {
      display: none;
    }
  }

  @media (max-width: 700px) {
    height: auto;
    padding: 10px 0;
    .header-content { 
      align-items: center;
      gap: 10px;
    }
    .logo {
      font-size: 22px;
    }
    .nav {
      width: 100%;
      justify-content: flex-start;
      a {
        font-size: 14px;
        padding: 4px 0;
      }
    }
    .user-actions {
      width: 100%;
      justify-content: flex-start;
      gap: 10px;
      .btn-login, .btn-user {
        padding: 6px 14px;
        font-size: 13px;
      }
    }
  }

  @media (max-width: 900px) {
    .nav-toggle {
      display: block;
    }
    .nav {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100vw;
      background: #000;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      padding: 0 0 20px 0;
      display: none;
      z-index: 110;
      a {
        width: 100%;
        padding: 16px 32px;
        font-size: 18px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      &.open {
        display: flex;
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
