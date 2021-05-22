<template>
  <button
    class="uk-button uk-button-primary"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton4',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>