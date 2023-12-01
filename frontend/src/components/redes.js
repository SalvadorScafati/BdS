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
                    <div className='scroller'>
                        <p className='intro-p'>
                        <strong>Boca de Sapo. Arte, literatura y pensamiento</strong> es una revista dedicada desde 1999 a la
                        reflexión y la producción estética contemporánea.<br/>
                        Esta edición n°33 está dedicada al tema “TIERRA”. Las obras que corren en la actualización
                        web y en la tapa pertenecen a <strong>Evangelina Lenarduzzi</strong>. La serie de dibujos lleva por título
                        &quot;Humanxs&quot; y acompaña también los artículos de <strong>Andrés Olaizola</strong> y de <strong>Patricia
                        Rondomankas</strong>; se trata de un libro de artista sobre el que comenzó a trabajar durante el
                        2020, interviniendo un viejo Atlas.<br/>
                        Boca de Sapo 33 se abre con el ensayo “El campo en nuestros días”, de <strong>Roy Hora</strong>, y con
                        obras de<strong> Victoria Yoguel</strong>, realizadas a partir los pigmentos naturales del paisaje misionero:
                        tierra, hojas de poda, yerba mate. Por otra parte, dibujos de<strong> Guadalupe Silva</strong> acompañan
                        el artículo “La memoria ancestral”, de <strong>María Rosa Lojo</strong>.<br/>
                        El Dossier de Mitología Guaraní presenta una versión de los mitos a cargo de <strong>Princesa</strong>
                        Aquino Augsten, con dibujos de la autora y de <strong>Rodrigo Hamuy</strong>. El mismo reúne
                        intervenciones de<strong> Rodrigo Villalba Rojas, María Paz Solís Durigo y Mario Castells</strong>, y se
                        encuentra ilustrado con cuadritos de la historieta Capitán Chikú, de <strong>Carlos Castells</strong> y
                       <strong>Liliana Navarro Ibarra</strong>. Como se recordará, Kapitä Chiku es uno de los seres más invocados
                        de la mitología guaraní, cuando lo que se intenta es alcanzar la gracia de la Tierra Sin Mal.
                        El Dossier fue coordinado por <strong>Jimena Néspolo</strong>, quien en esta edición comparte una
                        crónica de la vida académica ilustrada por obras de<strong>Paula Alonso</strong>.<br/>
                        A propósito de la reciente publicación de su libro Metamorfosis (2021), <strong>Emanuele Coccia</strong>
                        reflexiona sobre el “Futuro”; además, <strong>Enrique Flores</strong> suma un testimonio sobre su viaje a
                        la selva amazónica en busca de la ayahuasca.<br/>
                        Boca de Sapo tiene desde hace unos meses un pódcast, donde las y los autores leen sus
                        propias producciones: <strong>Pablo Manzano</strong> nos cuenta cómo surgió este nuevo espacio.
                        </p>
                    </div>
                    }
                     {this.state.content[1] &&
                    <div className='scroller'>
                        <h1  className='title'>Staff</h1>
                        <div className='intro-p'>
                            <h2>Directora</h2>
                                <ul>
                                    <li>Jimena Néspolo</li>
                                </ul>
                            <h2>Consejo de Dirección</h2>
                                <ul>
                                    <li>Laura Cliento</li>
                                    <li>Clauda Feld </li>
                                    <li>Florencia Eva González</li>
                                </ul>
                            <h2>Redacción</h2>
                                <ul>
                                    <li>Felipe Benegas Lynch</li>
                                    <li>Hernán Martínez</li>
                                    <li>Javier Geist</li>
                                </ul>
                            <h2>Arte</h2>
                                <ul>
                                    <li>Jorge Sánchez</li>
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
        </div> );
    }
}
 
export default Redes;