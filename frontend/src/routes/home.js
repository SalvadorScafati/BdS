import React from 'react';
import '../styles/home.css'
import ImgSlider from '../components/imgSlider';
import NavBar from '../components/navbar';
import RevistaQuickView from '../components/RevistaQuickView';
import NavRedes from '../components/navRedes';
import Footer from '../components/footer';
import Noticias from '../components/noticias';
//import SpotifyItem from '../components/spotifyItem';
//import BlogContent from '../components/blogContent';

class Home extends React.Component {


    render() { 
        return (
            <div id="home">
                <div className='NavBarImg'>
            <img  src={process.env.PUBLIC_URL +"/icons/logoBocaDeSapo.png"} alt="logo"/>
            </div>
                <NavBar />
                <ImgSlider />     
                <NavRedes />
                <h2 style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/pattern2.png"})`}}  id="revistaquicktittle" >Últimos números</h2>
                <RevistaQuickView/>
                {
                /*
                <div className='news' style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/brickwall2.png"})`,backgroundRepeat:"repeat",backgroundPositionX:"center"}}>
                <div className='home_blogContainer' >
                <BlogContent type="main" img={process.env.PUBLIC_URL +"/icons/agendavar.png"} className="spotifyItem1"/>
                <BlogContent type="secondary" img={process.env.PUBLIC_URL +"/icons/reseñavar.png"}   className="spotifyItem2"/>
                </div>
                <div className='mediaContainer'  >
                <SpotifyItem className="spotify" src="https://open.spotify.com/embed/show/3cGpRjVYLKGsQOVcy84snX?utm_source=generator"/>
                <iframe className="youtubeVideo"  style={{"borderRadius":"25px","marginTop":"10px"}} width="360" height="215" src="https://www.youtube.com/embed/K3sVxpkk9X0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                </div>
                </div>
                */
                }
                <h2 style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/pattern1.png"})`}} id="blogtittle">Noticias</h2>
                <Noticias />
                <Footer />
            </div>
        );
    }
}
 
export default Home;