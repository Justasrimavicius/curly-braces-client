import React from 'react';

import { Button } from '@mui/material';
import { useEffect } from 'react';

function Header(props) {
    useEffect(()=>{

        console.log(props.homeView.homeView)
    },[props.homeView.homeView])
    return (
        <header>
            <span>Curly Braces</span>
            <div className='header-nav'>
                <Button className='header-nav-button' style={{fontWeight:'bold'}} onClick={()=>{props.homeView.setHomeContent('dataStructures')}}>Data structures</Button>
                <Button className='header-nav-button' style={{fontWeight:'bold'}} onClick={()=>{props.homeView.setHomeContent('algorithms')}}>Algorithms</Button>
                <Button className='header-nav-button' style={{fontWeight:'bold'}} onClick={()=>{props.homeView.setHomeContent('test')}}>Test your knowledge</Button>
            </div>
            <div className='header-user-info'>
                <Button onClick={()=>{window.location.href='http://localhost:3000'}}>Log out</Button>
            </div>
        </header>
    );
}

export default Header;