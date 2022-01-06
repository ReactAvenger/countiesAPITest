import {SET_COUNTIES_NAME_LIST, SET_UNIQUE_LIST_LETTERS, SET_UNIQUE_LIST_COUNTRIES, INCREASE_PACE_QUANTITY, DECREASE_PACE_QUANTITY , SET_SINGLE_CITY} from '../types';

export function setOnlyCountryNameList (listArray) {
return {
  type: SET_COUNTIES_NAME_LIST,
  payload: listArray
}
}

export function setUniqueLettersList (uniqueList) {
  return {
    type: SET_UNIQUE_LIST_LETTERS,
    payload: uniqueList
  }
}

export function setChosenList (listOfCountries) {
  return {
    type: SET_UNIQUE_LIST_COUNTRIES,
    payload: listOfCountries
  }
}

export function increasePace (number) {
  let newState = number + 1
return {
   type: INCREASE_PACE_QUANTITY, 
   payload: newState
}
}
export function decreasePace (number) {
  if (number === 0){
    return {
      type: DECREASE_PACE_QUANTITY, 
      payload: 0
   }
  }
  let newState = number - 1
  return {
    type: DECREASE_PACE_QUANTITY, 
    payload: newState
  }
}

export function setSingleCity (city) {
  return {
    type: SET_SINGLE_CITY, 
    payload: city
  }
}