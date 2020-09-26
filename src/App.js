import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/Dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />} />
            <Route path='/Profile' render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>} />
            <Route path='/News' render={() => <News />} />
            <Route path='/Music' render={() => <Music />} />
            <Route path='/Settings' render={() => <Settings
             />} />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
