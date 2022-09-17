import React from 'react';

function Alert(props) {
    return (
        <div className='alert-background'>
            <div className='alert'>
                {props.message}
                <button type='button' onClick={()=>{props.setAlert.setAlert(null)}}>Understood</button>
            </div>
        </div>
    );
}

export default Alert;