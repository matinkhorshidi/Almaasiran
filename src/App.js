import React from 'react';
import setting from './settingsicon.svg';
import instagram from './icon/instagram-sketched.svg';
import almaas from './icon/almas.png';
import pin from './icon/pin.svg';
import phone from './icon/phone.svg';

import './App.css';

function App() {
  return (
    <div className="App">

      <body className="App-header">
        <div className="Almaas-logo">
          <img src={almaas} alt="logo" />
        </div>
        <div className="Body-style">
          <p>
            ...بزودی
          </p>
          <p style={{ fontSize: 20 }}>
            گروه مشاورین املاک الماس ایران
        </p>
          <p style={{ fontSize: 20 }}>
            مجهزترین و بروزترین دپارتمان املاک در شمال ایران
        </p>

          <div className="divs">
            <img src={setting} className="App-logo" alt="logo" />
            <img src={setting} className="App-logo2" alt="logo" />
          </div>
        </div>
        <div className="Footer-style">
          <img src={instagram} className='Footer-logo'  alt="logo" style={{ marginLeft: '5vw', marginTop: '9vmin'}} />
          <a
            style={{ marginTop: '8.5vmin' }}
            className="Instagram-link"
            href="https://www.instagram.com/almaas_iran"
            target="_blank"
            rel="noopener noreferrer"
          >almaas_iran</a>

          <a
            href=""
            style={{ marginLeft: '20vw', marginTop: '8.5vmin' }}
            className="Instagram-link"
          >بابلسر نرسیده به دریاکنار</a>
          <img src={pin} alt="logo" className='Footer-logo' style={{ marginLeft: '0.2vw', marginTop: '9vmin' }} />

          <a
           href=""
            style={{ marginTop: '8.5vmin' , marginLeft: '17vw' }}
            className="Instagram-link"
          >09113133013</a>
          <img src={phone} alt="logo" className='Footer-logo' style={{ marginTop: '9vmin' }} />

        </div>

      </body>



    </div>
  );
}

export default App;
