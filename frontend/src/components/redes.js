import React from 'react';
import '../styles/redes.css'

class Redes extends React.Component {
    constructor(props){
        super(props);
        this.state=({content:[true,false]})
    }


    render() { 
        return (<div className='container-intro-redes'>
                <div className='introContainer'>
                    <div className='miniNavBar'>
                        <button onClick={()=>this.setState({content:[true,false]})} className='miniNavBarButton'> La revista</button>
                        <button onClick={()=>this.setState({content:[false,true]})} className='miniNavBarButton'> Staff</button>
                    </div>
                    {this.state.content[0] &&
                    <div>
                        <h1 className='title'>Lorem ipsum</h1>
                        <p className='intro-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    }
                     {this.state.content[1] &&
                    <div>
                        <h1  className='title'>Staff</h1>
                        <div className='intro-p'><h2>Lorem</h2><ul><li>ipsum</li><li>ipsum</li></ul></div>
                    </div>
                    }
                    
                </div>
                <div className='redesContainer'>
                    <img className='redesicon' alt="facebookIcon" src={process.env.PUBLIC_URL+'/icons/facebookicon.png'} onClick={()=>window.open("https://www.facebook.com/BOCADESAPO-113630765327065/?fref=ts", "_blank")}/>
                    <img className='redesicon' alt="instagramIcon"  src={process.env.PUBLIC_URL+'/icons/instagramicon.png'} onClick={()=>window.open("http://instagram.com/boca_de_sapo/", "_blank")}/>
                    <img className='redesicon' alt="pinterestIcon"  src={process.env.PUBLIC_URL+'/icons/pinteresticon.png'}onClick={()=>window.open("http://www.pinterest.com/bocadesapo/", "_blank")}/>
                    <img className='redesicon' alt="twitterIcon" src={process.env.PUBLIC_URL+'/icons/twittericon.png'} onClick={()=>window.open("https://twitter.com/BocadSapo", "_blank")}/>
                    <img className='redesicon' alt="spotifyIcon"  src={process.env.PUBLIC_URL+'/icons/spotifyicon.png'} onClick={()=>window.open("https://open.spotify.com/show/3cGpRjVYLKGsQOVcy84snX?si=e5a4852b0898414d", "_blank")}/>
                    <img className='redesicon' alt="youtubeIcon"  src={process.env.PUBLIC_URL+'/icons/youtubeicon.png'} onClick={()=>window.open("https://www.youtube.com/channel/UCTg_A-oBBP6hSlYoGgGPXdw", "_blank")}/>
                </div>
        </div> );
    }
}
 
export default Redes;