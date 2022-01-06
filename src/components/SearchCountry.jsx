import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import HiddenCountryItem from '../components/HiddenCountryItem';

const SearchCity = () => {
const [isSearchActive, setIsSearchActive] = useState(false); 
const [searchedCountry, setSearchedCountry] = useState('');
const countries = useSelector(state => state.countryNames)
const singleCity = useSelector(state => state.chosenCounties.singleCountry)
const displayHidden = {
  display: isSearchActive ? 'flex' : 'none'
} 


useEffect(() => {
  if (searchedCountry === '') {
    setIsSearchActive(false)
   } else{
    setIsSearchActive(true)
   }
},[searchedCountry])

useEffect(() => {
  setIsSearchActive(false)
  setSearchedCountry('')
},[singleCity])

const countryListRender = () => {
  const list = countries.filter(country => country.toLowerCase().includes(searchedCountry.toLowerCase()))
 let result =  list.map((country,id) => {
  return(
    <HiddenCountryItem
    country = {country}
    key = {id}
    />
  )
})
return result
}
 

  return (
    <div className="search">
    <h3>Type to search</h3>
       <input value={searchedCountry} onChange={e => setSearchedCountry(e.target.value)} placeholder="Country name"/>
      <div style={displayHidden} className="hidden-search">
        <ul className='hidden-ul'>
         {countryListRender()}
        </ul>
      </div>
    </div>
 
  );
}

export default SearchCity;
