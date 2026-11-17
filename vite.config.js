import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 项目已经改成 React 单页应用：只有 index.html 一个入口，
  // "文字实验室"现在是 src/components/TextLabPage.jsx 里的组件，不再有 text-lab.html。
  // 所以这里不能再声明多入口，否则 build 会报 UNRESOLVED_ENTRY: text-lab.html。
});
