# Hexo Blog

这是一个基于 Hexo 的博客项目。

## 项目简介

本项目使用 Hexo 静态网站生成器构建，包含了完整的博客功能和主题配置。

## 安装和使用

### 环境要求
- Node.js (推荐 14.0 或更高版本)
- npm 或 pnpm

### 安装依赖
```bash
pnpm install
```

### 本地开发
```bash
# 启动本地服务器
pnpm run server

# 生成静态文件
pnpm run build

# 清理生成的文件
pnpm run clean
```

### 部署
```bash
pnpm run deploy
```

## 项目结构

- `source/` - 源文件目录
  - `_posts/` - 博客文章
  - `about.md` - 关于页面
  - `contact.md` - 联系页面
- `themes/` - 主题目录
- `public/` - 生成的静态文件
- `_config.yml` - Hexo 配置文件
- `package.json` - 项目依赖配置

## 主题

当前使用的主题：alpha-dust

## 许可证

MIT License
