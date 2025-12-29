# 影集社 (Photography Platform)

基于 Nuxt.js 3 开发的摄影分享与交流平台前端项目。

## 项目结构

- `pages/`: 页面路由
  - `index.vue`: 首页
  - `works/`: 作品展示与详情
  - `community/`: 社区交流
  - `tutorials/`: 摄影教程
  - `business/`: 商业对接
  - `user/`: 个人中心
  - `login.vue`: 登录/注册
- `layouts/`: 布局文件
- `stores/`: Pinia 状态管理
- `assets/`: 静态资源 (CSS/Images)

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm run dev
```

访问 http://localhost:3000 查看效果。

### 3. 构建生产环境

```bash
pnpm run build
```

## 技术栈

- **框架**: Nuxt.js 3
- **UI**: 自定义 SCSS 样式 (响应式设计)
- **状态管理**: Pinia
- **语言**: TypeScript

## 注意事项

- 当前为前端静态页面演示版本，数据均为 Mock 数据。
- 实际开发中需对接后端 API。
