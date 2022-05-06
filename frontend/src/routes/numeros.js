import React from 'react';
import NavBar from '../components/navbar';
import PopupNumero from '../components/popUpNumero';
import '../styles/Numeros.css';
import Footer from '../components/footer';

class Numeros extends React.Component {

    constructor(props) {
        super(props)
        this.state={dataOriginal:{},data:{},value:"",dataLoaded:false,ImgClicked:false,numero:-1,rotate:-90,flex:'row',wrap:'wrap'}
    }
    
    componentDidMount() {
       this.load()
       .then(data =>{console.log(data);this.setState({dataOriginal:data,data:data})})
       .then(()=>this.setState({dataLoaded:true}))
      }

      async load(){
        try {
            const response = await fetch('https://backend-bds.herokuapp.com/api/revista', {
              method: 'GET'
            });
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            return response.json();
          } catch (err) {
            console.log(err);
          }
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
                {this.state.dataLoaded ?
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
                    {console.log(this.state.data)/*this.state.data.map((i,index)=>
                    <div className='itemImg-Numeros-container' key={i.numero+i.nombre} onClick={()=>this.setState({numero:index,ImgClicked:true})}>
                        <img key={i._id} alt="tapa" className='itemImg-Numeros' src={process.env.PUBLIC_URL+"/tapas/Bds"+i.numero+"-small.png"} />
                    </div>)*/}
                    </div> 
                </div>
                :<h1>loading ...</h1>}
            <Footer />
            </div>
        );
    }
}
 
export default Numeros;