<template>
  <div>
    <slot name="img"></slot>
    <slot name="default"></slot>

    <slot name="games" :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Son",
  data() {
    return {
      games: ["红警", "超级玛丽", "魂斗罗", "原神"],
    };
  },
};
</script>

<style>
</style>