import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>

        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-component">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
            </div>

            <div className="input-msg">
                <input type="Ask Gemini" name="" id=""  placeholder='Ask Gemini'/>
                <img src={assets.send_icon} alt="Send" />
            </div>

        </div>
    </div>
  )
}

export default Main