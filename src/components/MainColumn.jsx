import React from 'react'
import "../Style/mainColumn.css";
import { FaSearch, FaBell, FaFacebookMessenger, FaPlus } from "react-icons/fa";
import { profile } from '../assets/data';
import StoriesSection from './StoriesSection';
import FeedSection from './FeedSection';

function MainColumn() {
    return (
        <div className={`col main-column`}>
            <div className="container main-container">
                <div className="header row">
                    <div className={`col-5`}> <SearchBar></SearchBar></div>
                    <div className="col right-options">
                        <FaBell></FaBell>
                        <FaFacebookMessenger></FaFacebookMessenger>
                        <div className="btn">
                            create a Post
                         </div>
                    </div>
                </div>
                <StoriesSection></StoriesSection>
                <h3>Feed</h3>
                <FeedSection></FeedSection>
            </div>
        </div>
    )
}

export default MainColumn


function SearchBar() {

    return (
        <div className="search-bar">
            <span className="icon-container">
                <FaSearch></FaSearch>
            </span>
            <input style={{width:`40%`}} placeholder={`search`} type="search" />
        </div>
    )
}

function PersonalStoriesAvatar() {
    return (

        <div className="story-avatar col personal" >
            <div className="avatar-circle personal">
                <div className="img-container">
                    <img src={profile.url} alt="" className="story-img" />
                </div>
            </div>
            <button className="btn btn-primary add-personal">
                <FaPlus></FaPlus>
            </button>
        </div>

    )
}



function PeopleStoriesAvatar() {
    return (

        <div className="story-avatar col">
            <div className="avatar-circle">
                <div className="img-container">
                    <img src={profile.url} alt="" className="story-img" />
                </div>
            </div>
        </div>

    )
}