import React from 'react';

function HomeLandingSection() {
    return (
        <div className='home-default-section'>
            <h1>Welcome to Curly Braces!</h1>
            <h4>The main reason for this personal project is learning data structures and algorithms. All of the
                 code snippets and explanations were written by me - no code was copied line by line(even though a lot of googling 
                 was needed to understand everything!).
            </h4>
            <h5>Take a look at the information displayed in each section by navigating the header nav.
            </h5>
            <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeLandingSection;