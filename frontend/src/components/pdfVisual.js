import React from 'react';
import '../styles/pdfVisual.css'

class PdfVisual extends React.Component {

    render() { 
        return (<div className='containerPdf'>
            <div className='pdfVisual-contents'>
            <img className="pdfImg" src={process.env.PUBLIC_URL +"/icons/muestra.png"} alt="logo"/>  
            </div>
            <div className='PdfVisual-container' >
            <iframe title='pdf' className='PdfVisual' src="https://drive.google.com/file/d/15zq1DNggG31t_pYBg8MnCbgmcQTLsguH/preview" width="100%" height="100%" allow="autoplay">
            </iframe>
            </div>
        </div>);
    }
}
 
export default PdfVisual;