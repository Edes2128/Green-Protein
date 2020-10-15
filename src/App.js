import React from "react";
import {Switch,Route } from 'react-router-dom';
import AppAlb from './AppAlb';
import AppEn from './AppEn';
function App() {

  return (
   <Switch>
     <Route exact path="/" component={AppAlb} />
     <Route exact path="/en" component={AppEn} />
   </Switch>
  );
}

export default App;
