import {STORE_ALL_COUNTRIES} from '../types';
const initState = []

 const allCountriesReducer = (state = initState, action) => {
  switch (action.type){

    case STORE_ALL_COUNTRIES : {
       if (state.length > 0) {
        return state
       }
      const sortArr = action.payload.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) // remove common
      return state = sortArr
    }
    default: return state
  }
}

export default allCountriesReducer;