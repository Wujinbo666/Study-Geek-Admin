import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    host: "0.0.0.0",
    port: 8080,
    cors: true,
    // 代理跨域（mock 不需要配置跨域，直接能访问，这里只是个示例）
    proxy: {
      "/api": {
        // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
        target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
