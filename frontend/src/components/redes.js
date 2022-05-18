import React from 'react';
import '../styles/redes.css'

class Redes extends React.Component {
    constructor(props){
        super(props);
        this.state=({content:[true,false],index:[0,1],style:[{background: "rgb(240, 207, 20)",color: "black"},{background: "black",color: "white"}]})
    }


    render() { 
        return (<div className='container-intro-redes'>
                <div className='introContainer'>
                    <div className='miniNavBar'>
                        <div className='miniNavBarButton' style={{"background":this.state.style[this.state.index[0]].background,"color":this.state.style[this.state.index[0]].color}}  
                        onClick={()=>this.setState({index:[0,1],content:[true,false]})}>  
                            <img src={process.env.PUBLIC_URL+"/icons/frogicon.png"} alt="iconFrog"/>
                            <h2> Boca de sapo </h2>
                        </div>
                        <div style={{"background":this.state.style[this.state.index[1]].background,"color":this.state.style[this.state.index[1]].color}}  onClick={()=>this.setState({index:[1,0],content:[false,true]})} className='miniNavBarButton'>
                            <img src={process.env.PUBLIC_URL+"/icons/stafficon.png"} alt='staffIcon'/>
                            <h2>Staff</h2>
                        </div>
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
                        <div className='intro-p'>
                            <h2>Directora</h2>
                                <ul>
                                    <li>Jimena Néspolo</li>
                                </ul>
                            <h2>Consejo de Direccion</h2>
                                <ul>
                                    <li>Laura Cliento</li>
                                    <li>Clauda Feld </li>
                                    <li>Florencia Eva González</li>
                                </ul>
                            <h2>Redaccion</h2>
                                <ul>
                                    <li>Felipe Benegas Lynch</li>
                                </ul>
                            <h2>Arte</h2>
                                <ul>
                                    <li>Jorge Sánchez</li>
                                </ul>
                            <h2>Redaccion</h2>
                                <ul>
                                    <li>Felipe Benegas Lynch</li>
                                </ul>
                            <h2>Diseño</h2>
                                <ul>
                                    <li>Antonia Scafati</li>
                                </ul>  
                            <h2>Community Manager</h2>
                                <ul>
                                    <li>Matuziken Knigth</li>
                                </ul>  
                            <h2>Produccion Audiovisual</h2>
                                <ul>
                                    <li>Carolina Rosaspini</li>
                                </ul>      
                       </div>
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