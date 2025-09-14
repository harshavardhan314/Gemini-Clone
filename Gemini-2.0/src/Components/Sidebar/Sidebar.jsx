import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => setExpand(prev => !prev);

    return (
        <div className='sidebar'>
            <div className="top">
                <div className="menu">
                    <img src={assets.menu_icon} alt="Menu" onClick={toggleExpand} style={{ cursor: 'pointer',alignItems:'center' }} />
                </div>
                
                <div className="New-chat" onClick={toggleExpand}>
                    <img src={assets.plus_icon} alt="Plus" />
                    {expand && <p>New chat</p>}
                </div>

                {expand && (
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="Message" />
                            <p>what is react...</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    {expand && <p>Help</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History" />
                    {expand && <p>History</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings" />
                    {expand && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
