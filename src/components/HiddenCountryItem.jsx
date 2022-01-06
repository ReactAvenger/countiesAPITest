import React from 'react';
import {setSingleCity} from '../redux/actions/actions';
import {useDispatch} from "react-redux";

const HiddenCountryItem = ({country, id}) => {
 const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(setSingleCity(country))} key = {id}>
      {country}
    </li>
  );
}

export default HiddenCountryItem;
