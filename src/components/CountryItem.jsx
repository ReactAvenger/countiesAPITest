import React from 'react';
import {setSingleCity} from '../redux/actions/actions';
import {useDispatch} from 'react-redux';


const CountryItem = ({country}) => {
const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setSingleCity(country))} className='country-list'>
      {country}
    </button>
  );
}

export default CountryItem;
