<template ref="scrollContainer" class="scroll-container">
  <div class="flex justify-between">
    <n-image width="257" src="site_logo.png" alt="Website_Logo" />
    <n-button strong secondary size="large" class="mt-3 p-6">
      <a href="https://xiaozhi.moe">回到主网站</a>
    </n-button>
  </div>
  <br>
  <div class="flex justify-between flex-col lg:flex-row gap-4 warp">
    <div v-if="isWideScreen === true" style="width: 570px;">
      <n-h1 class="mt-0">
        <n-text type="primary" class="text-MyColor-Main">
          宾果游戏生成器 by萌小志Mengxiaozhi
        </n-text>
      </n-h1>
      <n-blockquote>
        标题最高支持25字元，说明最高支持45字元，每个栏位最高支持18个字元，栏位无上限（如果你的电脑扛得住的话），下限为2*2，双击表格栏位开始编辑。<br>
        虽然本工具有兼容手机，但是你有在手机上用过Excel吗，所以还是建议用电脑使用，表格的UI/UX有什么方式可以优化还需思考。<br>
        本项目开源：<a href="https://github.com/mengxiaozhi/Bingo" class="text-MyColor-Main">GitHub</a>
      </n-blockquote>
      <br>
      <div class="flex flex-wrap">
        <div class="flex justify-start mb-3">
          <div class="flex items-center mr-8">
            <label for="rows" class="mr-2">行:</label>
            <n-input-number id="rows" v-model:value="rows" size="large" min="2" />
          </div>
          <div class="flex items-center mr-8">
            <label for="columns" class="mr-2">列:</label>
            <n-input-number id="rows" v-model:value="columns" size="large" min="2" />
          </div>
        </div>
        <div class="mb-3">
          <n-button @click="saveAsImage" ref="saveButton" type="primary" class="bg-MyColor-Main" size="large">
            <n-icon size="23">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </svg>
            </n-icon>
            生成图片
          </n-button>
          <n-button @click="exportAsCSV" ref="saveButton" type="primary" ghost class="text-MyColor-Main ml-3"
            size="large">
            <n-icon size="23">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 9l3 3l-3 3"></path>
                  <path d="M13 15h3"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                </g>
              </svg>
            </n-icon>
            导出CSV
          </n-button>
        </div>
      </div>
    </div>
    <div v-else>
      <n-h1 class="mt-0">
        <n-text type="primary" class="text-MyColor-Main">
          宾果游戏生成器 by萌小志Mengxiaozhi
        </n-text>
      </n-h1>
      <n-blockquote>
        标题最高支持25字元，说明最高支持45字元，每个栏位最高支持18个字元，栏位无上限（如果你的电脑扛得住的话），下限为2*2，双击表格栏位开始编辑。<br>
        虽然本工具有兼容手机，但是你有在手机上用过Excel吗，所以还是建议用电脑使用，表格的UI/UX有什么方式可以优化还需思考。<br>
        本项目开源：<a href="https://github.com/mengxiaozhi/Bingo" class="text-MyColor-Main">GitHub</a>
      </n-blockquote>
      <br>
      <div class="flex flex-wrap">
        <div class="flex justify-start mb-3">
          <div class="flex items-center mr-8">
            <label for="rows" class="mr-2">行:</label>
            <n-input-number id="rows" v-model:value="rows" size="large" min="2" />
          </div>
          <div class="flex items-center mr-8">
            <label for="columns" class="mr-2">列:</label>
            <n-input-number id="rows" v-model:value="columns" size="large" min="2" />
          </div>
        </div>
        <div class="mb-3">
          <n-button @click="saveAsImage" ref="saveButton" type="primary" class="bg-MyColor-Main" size="large">
            <n-icon size="23">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </svg>
            </n-icon>
            生成图片
          </n-button>
          <n-button @click="exportAsCSV" ref="saveButton" type="primary" ghost class="text-MyColor-Main ml-3"
            size="large">
            <n-icon size="23">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 9l3 3l-3 3"></path>
                  <path d="M13 15h3"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                </g>
              </svg>
            </n-icon>
            导出CSV
          </n-button>
        </div>
      </div>
    </div>
    <div v-if="isWideScreen === true" class="px-8">
      <n-divider vertical style="height:100%" class="py-6" />
    </div>
    <div v-else class="py-3">
      <n-divider />
    </div>
    <div v-if="isWideScreen === true" style="width: 760px;">
      <main ref="bingoTable" class="pt-6 pb-6">
        <n-h1 prefix="bar">
          <n-text type="primary">
            <input v-model="gameName" class="text-MyColor-Main" maxlength="25" placeholder="输入标题"
              style="font-size: 25px" />
          </n-text>
        </n-h1>
        <n-p class="pl-3">
          <textarea v-model="content" maxlength="45" placeholder="輸入说明" class="text-black"
            style="font-size: 17px"></textarea>
        </n-p>
        <n-table :bordered="true" :single-line="false" striped>
          <tbody id="table">
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td v-for="(col, colIndex) in columns" :key="colIndex" style="padding:0">
                <template v-if="editMode[rowIndex][colIndex]">
                  <textarea v-model="tableData[rowIndex][colIndex]" maxlength="18" class="text-black text-center"
                    type="text" @blur="toggleEditMode(rowIndex, colIndex)" />
                </template>
                <template v-else>
                  <p class="text-black text-center table_p" @click="toggleEditMode(rowIndex, colIndex)">{{
                    tableData[rowIndex][colIndex] || '' }}</p>
                </template>
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
    </div>
    <div v-else>
      <main ref="bingoTable" class="pt-6 pb-6">
        <n-h1 prefix="bar">
          <n-text type="primary">
            <input v-model="gameName" class="text-MyColor-Main" maxlength="25" placeholder="输入标题"
              style="font-size: 25px" />
          </n-text>
        </n-h1>
        <n-p class="pl-3">
          <textarea v-model="content" maxlength="45" placeholder="輸入说明" class="text-black"
            style="font-size: 17px"></textarea>
        </n-p>
        <n-table :bordered="true" :single-line="false" striped>
          <tbody id="table">
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td v-for="(col, colIndex) in columns" :key="colIndex" style="padding:0">
                <template v-if="editMode[rowIndex][colIndex]">
                  <textarea v-model="tableData[rowIndex][colIndex]" maxlength="18" class="text-black text-center"
                    type="text" @blur="toggleEditMode(rowIndex, colIndex)" />
                </template>
                <template v-else>
                  <p class="text-black text-center table_p" @click="toggleEditMode(rowIndex, colIndex)">{{
                    tableData[rowIndex][colIndex] || '' }}</p>
                </template>
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
    </div>
  </div>
