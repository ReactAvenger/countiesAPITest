import {INCREASE_PACE_QUANTITY, DECREASE_PACE_QUANTITY} from '../types';

const initState = 0

const paceReducer = (state = initState, action) => {
 switch (action.type){
  case INCREASE_PACE_QUANTITY: 
    return state = action.payload
    case DECREASE_PACE_QUANTITY: 
        return state = action.payload  
  default: return state
 }
}

export default paceReducer