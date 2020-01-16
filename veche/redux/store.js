
import {createStore} from 'redux'

import {addContact} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

store.dispatch(addContact({name: 'Genady Bird', phone: '89215555234'}))

console.log(store.getState())

export default store
