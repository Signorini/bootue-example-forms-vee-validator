<template>
  <div class="row">
    <h3>Inline form</h3>

    <form class="form-inline">
      <div class="row">
        <div class="col-xs-12">
          <bs-input
          label="Username"
          v-model="model.name"
          v-validate.initial="'required'"
          name="name"
          :error="makeError('name')"
          inline
          ></bs-input>

          <bs-input
          type="email"
          label="Email"
          v-model="model.email"
          v-validate.initial="'required|email'"
          name="email"
          :error="makeError('email')"
          inline
          ></bs-input>

          <bs-input-file
          label="Send File"
          v-model="model.file"
          v-validate.initial="'required'"
          name="file"
          :error="makeError('file')"
          inline
          ></bs-input-file>

          <bs-select
          label="Choose your fruit"
          v-model="model.select"
          :options="fruits"
          multiple
          :limit="2"
          placeholder="Choose your fruit"
          clear-button
          v-validate.initial="'required'"
          name="fruits"
          :error="makeError('fruits')"
          inline
          ></bs-select>
        </div>

        <div class="col-xs-6">
          <hr/>
          <pre v-if="model.name">{{model.name}}</pre>
          <code>{{errors.first('name')}}</code>

          <pre v-if="model.email">{{model.email}}</pre>
          <code>{{errors.first('email')}}</code>
        </div>

        <div class="col-xs-6">
          <hr/>
          <pre v-if="model.name">{{model.file}}</pre>
          <code>{{errors.first('file')}}</code>

          <pre v-if="model.email">{{model.select}}</pre>
          <code>{{errors.first('fruits')}}</code>
        </div>
      </div>

      <div class="row">
        <hr/>
        <div class="col-xs-6">
          <h4>CheckBox</h4>
          <div class="row">
            <div class="col-xs-6">
              <bs-checkbox
              v-model="model.check.one"
              v-validate.initial="'required'"
              name="one"
              >One</bs-checkbox>

              <bs-checkbox
              v-model="model.check.two"
              type="primary">Two</bs-checkbox>
              <bs-checkbox
              v-model="model.check.three"
              type="info"
              >Three</bs-checkbox>
              <br/>
              <code>{{errors.first('one')}}</code>
            </div>
            <div class="col-xs-6">
              <bs-checkbox button v-model="model.check.four" type="primary">Four</bs-checkbox>
              <bs-checkbox button v-model="model.check.five" type="danger">Five</bs-checkbox>

              <h5>Groups</h5>
              <button-group v-model="model.check.group">
                <bs-checkbox true-value="left">Left</bs-checkbox>
                <bs-checkbox true-value="middle">Middle</bs-checkbox>
                <bs-checkbox true-value="right">Right</bs-checkbox>
              </button-group>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <br/>
          <pre>{{model.check}}</pre>
        </div>
      </div>

      <div class="row">
        <hr/>
        <div class="col-xs-6">
          <h4>Radio</h4>
          <div class="row">
            <div class="col-xs-6">
              <bs-radio v-model="model.radio.base" v-validate.initial="'required|in:1,2,3'" name="radio" selected-value="1">One</bs-radio>
              <bs-radio v-model="model.radio.base" selected-value="2" type="primary">Two</bs-radio>
              <bs-radio v-model="model.radio.base" selected-value="3" type="info">Three</bs-radio>
              <br/>
              <code>{{errors.first('radio')}}</code>
            </div>
            <div class="col-xs-6">
              <bs-radio button v-model="model.radio2" type="primary" selected-value="4">Four</bs-radio>
              <bs-radio button v-model="model.radio2" type="danger" selected-value="5">Five</bs-radio>

              <h5>Groups</h5>
              <button-group v-model="model.radio.group">
                <bs-radio selected-value="1" v-validate.initial="'required'" name="group">One</bs-radio>
                <bs-radio selected-value="2">Two</bs-radio>
                <bs-radio selected-value="3">Three</bs-radio>
              </button-group>
              <p>{{errors.first('group')}}</p>
              <code>{{errors.first('group')}}</code>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <br/>
          <pre>{{model.radio}}</pre>
          <br/>
          <pre>{{model.radio2}}</pre>
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
