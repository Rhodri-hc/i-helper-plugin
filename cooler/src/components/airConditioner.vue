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

      </div>
      <!-- 空调底下的风 -->
      <div class="conditioner__contain-wind">

      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.conditioner{
  display: flex;
  color: #2c3e50;
  flex-direction: column;
  align-items: center;
  &__tip{
    color: #666;
  }
  &__contain{
    width: 504px;
    height: 214px;
    border-radius: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid rgb(224, 224, 224);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
}

</style>
