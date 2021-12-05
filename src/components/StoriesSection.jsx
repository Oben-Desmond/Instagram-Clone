import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSearch, FaBell, FaFacebookMessenger, FaPlus } from "react-icons/fa";
import { profile } from '../assets/data';



function StoriesSection() {
    const [stories, setstories] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        getStories()
    }, [])

    async function getStories() {
        setloading(true)
        await axios.get(`https://sheltered-tundra-56708.herokuapp.com/instagram/stories`)
            .then(res => {
                setstories(res.data);
            }).catch(console.log)
        setloading(false)

    }
    return (

        <div className="stories horizontal-scrollable row">
            <PersonalStoriesAvatar></PersonalStoriesAvatar>
            {loading && <div className="col-9">
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span style={{marginLeft:`20px`}}> Loading...</span>
            </div>}
            {
                stories.map((story) => {
                    return <PeopleStoriesAvatar story={story}></PeopleStoriesAvatar>
                })
            }
        </div>

    )
}

export default StoriesSection

function PersonalStoriesAvatar() {
    return (

        <div className="story-avatar col personal" >
            <div className="avatar-circle personal">
                <div className="img-container">
                    <img src={profile.url} alt="" className="story-img" />
                </div>
                <button className="btn btn-primary add-personal">
                    <FaPlus></FaPlus>
                </button>
            </div>
        </div>

    )
}



function PeopleStoriesAvatar({ story }) {
    return (

        <div className="story-avatar col">
            <div className="avatar-circle">
                <div className="img-container">
                    <img src={story?.image} alt="" className="story-img" />
                </div>
            </div>
            <div className={`text-center text-dark`}>{story?.name}</div>
        </div>

    )
}