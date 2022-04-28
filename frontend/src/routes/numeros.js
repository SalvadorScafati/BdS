import React from 'react';
import NavBar from '../components/navbar';
import PopupNumero from '../components/popUpNumero';
import '../styles/Numeros.css';

class Numeros extends React.Component {

    constructor(props) {
        super(props)
        this.state={data:{},dataLoaded:false,ImgClicked:false,numero:-1,rotate:-90,flex:'row',wrap:'wrap'}
    }
    
    componentDidMount() {
        fetch("./data/revistas.json")
        .then(response=>{return response.json()})
        .then(data=>{this.setState({data:data.numeros})})
        .then(()=>this.setState({dataLoaded:true}))
        .catch(err=>{console.log(err, ' error')})
      }

    deactivate(){
        this.setState({ImgClicked:false});
    }

    ordenar(){
        this.setState({rotate:this.state.rotate-180});
        if(this.state.wrap==="wrap"){
            this.setState({flex:"row-reverse",wrap:"wrap-reverse"})
        }else{
            this.setState({flex:"row",wrap:"wrap"})
        }
    }
    
    render() { 
        return (
            <div>
                <NavBar/>
                {this.state.dataLoaded &&
                <div className='Numeros'>
                   {this.state.ImgClicked &&
                        <PopupNumero data={this.state.data[this.state.numero]} deactivate={this.deactivate.bind(this)}/>            
                    }
                    <div className='searchBar'>
                    <input placeholder='busqueda por numero'/>
                    <button>buscar</button>
                    <img onClick={()=>this.ordenar()} style={{transform:`rotate(${this.state.rotate}deg)`}} src="https://www.seekpng.com/png/full/22-224641_arrow-transparent-png-image-flecha-hacia-la-derecha.png"alt='orden'/>
                    </div> 
                    <div className='containerNumeros' style={{flexWrap:this.state.wrap,flexDirection:this.state.flex}}>
                    {this.state.data.map((i,index)=>
                    <div className='itemImg-Numeros-container' key={i.numero+i.nombre} onClick={()=>this.setState({numero:index,ImgClicked:true})}>
                        <img key={i.numero+"-img"} alt="tapa" className='itemImg-Numeros' src={process.env.PUBLIC_URL+"/tapas/Bds"+i.numero+"-small.png"} />
                    </div>)}
                    </div> 
                </div>
                }
            </div>
        );
    }
}
 
export default Numeros;