import React ,{useEffect} from "react";
import {Switch,Route } from 'react-router-dom';
import AppAlb from './AppAlb';
import AppEn from './AppEn';
function App() {

  useEffect(() => {
    if(!localStorage.getItem('lan')){
      localStorage.setItem('lan',false)
    }
  })

  return (
   <Switch>
     <Route exact path="/" component={AppAlb} />
     <Route exact path="/en" component={AppEn} />
   </Switch>
  );
}

export default App;
