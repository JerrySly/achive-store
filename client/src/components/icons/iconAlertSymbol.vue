<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 38 38"
  >
    <path
      :fill="color"
      d="M19,37.44A18.44,18.44,0,1,1,37.44,19,18.461,18.461,0,0,1,19,37.44ZM19,3.06A15.94,15.94,0,1,0,34.94,19,15.958,15.958,0,0,0,19,3.06Z"
    />
    <circle
      :fill="color"
      cx="19"
      cy="26.242"
      r="1.878"
    />
    <path
      :fill="color"
      d="M18.969,21.569h0a1.2,1.2,0,0,1-1.2-1.145l-.425-8.883A1.652,1.652,0,0,1,19,9.82h0a1.652,1.652,0,0,1,1.65,1.731l-.487,8.881A1.2,1.2,0,0,1,18.969,21.569Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    },
    color: {
      type: String,
      default: '#FFF'
    }
  }
}
</script>

<style></style>
