import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User" />

        </div>

        <div className="main-container">

            <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How can I help you today?</p>

            </div>

           

            <div className="main-bottom">
                <div className="search-bar">
                    <input type="text" placeholder="Enter your prompt here!!!" />
                    <div className='icons'>
                         <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon}alt="" />
                    </div>
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Main