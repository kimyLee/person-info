# 指定构建的基础镜像，版本根据项目需要更换
FROM node:16-alpine AS builder

# 设置工作目录
WORKDIR /app

COPY . .

# 安装依赖并编译前端代码
RUN npm -g install pnpm --registry=https://registry.npmmirror.com
RUN pnpm install --registry=https://registry.npmmirror.com

# 构建 Nginx 镜像，版本根据项目需要更换
FROM nginx:1.21.3-alpine

# 复制编译后的前端代码到 Nginx 静态资源目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

