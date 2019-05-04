<template>
  <div class="spinner">
    <div class="rhombus"></div>
    <div class="rhombus"></div>
    <div class="rhombus"></div>
  </div>
</template>

<script>
export default {
  name: 'spinner',
}
</script>

<style scoped>
.spinner, .spinner * {
  box-sizing: border-box;
}

.spinner {
  width: calc(15px * 4);
  height: 15px;
  position: relative;
  margin: 0 auto;
}

.spinner .rhombus {
  height: 15px;
  width: 15px;
  background-color: #00695c;
  left: calc(15px * 4);
  position: absolute;
  margin: 0 auto;
  border-radius: 2px;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: spinner-animation 2500ms linear infinite;
}

.spinner .rhombus:nth-child(1) {
  animation-delay: calc(2500ms * 1 / -1.5);
}

.spinner .rhombus:nth-child(2) {
  animation-delay: calc(2500ms * 2 / -1.5);
}

.spinner .rhombus:nth-child(3) {
  animation-delay: calc(2500ms * 3 / -1.5);
}

@keyframes spinner-animation {
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(-233%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(-466%) rotate(45deg) scale(0);
  }
}
</style>
