<template>
  <div class="flex justify-between">
    <n-image width="257" src="site_logo.png" alt="Website_Logo" />
    <n-button strong secondary size="large" class="mt-3">
      <a href="https://xiaozhi.moe">回到主网站</a>
    </n-button>
  </div>
  <n-h1 class="mt-0">
    <n-text type="primary" class="text-MyColor-Main">
      宾果游戏生成器 for 萌小志Mengxiaozhi
    </n-text>
  </n-h1>
  <n-blockquote>
    标题最高支持50字元，说明最高支持85字元，每个栏位最高支持11个字元，栏位无上限（如果你的电脑扛得住的话），下限为2*2。<br>
    虽然本工具有兼容手机，但是你有在手机上用过Excel吗，所以还是建议用电脑使用，表格的UI/UX有什么方式可以优化还需思考。<br>
    本项目开源：<a href="https://github.com/mengxiaozhi/Bingo" class="text-MyColor-Main">GitHub</a>
  </n-blockquote>
  <br>
  <div class="flex justify-start">
    <div class="flex items-center mr-8">
      <label for="rows" class="mr-2">行:</label>
      <n-input-number id="rows" v-model:value="rows" size="large" min="2" />
    </div>
    <div class="flex items-center mr-8">
      <label for="columns" class="mr-2">列:</label>
      <n-input-number id="rows" v-model:value="columns" size="large" min="2" />
    </div>
    <button @click="saveAsImage" ref="saveButton">
      <n-button type="primary" class="bg-MyColor-Main">
        <n-icon size="27">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
          </svg>
        </n-icon>
        保存图片
      </n-button>
    </button>
  </div>
  <n-divider />
  <main ref="bingoTable" class="pt-6 pb-6">
    <n-h1 prefix="bar">
      <n-text type="primary">
        <input class="text-MyColor-Main" maxlength="50" placeholder="标题" style="font-size: 25px"></input>
      </n-text>
    </n-h1>
    <n-p>
      <textarea maxlength="85" placeholder="说明" class="text-black" style="font-size: 17px" />
    </n-p>
    <n-table :bordered="true" :single-line="false" striped>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="col in columns" :key="col">
            <textarea maxlength="11" placeholder="輸入內容" class="text-black text-center" />
          </td>
        </tr>
      </tbody>
    </n-table>
    <br>
    <div>
      <p>
        宾果游戏生成器<br>Copyright© <a href="https://xiaozhi.moe" class="text-MyColor-Main">萌小志Mengxiaozhi</a>
      </p>
    </div>
  </main>
</template>

<script>
  import { nextTick, ref } from 'vue';
  import html2canvas from 'html2canvas';

  export default {
    setup() {
      const gameName = ref('');
      const content = ref('');
      const rows = ref(5);
      const columns = ref(5);
      const bingoTable = ref(null); // 定义 ref 对象

      const saveAsImage = async () => {
        await nextTick(); // 确保 DOM 已经更新

        if (bingoTable.value) {
          // 克隆 bingoTable 元素
          const clonedTable = bingoTable.value.cloneNode(true);
          clonedTable.style.position = 'absolute'; // 确保不会影响页面布局
          clonedTable.style.top = '0';
          clonedTable.style.left = '0';
          clonedTable.style.width = '1500px'; // 确保宽度为固定值
          document.body.appendChild(clonedTable);

          // 设置固定字体大小
          const style = document.createElement('style');
          style.textContent = `
          textarea {
            font-size: 25px !important;
          }
        `;
          clonedTable.appendChild(style);

          // 获取元素尺寸
          const { offsetWidth: width, offsetHeight: height } = bingoTable.value;

          // 生成图片
          html2canvas(clonedTable, {
            useCORS: true, // 启用跨域
            scale: 1, // 不放大画布，使用实际尺寸
            width: 1500, // 设置画布宽度
            backgroundColor: '#ffffff' // 设置背景颜色为白色
          }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'bingo-game.png';
            link.click();

            // 移除临时克隆的元素
            document.body.removeChild(clonedTable);
          }).catch(error => {
            console.error('html2canvas 错误:', error);

            // 移除临时克隆的元素
            document.body.removeChild(clonedTable);
          });
        } else {
          console.error('找不到元素 bingoTable');
        }
      };

      return { gameName, content, rows, columns, saveAsImage, bingoTable };
    }
  };
</script>

<style scoped>
  input {
    height: 100%;
    width: 100%;
    border: 0;
    outline-color: #5DAC81;
  }

  textarea {
    background-color: rgba(240, 248, 255, 0);
    border: 0;
    resize: none;
    font-size: 25px;
    outline-color: #5DAC81;
    height: 50%;
    width: 100%;
  }

  td {
    height: 72px;
    width: 72px;
  }

  @media (max-width: 768px) {
    textarea {
      font-size: 13px;
    }
  }
</style>
