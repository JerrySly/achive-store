<template>
  <input
    v-model="value"
    :style="style"
    :type="type"
    :placeholder="placeholder"
  >
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    model: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    width: {
      type: String,
      default: '100%'
    },

    height: {
      type: String,
      default: '30px'
    },
    outline: {
      type: String,
      default: 'none'
    },
    fontSize: {
      type: String,
      default: '20px'
    },
    borderRadius: {
      type: String,
      default: '5px'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const value = ref(props.model)
    const style = {
      width: props.width,
      height: props.height,
      outline: props.outline,
      'font-size': props.fontSize,
      'border-radius': props.borderRadius
    }
    return {
      style,
      value,
      type: props.type,
      placeholder: props.placeholder
    }
  }
}
</script>

<style scoped lang="scss">
input{
  border-color: $main-color;
  padding-left: 5px;
}
</style>
