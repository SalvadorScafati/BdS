import React from 'react';
import '../styles/home.css'
import ImgSlider from '../components/imgSlider';
import NavBar from '../components/navbar';
import RevistaQuickView from '../components/RevistaQuickView';
import Redes from '../components/redes';
import SpotifyItem from '../components/spotifyItem';
import Footer from '../components/footer';
import BlogContent from '../components/blogContent';

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
                <h2 id="revistaquicktittle" >Ultimos numeros</h2>
                <RevistaQuickView/>
                <h2 id="blogtittle">Noticias</h2>
                <div className='news' style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/brickwall2.png"})`,backgroundRepeat:"repeat",backgroundPositionX:"center"}}>
                <div className='home_blogContainer' >
                <BlogContent type="main" className="spotifyItem1"/>
                <BlogContent type="secondary"  className="spotifyItem2"/>
                </div>
                <div className='mediaContainer'  >
                <SpotifyItem className="spotifyItem1" src="https://open.spotify.com/embed/episode/1n0EkP1DenVrzHozkSC2at?utm_source=generator"/>
                <SpotifyItem className="spotifyItem2" src="https://open.spotify.com/embed/episode/5PaPWwGZM6dpZnON9RQtXb?utm_source=generator"/>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Home;