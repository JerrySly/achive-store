<template>
  <button
    :style="computedStyle"
    :type="type"
    class="cancel-btn"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '50px'
    },
    fontSize: {
      type: Number,
      default: 18
    },
    borderRadius: {
      type: String,
      default: '5px'
    },
    type: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup (props) {
    const computedStyle = {
      color: props.color,
      width: props.width,
      height: props.height,
      fontSize: props.fontSize + 'px',
      borderRadius: props.borderRadius
    }
    return {
      type: props.type,
      computedStyle
    }
  }
}
</script>
