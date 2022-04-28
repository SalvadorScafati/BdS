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
                    <h1 className='NavBarItem' onClick={()=>window.open("/numeros", "_self")}>Numeros</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("http://www.bocadesapo.com.ar/revistas.html", "_blank")}>Reseñas</h1>
                    <h1 className='NavBarItem'  onClick={()=>window.open("http://agendabds.blogspot.com/", "_blank")}>Agenda</h1>
                    <h1 className='NavBarItem'>Podcast</h1>
                    <h1 className='NavBarItem'>Contacto</h1>
                   
                </div>}
                {!this.state.matches768 &&                
                <div className='NavBarContainer-mobile'>
                    <img alt="navBarButton" src={process.env.PUBLIC_URL +"/icons/navbar-icon.png"} className='NavBarButton' onClick={()=>this.setState({toggle:!this.state.toggle})}/>
                    {!this.state.toggle &&
                    <div className='dropDown'>
                             <h1 className='NavBarItem'  onClick={()=>window.open("/", "_self")}>Inicio</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("/numeros", "_self")}>Numeros</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("http://www.bocadesapo.com.ar/revistas.html", "_blank")}>Reseñas</h1>
                             <h1 className='NavBarItem'  onClick={()=>window.open("http://agendabds.blogspot.com/", "_blank")}>Agenda</h1>
                             <h1 className='NavBarItem'>Videos</h1>
                             <h1 className='NavBarItem'>Podcast</h1>
                             <h1 className='NavBarItem'>Contacto</h1>
                       </div> 
                    }
               </div>
                }
            </div>
            <div className='hiddenBlock-NavBar'/>
            </div>
            
        );
    }
}
 
export default NavBar;