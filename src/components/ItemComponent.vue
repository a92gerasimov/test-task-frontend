<template>
  <div class="item">
    {{ item.name }}
  </div>
</template>

<script>

export default {
  name: 'ItemComponent',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .item {
    width: 92px;
    height: 92px;
    border: 4px solid blue;
    margin: 4px;
    cursor: pointer;
  }
</style>