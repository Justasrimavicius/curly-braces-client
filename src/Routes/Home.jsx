import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Header from '../Components/Header';

// import MyContext from '../Contexts';

import HomeAlgorithmsSection from '../Components/HomeAlgorithmsSection';
import HomeDataStructuresSection from '../Components/HomeDataStructuresSection';
import HomeTestSection from '../Components/HomeTestSection';
import Leaderboard from '../Components/Leaderboard';
import HomeLandingSection from '../Components/HomeLandingSection';

function Home(props) {

    const [username, setUsername] = useState('');

    const [homeContent, setHomeContent] = useState('');

    useEffect(()=>{
        console.log(homeContent);
    },[homeContent])
    return (
        <React.Fragment>
            <Header homeView={{homeContent, setHomeContent}}/>
            <div className='home'>
                {props.props=='leaderboard' ?
                <Leaderboard />
                :
                    homeContent=='test' ? 
                    <HomeTestSection />
                    :
                        homeContent=='dataStructures' ?
                        <HomeDataStructuresSection />
                        :
                            homeContent=='algorithms' ?
                            <HomeAlgorithmsSection />
                            : <HomeLandingSection />
                }
            </div>
        </React.Fragment>

    );
}

export default Home;