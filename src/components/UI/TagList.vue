<template>
  <div class="tag-list">
    <div
      class="tag-item"
      v-for="item in items"
      :key="item.title"
      @click="$emit('onItemClick', item )"
      :class=[{isActive:item.isActive},{isPreview:isPreview}]
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.tag-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;

  &.isActive {
    background: #444ce0;
    color: #fff;
  }

  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
