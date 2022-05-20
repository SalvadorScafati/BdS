import React from 'react';
import '../styles/RevistaQuickView.css';
import { isMobile} from "react-device-detect";
import PopupNumero from '../components/popUpNumero';

class RevistaQuickView extends React.Component {
    constructor(props) {
        super(props)
        this.ic_Ref = React.createRef();
        this.state={matches768:window.matchMedia("(min-width: 768px)").matches,data:{},dataLoaded:false,buttonPressedRight:false,buttonPressedLeft:false,ImgClicked:false,numero:-1}
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
        .then(data=>{this.setState({data:data})})
        .then(()=>this.setState({dataLoaded:true}))
        .catch(err=>{console.log(err, ' error')})
        
        const handler = e => this.setState({matches768: e.matches});
         window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
      }
    

      scrollLoop(direction){
        let anterior=this.ic_Ref.current.scrollLeft;
        if (direction === "left"){
            this.setState({buttonPressedLeft:true});
        }
        if (direction === "right"){
            this.setState({buttonPressedRight:true});
        }
        if (direction === "left"){
                this.ic_Ref.current.scrollLeft-=2;  
            }
        if (direction === "right"){
                this.ic_Ref.current.scrollLeft+=2; 
        }
        setTimeout(()=> {
            if (!this.state.buttonPressedLeft && !this.state.buttonPressedRight ){
                this.setState({buttonPressedRight:false});
                this.setState({buttonPressedLeft:false});
            }else if(this.ic_Ref.current.scrollLeft===anterior){
                this.setState({buttonPressedRight:false});
                this.setState({buttonPressedLeft:false});
            } else if (this.state.buttonPressedLeft || this.state.buttonPressedRight ){
                this.scrollLoop(direction)
            } 
        }, 1);
        }
     

      exitLoop(direction){
        if (direction === "left"){
            this.setState({buttonPressedLeft:false});
        }
        if (direction === "right"){
            this.setState({buttonPressedRight:false});
        }
      }
    
      deactivate(){
        this.setState({ImgClicked:false});
    }


    render() { 
        return (
            
            <div>
               {this.state.dataLoaded && (
                 <div className="revistaContainer">
                <button  className='itemButtonLeft' onTouchStart={()=>this.scrollLoop('left')} onTouchEnd={()=>this.exitLoop('left')} onMouseLeave={()=>this.exitLoop('left')} onMouseEnter={isMobile ? () => { return } :()=>this.scrollLoop('left')} ></button>
                <div className="itemContainer"ref={this.ic_Ref} style={{'overflowX':this.state.scrollPositon}}>
                <div className='itemImgHidden' />
                 {this.state.data.slice(0, 7).map((i,index)=>
                    <div key={i.numero} className="revistaItem">
                        <img key={i.numero+"-img"} alt="tapa" className='itemImg' src={process.env.PUBLIC_URL+i.img} onClick={()=>this.setState({ImgClicked:true,numero:index})}/>
                    </div>)}
                    {this.state.ImgClicked &&
                         <PopupNumero data={this.state.data[this.state.numero]} img={process.env.PUBLIC_URL+"/tapas/Bds"+this.state.data[this.state.numero].numero+"-small.png"} deactivate={this.deactivate.bind(this)}/>
                    }
                    <div className='itemImgHidden' />
                </div>
                 <button className='itemButtonRight' onTouchStart={()=>this.scrollLoop('right')} onTouchEnd={()=>this.exitLoop('right')} onMouseLeave={()=>this.exitLoop('right')} onMouseEnter={isMobile ? () => { return } : ()=>this.scrollLoop('right')} ></button>
                 </div>
                )}
            </div>
        );
    }
}
 
export default RevistaQuickView;