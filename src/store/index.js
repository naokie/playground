import Store from './store'
import actions from './actions'
import mutations from './mutations'
import state from './state'

export default new Store({
  actions,
  mutations,
  state
})
