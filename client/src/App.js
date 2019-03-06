import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Search } from './functions/Search.js'
import { SavedPage } from './functions/SavedPage.js'



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/saved" component={
            SavedPage
          } />
          <Route component={Search} />
        </Switch>
      </div>
    </Router>
  );

}




export default App;
