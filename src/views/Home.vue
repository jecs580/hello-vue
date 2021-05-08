<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <Lista/>
  </div>
</template>

<script>
// @ is an alias to /src
import Lista from '@/components/Lista.vue'

export default {
  name: 'Home',
  components: {
    Lista
  }
}
</script>
