import React from 'react';

import '../styles/home.css'

import ImgSlider from '../components/imgSlider';
import NavBar from '../components/navbar';
import RevistaQuickView from '../components/RevistaQuickView';
import Redes from '../components/redes';
import SpotifyItem from '../components/spotifyItem';
import Footer from '../components/footer';

class Home extends React.Component {


    
    render() { 
        return (
            <div id="home">
                <div className='NavBarImg'>
            <img  src={process.env.PUBLIC_URL +"/icons/logoBocaDeSapo.png"} alt="logo"/>
            </div>
                <NavBar />
                <ImgSlider />     
                <Redes />
                <RevistaQuickView/>
                <div className='mediaContainer'>
                <SpotifyItem className="spotifyItem1" src="https://open.spotify.com/embed/episode/1n0EkP1DenVrzHozkSC2at?utm_source=generator"/>
                <SpotifyItem className="spotifyItem2" src="https://open.spotify.com/embed/episode/5PaPWwGZM6dpZnON9RQtXb?utm_source=generator"/>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Home;