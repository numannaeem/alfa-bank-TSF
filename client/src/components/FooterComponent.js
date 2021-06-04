import React from 'react';

function Footer (props) {
    return(
        <footer className='footer'>
            <p>© All rights reserved</p>
            <p style={{fontSize:"1rem",fontWeight: "normal",marginTop:'10px'}}>Website by Numan Naeem</p>
            <div className='footer-icons'>
                <a href="https://www.instagram.com/num4n_/" target='blank'>
                    <span className='fab fa-instagram'></span>
                </a>{' '}
                <a href="https://www.linkedin.com/in/numan-naeem-7a950b207/" target='blank'>
                    <span className='fab fa-linkedin'></span>
                </a>{' '}
                <a href='https://www.github.com/numannaeem' target='blank'>
                    <span className='fab fa-github'></span>
                </a>{' '}
            </div>
        </footer>
    )
}

export default Footer