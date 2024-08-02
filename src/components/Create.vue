<template>
  <n-h1>
    <n-text type="primary">
      宾果游戏生成器
    </n-text>
  </n-h1>
  <br>
  <div class="flex justify-start">
    <div class="flex items-center mr-8">
      <label for="rows" class="mr-2">行數:</label>
      <n-input-number id="rows" v-model:value="rows" size="large" min="2" />
    </div>
    <div class="flex items-center mr-8">
      <label for="columns" class="mr-2">列數:</label>
      <n-input-number id="rows" v-model:value="columns" size="large" min="2" />
    </div>
    <button @click="saveAsImage" ref="saveButton">
      <n-button type="primary">
        保存图片
      </n-button>
    </button>
  </div>
  <n-divider />
  <main ref="bingoTable" class="pt-6 pb-6">
    <n-h1 prefix="bar">
      <n-text type="primary">
        <textarea maxlength="20" placeholder="标题" />
      </n-text>
    </n-h1>
    <n-p>
      <textarea maxlength="50" placeholder="说明" class="text-black" style="font-size: 0.875rem" />
    </n-p>
    <n-table :bordered="true" :single-line="false" striped>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="col in columns" :key="col">
            <textarea maxlength="20" placeholder="輸入內容" class="text-black" />
          </td>
        </tr>
      </tbody>
    </n-table>
    <br>
    <div>
      <p>
        宾果游戏生成器<br>Copyright© <a href="https://xiaozhi.moe" class="text-emerald-600">萌小志Mengxiaozhi</a>
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
      const rows = ref(3);
      const columns = ref(3);
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
  }

  textarea {
    background-color: rgba(240, 248, 255, 0);
    height: 100%;
    width: 100%;
    border: 0;
    resize: none;
    font-size: 23px;
    outline-color: #5DAC81;
  }

  td {
    height: 72px;
    width: 72px;
  }

  @media (max-width: 650px) {
    textarea {
      font-size: 13px;
    }
  }
</style>
