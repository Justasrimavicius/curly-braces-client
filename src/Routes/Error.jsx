import React from 'react';

import { Button } from '@mui/material';

function Error() {


    return (
        <div className='error-background'>
            {window.location.href.slice(1)==1 ? 
            <div className='error'>
                Password is incorrect
                <Button fullWidth onClick={()=>{window.location = ('http://localhost:3000')}}>Go back</Button>
            </div> : 
            <div className='error'>
                Username does not exist
                <Button fullWidth onClick={()=>{window.location = ('http://localhost:3000')}}>Go back</Button>
            </div>
            }
        </div>
    );
}

export default Error;