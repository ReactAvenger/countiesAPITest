import {SET_COUNTIES_NAME_LIST} from '../types'

const initState = []

const countryNamesReducer = (state = initState, action) => {
    switch (action.type){
       case SET_COUNTIES_NAME_LIST:{
        return state = action.payload
       }
      default: return state
    }
}

export default countryNamesReducer