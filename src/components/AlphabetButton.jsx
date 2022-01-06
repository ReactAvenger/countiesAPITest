import React from 'react';
import {setChosenList} from '../redux/actions/actions';
import {useSelector, useDispatch} from "react-redux";
import {increasePace} from '../redux/actions/actions';

const AlphabetButton = ({letter}) => {
  const countryNames = useSelector(state => state.countryNames);
  const pace = useSelector(state => state.pace);
  const dispatch = useDispatch();
  const buttonHandler = () => {
    let chosenCountries = []
    countryNames.map(country => {
      if (country[0] === letter){
        chosenCountries.push(country)
      }
    })
    dispatch(setChosenList(chosenCountries)) 
    dispatch(increasePace(pace)) 
} 
  return (
    <button onClick={buttonHandler} className='alphabet-button'>
      {letter}
   </button>
  );
}

export default AlphabetButton;
