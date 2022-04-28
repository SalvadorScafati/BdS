import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component {
    
    render() { 
        return (<div className='footerContainer'>
            <p className='footerTitle'>
            ISSN 1852-9909
            </p>
            <p  className='footerInfo'>
Derechos reservados - Prohibida la reproducción total o parcial de cada número, en cualquier medio, sin la cita bibliográfica correspondiente
y/o la autorización de la editora.La dirección no se responsabiliza de las opiniones vertidas en los artículos firmados. Los colaboradores aceptan
que sus aportaciones aparezcan tanto en soporte impreso como en digital. BOCADESAPO no retribuye pecuniariamente las colaboraciones.
            </p>
            <p className='footerOtro'>
Revista indexada en CAICYT y LATINDEX
            </p>
        </div>);
    }
}
 
export default Footer;