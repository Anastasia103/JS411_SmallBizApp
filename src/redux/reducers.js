import { combineReducers } from 'redux'

const business = (state = [], action) => {
    switch(action.type){
    case "ADD_BUSINESS": 
    return[ ...state, action.value]
    case "REMOVE_BUSINESS": 
    const newState = [ ...state]
    newState.splice(action.value, 1)
    return newState
    default: 
    return state
}
}

const loggedIn = (state ="", action) => {
switch(action.type){
    case "IS_LOGGED_IN": 
    const newState = action.value
    return newState
    default: 
    return state
}
}

const users = (state ="") => {return state}

export default combineReducers({ business, loggedIn, users})