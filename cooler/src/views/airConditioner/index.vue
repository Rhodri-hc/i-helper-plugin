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
      <div class="conditioner__contain-wind">
        <!-- 左 -->
        <div></div>
        <!-- 中 -->
        <div></div>
        <!-- 右 -->
        <div></div>
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
    position: relative;
    &-device{
      height: 150px;
      border-radius: 10px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border: 1px solid rgb(224, 224, 224);
      box-shadow: #b3b3b3 0px 3px 3px -2px, 
                  #e0e0e0 0px 3px 4px 0px, 
                  #e0e0e0 0px 1px 8px 0px;
    }

    &-icon{
      position: absolute;
      top: 10px;
      left: 10px;
    }

    &-energy{
      width: 50px;
    }

    &-line{
      position: absolute;
      top: 130px;
      width: 100%;
      height: 1px;
      border-top: #e0e0e0 1px solid;
      border-bottom: #e0e0e0 1px solid;
    }

    &-sign{
      position: absolute;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      bottom: 10px;
      right: 15px;
      &--dark{
        background: #e0e0e0;
      }
      &--light{
        background: #38F709;
      }
    }
  }
}

</style>
