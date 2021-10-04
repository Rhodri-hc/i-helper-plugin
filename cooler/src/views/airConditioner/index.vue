<template>
  <div class="air">
    <!-- 空调部分 -->
    <Conditioner
        :openConditioner="state.openConditioner"
        :temperature="state.temperature"
    />

    <!-- 遥控部分 -->
    <div class="air__control">
      <!-- 屏显 -->
      <div class="air__control-screen">
        <span class="air__control-digital">26</span>
        <span class="air__control-degree">°C</span>
      </div>

      <!-- 按钮 -->
      <div class="air__control-buttons">
        <button
          class="button-common air__control-switch--close air__control-switch--open"
          @click="clickSwitch"
        >
          <!-- 开关 -->
          <svg
            class="air__control-buttons-svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="PowerSettingsNewIcon"
          >
            <path
              d="M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19
              12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17
              5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03
              9-9c0-2.74-1.23-5.18-3.17-6.83z"
            ></path>
          </svg>
        </button>

        <div>
          <button
            class="air__control-buttons-two button-common"
            tabindex="0"
            type="button"
            aria-label="add"
            @click="adjustTemperature('add')"
          >
            <!-- 向上 -->
            <svg
              class="air__control-buttons-svg"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="ExpandLessIcon"
            >
              <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
            </svg>
          </button>

          <button
            class="air__control-buttons-two button-common"
            tabindex="0"
            type="button"
            aria-label="reduce"
            @click="adjustTemperature('reduce')"
          >
            <!-- 向下 -->
            <svg
              class="air__control-buttons-svg"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="ExpandLessIcon"
            >
              <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Conditioner from './components/index.vue';

export default defineComponent({
  components: {
    Conditioner,
  },
  setup() {
    const state: {
      openConditioner: boolean,
      temperature: number,
    } = reactive({
      //  是否打开空调
      openConditioner: false,
      //  空调温度
      temperature: 0,
    });

    /**
    * @desc 点击开关
    * @author 张和潮
    * @date 2021年10月04日 21:17
    */
    function clickSwitch() {
      console.log('clickSwitch');
      state.openConditioner = !state.openConditioner;
    }

    /**
    * @desc 调节温度
    * @author 张和潮
    * @date 2021年10月04日 21:33
    */
    function adjustTemperature(type: string) {
      console.log(type);
      if (type === 'add') {
        state.temperature += state.temperature;
      } else {
        state.temperature -= state.temperature;
      }
    }

    return {
      state,
      clickSwitch,
      adjustTemperature,
    };
  },
});
</script>

<style scoped lang="less">
@import './index.less';
</style>
