import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import legacy from '@vitejs/plugin-legacy' // <-- 第 1 处：移除此行

export default defineConfig({
  plugins: [
    react(),
    // legacy({ // <-- 第 2 处：移除 legacy 插件的相关代码
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  base: './',    
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    target: 'es2022', // <-- 保留我们上次添加的 target
    outDir: 'dist',
    sourcemap: false,
    minify: false,  
    rollupOptions: {
      treeshake: false,
    }
  }
});
