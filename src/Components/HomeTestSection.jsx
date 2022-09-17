import React from 'react';
import { useState } from 'react';

import TestForm from './TestForm.jsx';

function HomeTestSection() {
    const [testForm, showTestForm] = useState(null);

    return (
        <div className='home-test-section'>
        {!testForm ?
            <div>
                <h3>Here you can test your knowledge on everything you have read on this page!</h3>
                <h6>You will be given 10 questions about data structures and algorithms. There will be only one right answer. At the end you can compare your score to the 
                scores on the leaderboard.</h6>
                <button onClick={()=>{showTestForm(true)}}>Lets begin!</button>
            </div>
            :
            <TestForm />
        }
        <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeTestSection;