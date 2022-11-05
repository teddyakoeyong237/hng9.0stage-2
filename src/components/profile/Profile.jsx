import React from 'react';
import './profile.css';
import { BsThreeDots } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';

function Profile() {
    return (
        <div className='profile'>
            <div className='container'>
                <div className="icons">
                    <RiShareForwardLine className='icon share_icon' />
                    <BsThreeDots className='icon threedot_icon'/>
                </div>    
                <div className='profile_section'>
                    <img id='profile__img' src="images/teddyakoeyong.jpg" alt="Profile Img" />
                </div>
                <div className='profile_name'>
                    <h2 id='twitter'>teddyakoeyong</h2>
                    <h2 id='slack'>teddyakoeyong</h2>
                </div>
            </div>  
        </div>
    );
}

export default Profile;
