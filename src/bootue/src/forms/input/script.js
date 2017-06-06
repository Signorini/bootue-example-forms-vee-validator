import '../Forms.vue'

export default {
    props: {
    clearButton: {type: Boolean, default: false},
    cols: {type: Number, default: null},
    disabled: {type: Boolean, default: false},
    help: {type: String, default: null},
    error: {type: String, default: null},
    icon: {type: Boolean, default: true},
    label: {type: String, default: null},
    state: {type: String, default: null},
    name: {type: String, default: null},
    placeholder: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    rows: {type: Number, default: 3},
    type: {type: String, default: 'text'},
    value: {default: null},
    formType: {type: String, default: null},
    horizontalWrapper: {type: String, default: 'col-sm-9'},
    horizontalLabelWrapper: {type: String, default: 'col-sm-3'}
  },
  data () {
    return {
      inState: this.state,
      constants: {
        SUCCESS: {name: 'success', icon: 'check'},
        WARNING: {name: 'warning', icon: 'exclamation'},
        ERROR: {name: 'error', icon: 'times'}
      }
    }
  },
  computed: {
    input () {return this.$refs.input},
    showError () {return this.error},
    showHelp () {return this.help && (!this.showError)},
    title () {return this.error || this.help || ''},
    showState () {return this.inState ? `has-${this.inState}` : ''},
    labelFeedback () {return this.$slots['label'] || this.label},
    showIcon () {return this.inState ? this.constants[this.inState.toUpperCase()].icon : null}
  },
  watch: {
    error (val) {
      this.inState = val ? this.constants.ERROR.name : this.constants.SUCCESS.name
    },
    value (val) {
      this.bindChanges(val)
    }
  },
  methods: {
    bindChanges (value, ev='input') {
      this.input.value = value
      this.$emit(ev, value)
    },
    attr (value) {
      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value
    },
    emit (e) {
      this.$emit(
        e.type,
        e.type === 'input' ? e.target.value : e
      )
    },
    bindInput (e) {
      this.bindChanges(
        e.type === 'input' ? e.target.value : e,
        e.type
      )
    },
    focus () {
      this.input.focus()
    },
    reset () {
      this.bindChanges('')
    },
    wrapperClass () {
      let wClass

      switch (this.formType) {
        case 'inline':
          wClass = 'relative inline'
        break;
        case 'horizontal':
          wClass = this.horizontalWrapper
        break;
        case 'group':
          wClass = 'input-group'
        break;
        default:
          wClass = 'relative'
      }

      return wClass
    },
    labelClass () {
      return this.formType == "horizontal" ? this.horizontalLabelWrapper : null;
    }
  },
  mounted () {
    const group = typeof this.$slots.before === 'object' || typeof this.$slots.after === 'object'
    this.formType = group ? 'group' : this.formType
  },
  beforeDestroy () {
    if (this._parent) {
      let index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
  }
}
