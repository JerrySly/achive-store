<template>
  <div class="base-drop-block">
    <div
      v-for="(item,index) in items"
      :key="index"
      class="base-drop-item"
      @click="item.action"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const items = ref(props.items)
    return {
      items
    }
  }
}
</script>
