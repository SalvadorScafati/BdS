import React from 'react';
import '../styles/navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {toggle:true ,matches768: window.matchMedia("(min-width: 768px)").matches };
      }
    
      componentDidMount() {
        const handler = e => this.setState({toggle:true,matches768: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
      }
    
      

    
    render() { 
        return (<div>
            <div className='NavBar'>
                {this.state.matches768 &&                
                <div className='NavBarContainer'>
                    <h1 className='NavBarItem' onClick={()=>window.open("/", "_self")}>Inicio</h1>
                    <h1 className='NavBarItem' onClick={()=>window.open("/numeros", "_self")}>Números</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("http://reseniasbds.blogspot.com/", "_blank")}>Reseñas</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("http://agendabds.blogspot.com/", "_blank")}>Agenda</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("https://open.spotify.com/show/3cGpRjVYLKGsQOVcy84snX?si=e5a4852b0898414d", "_blank")}>Podcast</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("/contacto", "_self")}>Contacto</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("/acercade", "_self")}>Staff</h1>
                   
                </div>}
                {!this.state.matches768 &&                
                <div className='NavBarContainer-mobile'>
                    <img alt="navBarButton" src={process.env.PUBLIC_URL +"/icons/navbar-icon.png"} className='NavBarButton' onClick={()=>this.setState({toggle:!this.state.toggle})}/>
                    {!this.state.toggle &&
                    <div className='dropDown'>
                             <h1 className='NavBarItem'  onClick={()=>window.open("/", "_self")}>Inicio</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("/numeros", "_self")}>Números</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("http://reseniasbds.blogspot.com/", "_blank")}>Reseñas</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("http://agendabds.blogspot.com/", "_blank")}>Agenda</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("https://open.spotify.com/show/3cGpRjVYLKGsQOVcy84snX?si=e5a4852b0898414d", "_blank")}>Podcast</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("/contacto", "_self")}>Contacto</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("/acercade", "_self")}>Staff </h1>
                       </div> 
                    }
               </div>
                }
            </div>
            </div>
            
        );
    }
}
 
export default NavBar;