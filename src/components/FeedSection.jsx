
import React, { useEffect, useState } from 'react'
import { profile } from '../assets/data'
import "../Style/Feed.css";
import { FaEllipsisH, FaHeart, FaComment, FaPaperPlane, FaBookmark } from "react-icons/fa";
import axios from 'axios';

function FeedSection() {
    const [feed, setfeed] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        getFeed()

    }, [])

    async function getFeed(){
        setloading(true)
        await axios.get(`https://sheltered-tundra-56708.herokuapp.com/instagram/feed`)
            .then(res => {
                console.log(res.data)
                setfeed(res.data)
            }).catch(res => {

            })
        setloading(false)
    }
    return (

        <div className="feed row">
            {loading && <div className="col-9">
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span style={{ marginLeft: `20px` }}> Loading...</span>
            </div>}
            <FeedColumn>
                {
                    feed.map((post, index) => {
                        if (index % 3 == 0)
                            return (
                                <FeedCard feed={post}></FeedCard>
                            )
                    })
                }
            </FeedColumn>
            <FeedColumn>
                {
                    feed.map((post, index) => {
                        if (index % 3 == 1)
                            return (
                                <FeedCard feed={post}></FeedCard>
                            )
                    })
                }
            </FeedColumn>
            <FeedColumn>
                {
                    feed.map((post, index) => {
                        if (index % 3 == 2)
                            return (
                                <FeedCard feed={post}></FeedCard>
                            )
                    })
                }
            </FeedColumn>
        </div>
    )
}

export default FeedSection




function FeedColumn({ children }) {
    return (
        <div className="feed-col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            {children}
        </div>
    )
}



function FeedCard({ feed }) {
    return (
        <div className="feed-card ">
            <div className="row header">
                <div className="col-3">
                    <img className="profile-img" src={feed.photoURL} alt="" />
                </div>
                <div className="col">
                    <div><b>{feed.author}</b> </div>
                    <div className="card-text">{feed.address}</div>
                </div>
                <div className="col-2">
                    <br />
                    <FaEllipsisH></FaEllipsisH>
                </div>
            </div>
            <div>
                <img className="post-img" src={feed.image} alt="" />

            </div>
            <div className="container bottom">
                <div className="row icons">
                    <div className="col row">
                        <FaHeart className={`col ${feed.liked ? `liked` : ``}`}></FaHeart>
                        <FaComment className="col"></FaComment>
                        <FaComment className="col"></FaComment>

                    </div>
                    <div className="col row right">
                        <FaBookmark className={`col `}></FaBookmark>
                    </div>
                </div>
                <div>
                    Linked by {feed.person} and {feed.likes} others
                </div>
                <small>{feed.text}</small>
            </div>
        </div>
    )
}