import React from 'react';

class PopupNumero  extends React.Component{
constructor(props){
    super(props);
    this.state={articulos:false,matches768:window.matchMedia("(min-width: 768px)").matches}
}

componentDidMount() {
    const handler = e => this.setState({matches768: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }


toogle(){
    let x=!this.state.articulos;
    this.setState({articulos:x})
}
checkEmpty(valor){
    if (valor===[]){
        return false
    }else{
        return true
    }
}

render(){
    return (<div className='popUpNumero'>
         <img onClick={()=>this.props.deactivate()} src={process.env.PUBLIC_URL+"/icons/closeicon.png"}  alt="closeicon"/>
        <div className='popUpNumerobox'>
        <div>
        <h1 className='popUpNumerobox-tittle'><span>#</span>{this.props.data.numero} {this.props.data.nombre}</h1>
        <div className='popUpNumerobox-box'>
        <div className='popUpNumerobox-icons'>
        <button onClick={()=>this.toogle()}> Mostrar Artículos</button>
        <div>
            <img onClick={()=>window.open(this.props.data.pdf,"_blank")} src={process.env.PUBLIC_URL+"/icons/pdficon.png"}  alt="pdfIcon"/>
            <img onClick={()=>window.open(this.props.data.issu,"_blank")} src={process.env.PUBLIC_URL+"/icons/issuicon.png"}  alt="issuIcon"/>
        </div>
        </div>
        <div className='popUpNumerobox-box-articulos'>     
        {this.state.articulos &&
        <ul className='articulos'>
        {this.props.data.articulos.map((i,index)=>
        <div>
        <li key={i.name+"-"+i.autor}>
            <h1 onClick={()=>window.open(i.pdf, "_blank")} className='articulo-name-clickable'  >{i.name}</h1>
            <h1 className='articulo-autor'>{i.autor}</h1>
        </li>
        {this.props.data.dossier.orden===index &&
         <div>
        <li key={this.props.data.dossier.nameDossier}>
         <span className='articulo-name-clickable'   onClick={()=>window.open(this.props.data.dossier.pdf, "_blank")} >{this.props.data.dossier.nameDossier}</span>
         </li>
            {this.checkEmpty(this.props.data.dossier.autores) && this.props.data.dossier.autores.map(i=>
                <li key={i.name+"-"+i.autor} style={{marginLeft:"20px"}}>
                <h1  style={{color:"rgb(187, 173, 173)"}} className='articulo-name'  >{i.name}</h1>
                <h1 className='articulo-autor'>{i.autor}</h1>
                </li>
            )}
         </div>}
         </div>
        )}
        </ul>}
        {!this.state.articulos &&
            !this.state.matches768  && <img className='articulos-img' src={this.props.img} alt="tapa"/> 
        }
        {!this.state.articulos &&
            this.state.matches768  && <img className='articulos-img' src={process.env.PUBLIC_URL+this.props.data.img} alt="tapa"/> 
        }
        </div>
        </div>
        </div>
        </div>
    </div>);
    }
}

export default PopupNumero;
























