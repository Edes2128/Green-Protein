import React ,{useEffect} from "react";
import {Switch,Route } from 'react-router-dom';
import AppAlb from './AppAlb';
function App() {

  useEffect(() => {
    if(localStorage.getItem('lan') === null){
      localStorage.setItem('lan', JSON.stringify(false))
    }
  },[])


  return (
   <Switch>     
    <Route exact path="/" component={AppAlb} /> 
   </Switch>
  );
}

export default App;
