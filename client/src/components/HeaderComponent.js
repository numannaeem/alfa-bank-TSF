import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header (props) {
    return(
        <Jumbotron className='header'>
            <h1>Alfa Bank</h1>
            <img className='logo' src="https://i.pinimg.com/originals/4c/2a/04/4c2a04ca90ae64da82a34eb017db89c6.png" height="100px" alt="Logo"/>
            <h3>The bank you can trust!</h3>
        </Jumbotron>
    )
}

export default Header