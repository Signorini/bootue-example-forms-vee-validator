import './_core/Core.vue'
import './utilities/Utilities.vue'


import alert from './alert/Alert.vue'
import './close/Close.vue'
import bsLabel from './label/Label.vue'
import './grid/Grid.vue'
import modal from './modal/Modal.vue'
import tooltip from './tooltip/Tooltip.vue'
import typeahead from './typeahead/Typeahead.vue'
import './typography/Type.vue'
import './typography/font-awesome/FontAwesome.vue'

import SpreadButtons from './buttons/'
import SpreadForms from './forms/'


let components = {
  alert,
  bsLabel,
  modal,
  tooltip,
  typeahead
}

components = Object.assign(components, SpreadButtons, SpreadForms)

export default components
