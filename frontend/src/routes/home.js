import React from 'react';
import '../styles/home.css'
import ImgSlider from '../components/imgSlider';
import NavBar from '../components/navbar';
import RevistaQuickView from '../components/RevistaQuickView';
import NavRedes from '../components/navRedes';
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
                <NavRedes />
                <h2 style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/pattern2.png"})`}}  id="revistaquicktittle" >Ultimos numeros</h2>
                <RevistaQuickView/>
                <h2 style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/pattern.png"})`}} id="blogtittle">Noticias</h2>
                <div className='news' style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/brickwall2.png"})`,backgroundRepeat:"repeat",backgroundPositionX:"center"}}>
                <div className='home_blogContainer' >
                <BlogContent type="main" className="spotifyItem1"/>
                <BlogContent type="secondary"  className="spotifyItem2"/>
                </div>
                <div className='mediaContainer'  >
                <SpotifyItem className="spotifyItem1" src="https://open.spotify.com/embed/show/3cGpRjVYLKGsQOVcy84snX?utm_source=generator"/>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Home;