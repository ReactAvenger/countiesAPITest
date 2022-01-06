import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setOnlyCountryNameList, setUniqueLettersList} from "../redux/actions/actions";
import CountryItem from '../components/CountryItem';
import Loader from '../components/Loader';
import SearchCity from './SearchCountry';
import AlphabetButton from '../components/AlphabetButton';
import {setSingleCity} from '../redux/actions/actions';
const Sidebar = () => {
const countryList = useSelector(state => state.countryList);
const countryNames = useSelector(state => state.countryNames);
const uniqueLetters = useSelector(state => state.chosenCounties.chosenLatters);
const uniqueList = useSelector(state => state.chosenCounties.multiplyCities);
const pace = useSelector(state => state.pace);
const dispatch = useDispatch();

useEffect(() => {
  let tempState = []
  if (countryList){
    countryList.map(country => {
     tempState.push(country.name) // remove common
    })
  }
  dispatch(setOnlyCountryNameList(tempState)) 
},[countryList])

useEffect(() => {
  let list = []
if (countryNames){
  countryNames.map(country => {
    list.push(country[0])
  })
  let uniqueAlphabet = [...new Set(list)]
  dispatch(setUniqueLettersList(uniqueAlphabet))
}
},[countryNames])

const alphabetRenderLogic = () =>
  uniqueLetters.map((letter, id) => {
   return(
    <AlphabetButton
    letter = {letter}
    key = {id}
    />
   )
  })

  const uniqueListRender = () => 
    uniqueList.map((country, id) => {
      return(
        <CountryItem
        country = {country}
        key = {id}
        />
      )
    })

  return (
    <>
    <div className="sidebar-wrapper">
      {pace === 0 &&  <div className='unique-letter-wrapper'>
      {uniqueLetters.length === 0 && <Loader/>}
      {uniqueLetters.length > 0 && alphabetRenderLogic()}
      <SearchCity/> 
        </div> }
      {pace === 1 &&  <div className='unique-city-wrapper'>
      {uniqueList.length === 0 && <Loader/>}
      {uniqueList.length > 0 && uniqueListRender()}  
      <SearchCity/> 
        </div> }
    </div>
       </>
  );
}

export default Sidebar;
