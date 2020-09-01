import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
        <div className = 'app-wrapper'>
          <Header />
          <Navbar />
          <div className = 'app-wrapper-content'>
            <Route path = '/Dialogs' component = {Dialogs} />
            <Route path = '/Profile' component = {Profile} />
            <Route path = '/News' component = {News} />
            <Route path = '/Music' component = {Music} />
            <Route path = '/Settings' component = {Settings} />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
