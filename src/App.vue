<template>
  <transition name="fade" mode="out-in" appear>
  <keep-alive>
    <app-template></app-template>
  </keep-alive>
  </transition>
</template>

<script>
  import Template from './components/layout/Template'
  export default {
    name: 'app',
    components: {
      'app-template': Template
    }
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s !important;
}
.fade-enter, .fade-leave-to {
    opacity: 0 !important;
}
#login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.modal {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
}
</style>

