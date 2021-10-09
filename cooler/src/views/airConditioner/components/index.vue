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

        <!-- 开关 -->
        <div class="conditioner__contain-switch">
          <!-- 开关标志 -->
          <div v-if="!props.openConditioner" class="conditioner__contain-switch-logo">
             <svg
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#b3b3b3"
                data-testid="PowerSettingsNewIcon"
              >
                <path
                  d="M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19
                  12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17
                  5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03
                  9-9c0-2.74-1.23-5.18-3.17-6.83z"
                ></path>
              </svg>
          </div>
          <!-- 温度 -->
          <div v-else class="conditioner__contain-temperature">
              <span class="conditioner__contain-temperature--snow">❄️️</span>
              <span>{{ props.temperature }}</span>
              <span>°C</span>
          </div>
        </div>

        <!-- 空调底部 -->
        <div class="conditioner__contain-line"></div>
        <div
          class="
            conditioner__contain-sign
          "
          :class="{
            'conditioner__contain-sign--light': props.openConditioner,
            'conditioner__contain-sign--dark': !props.openConditioner
          }"
        ></div>
      </div>
      <!-- 空调底下的风 -->
      <div
         class="conditioner__wind"
         :class="{
           'conditioner__wind--transparent': !props.openConditioner
         }"
      >
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

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  openConditioner: {
    type: Boolean,
    default: false,
  },
  temperature: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="less">
@import './index.less';
</style>
