<template>
  <section>
    <div class="warp">
      <Create />
    </div>
  </section>
</template>

<script>
  import { defineComponent } from "vue";
  import Create from './components/Create.vue';

  export default {
    components: {
      Create
    }
  }
</script>

<style>
section {
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  padding-top: 32px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1520px; /* 设置最大宽度 */
  margin: 0 auto; /* 确保 section 本身在视口中居中 */
}

.warp {
  width: 100%; /* 让 warp 占满父容器的宽度 */
  max-width: 100%; /* 让 warp 的宽度最多为 100% */
}

Create {
  width: 100%; /* 确保 Create 组件占满 warp 的宽度 */
  max-width: 100%; /* 确保 Create 组件的宽度最多为 100% */
}
</style>