import React from 'react'
import { profile } from '../assets/data';
import { localImages } from '../assets/images/images'
import "../Style/sideColumn.css";
import SideLinks from './SideLinks';


function SideColumn() {
    return (
        <div className='side-column col-3'>
            <div className="side-header container">
                <img src={localImages.logo} alt="" />
                <span className="text-logo"></span>
            </div>
            <div className="container profile-summary">
                <img src={profile.url} alt="" className="profile" />
                <h4>{profile.name}</h4>
                <div className="text-dark">
                    @{profile.username}
                </div>
            </div>
            <div className="row stats">
                <div className="col ">
                    <div className="stats-label">Posts</div>
                    <div className="stats-value">{profile.posts}</div>
                </div>
                <div className="col divider"></div>
                <div className="col stats">
                    <div className="stats-label">Followers</div>
                    <div className="stats-value">{profile.followers}</div>
                </div>
                <div className="col divider"></div>
                <div className="col stats">
                    <div className="stats-label">Following</div>
                    <div className="stats-value">{profile.following}</div>
                </div>
            </div>
            <SideLinks></SideLinks>
        </div>
    )
}

export default SideColumn
