<template>
  <div class="home-wrap">
    home
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    switchMenu(index) {
      this.currentIndex = index
    }
  }
}
</script>