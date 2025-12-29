<template>
  <div class="login-page">
    <div class="login-box fade-in-up">
      <h2>欢迎来到影集社</h2>
      <div class="tabs">
        <span :class="{active: type === 'login'}" @click="type = 'login'">登录</span>
        <span :class="{active: type === 'register'}" @click="type = 'register'">注册</span>
      </div>
      
      <form class="form" @submit.prevent>
        <div class="form-item">
          <input type="text" placeholder="手机号/邮箱" />
        </div>
        <div class="form-item">
          <input type="password" placeholder="密码" />
        </div>
        <div class="form-item" v-if="type === 'register'">
          <input type="password" placeholder="确认密码" />
        </div>
        
        <button class="btn-submit">{{ type === 'login' ? '登录' : '注册' }}</button>
      </form>

      <div class="other-login">
        <p>第三方登录</p>
        <div class="icons">
          <span class="icon wechat">微信</span>
          <span class="icon alipay">支付宝</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const type = ref('login')
</script>

<style lang="scss" scoped>
.login-page {
  min-height: calc(100vh - 80px); /* Adjust for header height */
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
  position: relative;
  
  /* Background decoration */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(54, 207, 201, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
}

.login-box {
  width: 420px;
  background: var(--card-bg);
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  text-align: center;
  border: 1px solid var(--border-color);
  position: relative;
  z-index: 1;

  h2 { 
    margin-bottom: 40px; 
    color: var(--primary-color); 
    font-size: 28px;
  }
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--border-color);

  span {
    padding: 12px 40px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    color: var(--text-secondary);
    font-size: 16px;
    transition: all 0.3s;
    
    &:hover { color: var(--text-color); }
    
    &.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
      font-weight: bold;
    }
  }
}

.form-item {
  margin-bottom: 25px;
  
  input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.2);
    color: var(--text-color);
    font-size: 15px;
    transition: border-color 0.3s;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    
    &::placeholder {
      color: #666;
    }
  }
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: var(--primary-color);
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: opacity 0.3s;
  margin-top: 10px;
  
  &:hover { opacity: 0.9; }
}

.other-login {
  margin-top: 40px;
  
  p { 
    color: var(--text-secondary); 
    font-size: 14px; 
    margin-bottom: 20px;
    position: relative;
    
    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 30%;
      height: 1px;
      background: var(--border-color);
    }
    &::before { left: 0; }
    &::after { right: 0; }
  }
  
  .icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 12px;
      color: var(--text-secondary);
      transition: all 0.3s;
      
      &:hover {
        background: rgba(255,255,255,0.1);
        color: var(--text-color);
      }
    }
  }
}
</style>
