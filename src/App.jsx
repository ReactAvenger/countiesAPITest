import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {FETCH_ALL_COUNTIES} from './redux/types';
import {decreasePace} from './redux/actions/actions';
import CountryDetails from './components/CountryDetails';
import Sidebar from './components/SideBar'

function App() {
const dispatch = useDispatch();
useEffect(() => {
  dispatch({type: FETCH_ALL_COUNTIES})
},[])

useEffect(()=> {
  setInterval(() => dispatch({type: FETCH_ALL_COUNTIES}), 30000)
})

const pace = useSelector(state => state.pace);

const btnStyle = pace === 0 ? true : false
  return (
    <div className="app-wrapper">
    <button onClick={() => dispatch(decreasePace(pace))} disabled={btnStyle} className="back-button">Back</button> 
    <Sidebar/>
    <CountryDetails/>
    </div>
  );
}

export default App;
