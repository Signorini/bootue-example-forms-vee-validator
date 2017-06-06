<template>
  <div>
    <h3>Horizontal Form</h3>

    <form class="form-horizontal">
      <div class="row">
        <div class="col-xs-6">
          <bs-input
          label="Username"
          v-model="model.name"
          v-validate.initial="'required'"
          name="name"
          :error="makeError('name')"
          form-type="horizontal"
          ></bs-input>
        </div>
        <div class="col-xs-6">
          <pre v-if="model.name">{{model.name}}</pre>
          <code>{{errors.first('name')}}</code>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-6">
          <bs-input
          type="email"
          label="Email"
          v-model="model.email"
          v-validate.initial="'required|email'"
          name="email"
          :error="makeError('email')"
          form-type="horizontal"
          ></bs-input>
        </div>
        <div class="col-xs-6">
          <pre v-if="model.email">{{model.email}}</pre>
          <code>{{errors.first('email')}}</code>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-6">
          <bs-input-file
          label="Avatar"
          v-model="model.file"
          v-validate.initial="'required'"
          name="file"
          :error="makeError('file')"
          formType="horizontal"
          ></bs-input-file>
        </div>
        <div class="col-xs-6">
          <pre><span v-for="f in model.file">{{f.name}}</span></pre>
          <code>{{errors.first('file')}}</code>
        </div>
      </div>


      <div class="row">
        <div class="col-xs-6">
          <bs-select
          label="Fruit"
          v-model="model.select"
          :options="fruits"
          placeholder="Choose your fruit"
          clear-button
          v-validate.initial="'required'"
          name="fruits"
          :error="makeError('fruits')"
          formType="horizontal"
          ></bs-select>
        </div>
        <div class="col-xs-6">
          <pre v-if="model.select">{{model.select}}</pre>
          <code>{{errors.first('fruits')}}</code>
        </div>
      </div>


    </form>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      model: {
        name: null,
        email: null,
        password: null,
        file: null,
        check: {one: false, two: false, three: false, four: false, five: false, group: []},
        radio: {base:null, group:null},
        radio2: {},
        select: null,
        select2: null
      },
      fruits: ['apple', 'banana', 'watermellon', 'orange', 'mellon', 'pineapple', 'coconut', 'alien mellon', 'green apple']
    }
  },
  filters: {
    json: (value) => { return JSON.stringify(value, null, 2) }
  }
}
</script>
