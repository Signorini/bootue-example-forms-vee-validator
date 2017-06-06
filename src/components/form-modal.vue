<template>
  <div>
    <h3>Form inside modals</h3>

    <button class="btn btn-primary" @click="show1 = true">Show Normal</button>
    <button class="btn btn-primary" @click="show2 = true">Show Inline</button>
    <button class="btn btn-primary" @click="show3 = true">Show Horizontal</button>

    <modal v-model="show1" effect="fade">
      <div class="col-xs-12">
        <bs-form-normal></bs-form-normal>
      </div>
    </modal>

    <modal v-model="show2" effect="fade" large>
      <div class="col-xs-12">
        <bs-form-inline></bs-form-inline>
      </div>
    </modal>

    <modal v-model="show3" effect="fade" large>
      <div class="col-xs-12">
        <bs-form-horizontal></bs-form-horizontal>
      </div>
    </modal>


  </div>
</template>

<script>
import bsFormNormal from './form-normal.vue';
import bsFormInline from './form-inline.vue';
import bsFormHorizontal from './form-horizontal.vue';

export default {
  name: 'app',
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
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
  components: {
    bsFormNormal,
    bsFormInline,
    bsFormHorizontal
  }
}
</script>
