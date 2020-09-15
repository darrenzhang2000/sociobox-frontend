import React, { useEffect } from 'react'
import axios from 'axios'
import unirest from 'unirest'


const Podcast = (props) => {

    useEffect(
        () => {
        }
    )

    const searchPodcasts = async (socialIssue) => {
        const res = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${socialIssue}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
        .header('X-ListenAPI-Key', '1f7a05ab5c804cba9fe9fbc11912f6ee')
        res.toJSON();
        let podcasts = res.body.results
        //podcast.audio
        //podcast.image
        //podcast.link
        //podcast.thumbnail
        return podcasts
    }

    return <div>
        Podcast
        <button onClick={() => searchPodcasts('environmental issues')}>Submit</button>
    </div>
}

export default Podcast