</template>

<script>
  import { nextTick, ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import html2canvas from 'html2canvas';
  import { NButton, NInputNumber, NIcon, NDivider, NTable, NImage, NText, NBlockquote, NH1, NP } from 'naive-ui';

  export default {
    components: {
      NButton,
      NInputNumber,
      NIcon,
      NDivider,
      NTable,
      NImage,
      NText,
      NBlockquote,
      NH1,
      NP
    },
    setup() {
      const gameName = ref('');
      const content = ref('');
      const rows = ref(5);
      const columns = ref(5);
      const bingoTable = ref(null); // 定义 ref 对象
      const scrollContainer = ref(null); //平滑滑动
      const isWideScreen = ref(window.innerWidth > 1024); //判断屏幕大小,布林值
      const tableData = ref(Array.from({ length: rows.value }, () => Array(columns.value).fill('')));// 表格数据
      const editMode = ref(Array.from({ length: rows.value }, () => Array(columns.value).fill(false)));// 编辑模式状态

      // 监听 rows 和 columns 变化
      watch([rows, columns], ([newRows, newColumns]) => {
        tableData.value = Array.from({ length: newRows }, () => Array(newColumns).fill(''));
        editMode.value = Array.from({ length: newRows }, () => Array(newColumns).fill(false));
      });

      // 更新屏幕宽度状态
      const updateScreenWidth = () => {
        isWideScreen.value = window.innerWidth > 1024;
      };

      // 切换编辑模式
      const toggleEditMode = (rowIndex, colIndex) => {
        editMode.value[rowIndex][colIndex] = !editMode.value[rowIndex][colIndex];
      };

      onMounted(() => {
        //平滑滑动
        if (scrollContainer.value) {
          // 设置 Lenis 实例的容器
          const lenis = this.$lenis;
          lenis.setTarget(scrollContainer.value);
        }
        //屏幕大小
        window.addEventListener('resize', updateScreenWidth);
      });

      onBeforeUnmount(() => {
        // Lenis组件卸载时清理
        if (scrollContainer.value) {
          const lenis = this.$lenis;
          lenis.removeTarget(scrollContainer.value);
        }
        //屏幕大小
        window.removeEventListener('resize', updateScreenWidth);
      });

      //导出图片功能
      const saveAsImage = async () => {
        await nextTick(); // 确保 DOM 已经更新

        if (bingoTable.value) {
          // 克隆 bingoTable 元素
          const clonedTable = bingoTable.value.cloneNode(true);
          clonedTable.style.position = 'absolute'; // 确保不会影响页面布局
          clonedTable.style.top = '0';
          clonedTable.style.left = '0';

          // 计算新的宽度
          const cellSize = 72; // 每个单元格的宽度和高度
          const borderSize = 1.7; // 边框的宽度
          const extraWidth = 147.41; // 每增加一栏增加的宽度
          const newWidth = 760 + (columns.value - 5) * extraWidth; // 基础宽度 + 增加的宽度
          clonedTable.style.width = `${newWidth}px`; // 设置新的宽度

          document.body.appendChild(clonedTable);

          // 设置固定字体大小
          const style = document.createElement('style');
          style.textContent = `
        #table p {
          font-size: 23px !important;
        }
      `;
          clonedTable.appendChild(style);

          // 获取元素尺寸
          const { offsetWidth: width, offsetHeight: height } = bingoTable.value;

          // 生成图片
          html2canvas(clonedTable, {
            useCORS: true, // 启用跨域
            scale: 1, // 不放大画布，使用实际尺寸
            width: newWidth, // 设置画布宽度
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

      // 导出CSV功能
      const exportAsCSV = () => {
        if (bingoTable.value) {
          const table = bingoTable.value.querySelector('tbody');
          let csvContent = '';

          table.querySelectorAll('tr').forEach(row => {
            const rowData = Array.from(row.querySelectorAll('td')).map(cell =>
              `"${cell.querySelector('p').textContent.replace(/"/g, '""')}"`
            ).join(',');
            csvContent += rowData + '\r\n';
          });

          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const link = document.createElement('a');
          if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'bingo-game.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        } else {
          console.error('找不到元素 bingoTable');
        }
      };

      return { gameName, content, rows, columns, saveAsImage, exportAsCSV, bingoTable, scrollContainer, isWideScreen, tableData, editMode, toggleEditMode };
    }
  };
</script>

<style scoped>
  /*input {
  height: 100%;
  width: 100%;
  border: 0;
  outline-color: #5DAC81;
}

textarea {
  background-color: rgba(240, 248, 255, 0);
  border: 0;
  resize: none;
  outline-color: #5DAC81;
  height: 100%;
  width: 100%;
}

#table textarea {
  background-color: rgba(240, 248, 255, 0);
  border: 0;
  resize: none;
  font-size: 1em;
  outline-color: #5DAC81;
  height: 50%;
  width: 100%;
}

#table textarea:focus {
  height: 100%;
  width: 100%;
}

#table input {
  background-color: rgba(240, 248, 255, 0);
  border: 0;
  resize: none;
  font-size: 17px;
  outline-color: #5DAC81;
  height: 100%;
  width: 100%;
}

td {
  height: 72px;
  width: 72px;
}

@media (max-width: 1024px) {
  #table textarea {
    font-size: 13px;
  }
  #table input {
    font-size: 13px;
  }
}

.n-table.n-table--bordered {
  border: 1.7px solid #000;
  border-radius: 3px;
}*/

  input,
  textarea {
    height: 100%;
    width: 100%;
    border: 0;
    outline-color: #5DAC81;
  }

  textarea {
    background-color: rgba(240, 248, 255, 0);
    resize: none;
  }

  #table textarea {
    font-size: 23px;
  }

  .table_p {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: 23px;
    text-align: center;
  }

  td {
    height: 147.41px;
    width: 147.41px;
  }

  @media (max-width: 1024px) {
    #table textarea {
      font-size: 17px;
    }

    .table_p {
      font-size: 17px;
    }
  }

  .n-table.n-table--bordered {
    border: 1.7px solid #000;
    border-radius: 3px;
  }
</style>