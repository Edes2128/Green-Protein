import React ,{useEffect} from "react";
import {Switch,Route } from 'react-router-dom';
import AppAlb from './AppAlb';
import AppEn from './AppEn';
function App() {

  useEffect(() => {
    if(localStorage.getItem('lan') === null){
      localStorage.setItem('lan', JSON.stringify(false))
    }
  },[JSON.parse(localStorage.getItem('lan'))])

  let chosen = JSON.parse(localStorage.getItem('chosen'))

  return (
   <Switch>     
    <Route exact path="/" component={AppAlb} /> 
    {/* <Route exact path="/en" component={AppEn} />  */}
   </Switch>
  );
}

export default App;
