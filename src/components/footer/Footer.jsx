import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <hr />
                <div className='content' >
                    <div className='zuri_img'>
                        <img src="images/zuri.jpeg" alt="Zuri.Internship" />
                    </div>
                    <div className='grey_text'>
                        <p>HNG Internship 9 FrontEnd Task</p>
                    </div>
                    <div className='ingressive_img'>
                        <img src="images/i4good.png" alt="Ingressive 4 Good" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
