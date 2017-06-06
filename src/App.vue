<template>
  <div id="app" class="container">

    <div class="row">
        <bs-form-normal></bs-form-normal>
        <hr><hr>
        <bs-form-inline></bs-form-inline>
        <hr><hr>
        <bs-form-horizontal></bs-form-horizontal>
        <hr><hr>
        <bs-form-modal></bs-form-modal>
    </div>

    <hr><hr>
    <hr><hr>
  </div>
</template>

<script>
import bsFormNormal from './components/form-normal.vue';
import bsFormInline from './components/form-inline.vue';
import bsFormHorizontal from './components/form-horizontal.vue';
import bsFormModal from './components/form-modal.vue';

export default {
  name: 'app',
  components: {
    bsFormNormal,
    bsFormInline,
    bsFormHorizontal,
    bsFormModal
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  max-width: 900px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
