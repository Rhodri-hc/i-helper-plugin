<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="conditioner">
    <h1 class="conditioner__title">便携小空调</h1>
    <p class="conditioner__tip">Tip: 为你的夏日带去清凉！</p>

    <div class="conditioner__contain">
      <!-- 空调部分 -->
      <div class="conditioner__contain-device"> 
        <!-- 节能商标 -->
        <div class="conditioner__contain-icon">
          <img class="conditioner__contain-energy" src="@/assets/energy.png" />
        </div>

        <!-- 空调底部 -->
        <div class="conditioner__contain-line"></div>
        <div class="conditioner__contain-sign conditioner__contain-sign--line conditioner__contain-sign--dark"></div>

      </div>
      <!-- 空调底下的风 -->
      <div class="conditioner__wind">
        <!-- 左 -->
        <div class="conditioner__wind-left"></div>
        <!-- 中 -->
        <div class="conditioner__wind-center"></div>
        <!-- 右 -->
        <div class="conditioner__wind-right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
