import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

import './App.css';
import logo from './logo.svg';
import './assets/styles/global.css'

import Home from './components/home'
import Auth from './components/auth'
import Restaurants from './components/restaurants'

import RestaurantItem from './components/restaurants/restaurant_item'
import CheckBox from './components/restaurants/checkbox';
import FoodItem from './components/restaurants/food_item';
import RestaurantHeader from './components/restaurants/restaurant_header';
import Restaurant from './components/restaurant';
import Comment from './components/restaurants/comment';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Shabnam',
      'Airal'
    ].join(','),
  },
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/auth/:method" component={Auth} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route path="/test" component={Comment} />
          </div>
        </Router>
      </MuiThemeProvider>
  );
}

export default App;
