import {combineReducers} from 'redux';
import allCountriesReducer from './allCountriesReducer';
import countryNamesReducer from './countryNamesReducer';
import chosenCountriesReducer from './chosenCountriesReducer';
import paceReducer from './paceReducer';

export const rootReducer = combineReducers({
  countryList : allCountriesReducer,
  countryNames: countryNamesReducer,
  chosenCounties: chosenCountriesReducer,
  pace: paceReducer
})