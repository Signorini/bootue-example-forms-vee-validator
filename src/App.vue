<template>
  <div id="app" class="container">

    <div class="row">
      <div class="col-xs-12">
        <img src="dist/logo.png" height="50">

        <h2>Forms - Bootue + Vee validator</h2>

        <h3>Form</h3>

        <h3>Form - horizontal</h3>

        <h3>Form - inline</h3>
      </div>

    </div>

    <hr/>

    <div>
    </div>



    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Bootue</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Vee Validator</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  width: 900px;
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
