import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

        <ChannelRow
            image="https://scontent.fclj2-1.fna.fbcdn.net/v/t1.0-9/106202351_3257348421023264_202038541735912792_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=lmL57O1vVz4AX8jwJk_&_nc_ht=scontent.fclj2-1.fna&oh=57f6943d23ea0e3f6ca88fffda471635&oe=602DDAE3"
            channel="Stanescu Bogdan"
            verified
            subs="1.2K"
            noOfVideos={31}
            description="Tech Enthusiast"
        />

        <hr />

        <VideoRow
            views="1.9M"
            subs="1.8M"
            description="Software engineers and programmers code everything from virtual reality to artificial intelligence to unique instruments like engineer Ben Bloomberg made for musician Jacob Collier. Are you considering new job or career? Me too."
            timestamp="59 second ago"
            channel="Physics Girl"
            title="What do programmers actually do?"
            image="https://i.ytimg.com/vi/g4a7_HH9Wbg/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCyq6O-CZjz8cQgZNNzYeyUeb0wOg"
        />

        <VideoRow
            views="50k"
            subs="543k"
            description="So what are the best laptops for programming in 2020? In this video I'll walk you through my programming laptop buying guide and discuss my recommendations for laptops for programmers. Fortunately programming laptops don't need to have crazy specs and can be quite affordable!"
            timestamp="1 year ago"
            channel="Mosh"
            title="What to Look for in an AFFORDABLE Laptop for Programming"
            image="https://i.ytimg.com/vi/F5kPAZZ-CNE/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDipba3tg9cRE2ogU3LiNsbJlZ0JQ"
        />  
      </div>
    )
}

export default SearchPage
