import {SET_UNIQUE_LIST_LETTERS, SET_UNIQUE_LIST_COUNTRIES, SET_SINGLE_CITY} from '../types';

const initState = {
  singleCountry : '',
  multiplyCities: [],
  chosenLatters: []

}

const chosenCountriesReducer = (state = initState, action) => {
switch (action.type){
  case SET_UNIQUE_LIST_LETTERS: 
    return state = {
      ...state,
      chosenLatters: action.payload
    }
  case SET_UNIQUE_LIST_COUNTRIES: 
  return state = {
    ...state,
    multiplyCities: action.payload
  }
  case SET_SINGLE_CITY: 
   return state = {
     ...state,
     singleCountry: action.payload
   }
  default: return state
}
}


export default chosenCountriesReducer