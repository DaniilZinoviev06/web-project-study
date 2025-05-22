<template>
  <div class="app">
    <Navbar />
    <main class="content">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/nav.vue'
import Footer from '@/components/footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
</style>
