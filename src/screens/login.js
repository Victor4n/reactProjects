import React from 'react';
import { loginEndpoint } from '../spotify';
import './login.css';

export default function Login() {
  return (
    <div className='login-page'>
        <img src='https://s3.amazonaws.com/media-p.slid.es/uploads/765515/images/4186290/Spotify_Logo_RGB_Black.png' alt='logo-spotify' className='logo'/>
        <a href={loginEndpoint}>
            <div className='login-btn'>LOG IN</div>
        </a>
    </div>
  );
}

