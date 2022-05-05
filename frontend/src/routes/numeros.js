import React from 'react';
import NavBar from '../components/navbar';
import PopupNumero from '../components/popUpNumero';
import '../styles/Numeros.css';
import Footer from '../components/footer';

class Numeros extends React.Component {

    constructor(props) {
        super(props)
        this.state={err:"",dataOriginal:[],data:[],value:"",dataLoaded:false,ImgClicked:false,numero:-1,rotate:-90,flex:'row',wrap:'wrap'}
    }
    
    componentDidMount() {
        /*fetch Local
        fetch("./data/revistas.json")
        .then(response=>{return response.json()})
        .then(data=>{this.setState({dataOriginal:data.numeros,data:data.numeros})})
        .then(()=>this.setState({dataLoaded:true}))
        .catch(err=>{console.log(err, ' error')})
        */
       /*Mongo DB*/
       fetch("https://backend-bds.herokuapp.com/api/revista")
        .then(response=>{return response.json()})
        .then(data=>{this.setState({dataOriginal:data,data:data})})
        .then(()=>this.setState({dataLoaded:true}))
        .catch(err=>this.setState({err:err}))
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

    buscar(){
        let i=0;
        let j;
        let text="";
        let aux = [];
        while (this.state.dataOriginal.length>i){
            text=this.state.dataOriginal[i].numero;
            text=text+this.state.dataOriginal[i].nombre;
            j=0;
            while (this.state.dataOriginal[i].articulos.length>j){
                text=text + this.state.dataOriginal[i].articulos[j].name;
                text=text + this.state.dataOriginal[i].articulos[j].autor;            
                j++
            } 
            j=0;
            while (this.state.dataOriginal[i].dossier.autores.length>j){
                text=text + this.state.dataOriginal[i].dossier.autores[j].name;
                text=text + this.state.dataOriginal[i].dossier.autores[j].autor;
                j++
            } 
            text=text.toLocaleLowerCase();
            if (text.includes(this.state.value.toLocaleLowerCase())){
                aux.push(this.state.dataOriginal[i])
            }
            i++;
        }
       this.setState({data:aux})
    }
    

    render() { 
        return (
            <div>
                <NavBar/>
                {<h1>{this.state.err}</h1>}
                {this.state.dataLoaded &&
                <div className='Numeros'>
                   {this.state.ImgClicked &&
                        <PopupNumero data={this.state.data[this.state.numero]} deactivate={this.deactivate.bind(this)}/>            
                    }
                    <div className='searchBar'>
                    <input type="text"  onChange={(e) =>{if(e.target.value.includes("<"));this.setState({ value: e.target.value })} } placeholder='buscar por numero, nombre, titulo'/>
                    <button onClick={()=>{this.buscar()}}>buscar</button>
                    <img onClick={()=>this.ordenar()} style={{transform:`rotate(${this.state.rotate}deg)`}} src="https://www.seekpng.com/png/full/22-224641_arrow-transparent-png-image-flecha-hacia-la-derecha.png"alt='orden'/>
                    </div> 
                    <div className='containerNumeros' style={{flexWrap:this.state.wrap,flexDirection:this.state.flex}}>
                    {this.state.data.length>0 && this.state.data.map((i,index)=>
                    <div className='itemImg-Numeros-container' key={i.numero+i.nombre} onClick={()=>this.setState({numero:index,ImgClicked:true})}>
                        <img key={i.numero+"-img"} alt="tapa" className='itemImg-Numeros' src={process.env.PUBLIC_URL+"/tapas/Bds"+i.numero+"-small.png"} />
                    </div>)}
                    </div> 
                </div>
                }
            <Footer />
            </div>
        );
    }
}
 
export default Numeros;