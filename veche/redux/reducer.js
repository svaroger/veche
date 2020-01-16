import {combineReducers} from 'redux'

import {UPDATE_USER, UPDATE_CONTACT, UPDATE_TEG, UPDATE_ACTION} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

// in this reduser state is only state that is defined for this reduser
const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const tegReducer = (state = [], action) => {
  if (action.type === UPDATE_TEG) return [...state, action.payload]
  return state
}

const actionReducer = (state = [], action) => {
  if (action.type === UPDATE_ACTION) return [...state, action.payload]
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
	   case UPDATE_USER:
		   return merge(state, action.payload)
	   case UPDATE_CONTACT:
		   return merge(state, {prevContact: action.payload})
	   default:
		   return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
  tegs: tegReducer,
  actions: actionReducer,
})

export default reducer
