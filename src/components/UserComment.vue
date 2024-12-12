<template>
    <div>{{ commentModel.email }}</div>
</template>

<script>
export default {
  props: {
    commentModel: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>

</style>

