import React, { useEffect, useState } from 'react'
import axios from 'axios'
import unirest from 'unirest'
import 'materialize-css/dist/css/materialize.min.css';
import './podcast.css';


const Podcast = (props) => {
    const [audioLink, setAudioLink] = useState('');
    const [audioTitle, setAudioTitle] = useState('');
    const [audioInfo, setAudioInfo] = useState('');
    const [upcoming, setUpcoming] = useState([{ thumb: ' ', title:'' }]);
    
    useEffect(
        () => {
            //searchPodcasts('environmental issues');
            document.getElementById("audio").load();
        }, [audioLink]);

    const searchPodcasts = async (socialIssue) => {
        const res = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${socialIssue}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
        .header('X-ListenAPI-Key', '1f7a05ab5c804cba9fe9fbc11912f6ee')
        res.toJSON();
        let podcasts = res.body.results
        //podcast.audio
        //podcast.image
        //podcast.link
        //podcast.thumbnail
        console.log(podcasts);
        //https://content.blubrry.com/askdroneu/ADU_News_16_08_sound_FINAL.mp3
        // setAudioLink(podcasts[0].audio);
        
        // setAudioInfo(podcasts[0].description_original);
        // setAudioTitle(`${socialIssue} Podcast`);
        // setUpcoming([{thumb:podcasts[1].thumbnail, title:podcasts[1].title_original}]);

        setAudioLink('https://content.blubrry.com/askdroneu/ADU_News_16_08_sound_FINAL.mp3');
        setAudioInfo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud');
        setAudioTitle(`Social Issue Podcast`);
        setUpcoming([{thumb:"https://pbs.twimg.com/profile_images/733713135215972352/dsaHV_aJ.jpg", title:'Plastic Waste in Ocean'}]);

        return podcasts;
    }
    searchPodcasts();
    return( 
    <div id="pod-div" className="row">
        <div id="audio-div" className="col s12 center-align">
            <audio id="audio" controls>
                <source src={audioLink} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        <div id="info" className="col s12">
            <h1>{audioTitle}</h1>
            <p>
                {audioInfo}
            </p>
        </div>
        <div id="up-coming" className="col s12 center-align">
            <h5>Upcoming Podcasts</h5>
            <div className="row">
                <ul>
                    <li>
                        <img src={upcoming[0].thumb}></img>
                        <h6>{upcoming[0].title}</h6>
                    </li>
                </ul>
            </div>
        </div>
        {/* <button onClick={() => searchPodcasts('environmental issues')}>Submit</button> */}
    </div>);
}

export default Podcast