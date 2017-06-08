import Vue from 'vue'
import App from './App.vue'

import mixins_forms from './mixins/forms'

//import Bootue from './bootue/index';
import Bootue from 'bootue';
import VeeValidate from 'vee-validate'

Vue.use(Bootue);
Vue.use(VeeValidate)
Vue.mixin(mixins_forms)

new Vue({
  el: '#app',
  render: h => h(App)
})
