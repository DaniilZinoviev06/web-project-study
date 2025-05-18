<template>
  <div class="app">
    <Navbar />
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/nav.vue'

export default {
  components: { Navbar }
}
</script>

<style>
</style>
