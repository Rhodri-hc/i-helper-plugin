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

    </div>
  </div>
</template>

<style scoped>
.conditioner{
  color: red;
}

</style>
