import React from 'react';
import ReactDOM from 'react-dom/client';

import FirstAuthView from './Routes/FirstAuthView';
import Home from './Routes/Home';
import Error from './Routes/Error';
import Footer from './Components/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './Styles/mainStyles.css';
import './Styles/FirstAuthView.css';
import './Styles/HomeStyles.css';
import './Styles/Header.css';
import './Styles/HomeTest.css';
import './Styles/HomeDataStructures.css';
import './Styles/HomeAlgorithms.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

        <Routes>
          <Route path='/' exact element ={<FirstAuthView />} />
          <Route path='/home/user-:id' element ={<Home />} />
          <Route path='/error/:errorid' element ={<Error />} />
          <Route path='/home/user-:id/leaderboard' element ={<Home props={'leaderboard'} />} />
        </Routes>

    <Footer />

    </BrowserRouter>
);

