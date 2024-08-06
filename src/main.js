import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Lenis from 'lenis';

//缓动函数
function customEasing(x) {
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? Math.pow(2, 20 * x - 10) / 2
                : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

// 创建 Lenis 实例
const lenis = new Lenis({
    duration: 0.72, // 滚动平滑的持续时间
    easing: customEasing, // 缓动函数
    smooth: true // 平滑滚动
});

// 启动 Lenis 平滑滚动
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const app = createApp(App)

app.mount("#app");