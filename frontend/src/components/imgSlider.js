import React from 'react';
import '../styles/imgSlider.css';
import LoadingLoop from './loadingLoop';

class ImgSlider  extends React.Component {

    constructor(props) {
        super(props);
        this.state={autor:"",background:[],data:[],dataLoaded:false,valor:-1}
    }


    componentDidMount() {
        fetch("./data/homeimg.json")
        .then(response=>{return response.json()})
        .then(data=>{this.setState({data:data.img,autor:data.autor,})})
        .then(()=>{this.setState({dataLoaded:true})})
        .catch(err=>{console.log(err, ' error')})
      }

    componentDidUpdate(prevProps,prevState){
        if (typeof prevState.dataLoaded !== 'undefined' && prevState.dataLoaded !== this.state.dataLoaded){
            this.random()
        }
    }
    

    iniateArray(){
        let m=this.state.data.map(()=>{return "black"})
        this.setState({background:m})
    }

    random(){
       this.iniateArray()
       let x = Math.floor(Math.random() * this.state.data.length);
       let l=this.state.background;
       l[x]="#f0cf14"
       this.setState({valor:x,background:l})
        //setTimeout(() => {
        //     this.random()      
        //}, 20000);
    }

    changeColor(i){
        let l=this.state.background;
        l[this.state.valor]="black";
        l[i]="#f0cf14";
        this.setState({background:l})
    }

    render() { 
        return (<div>
            {this.state.dataLoaded &&
                <div className='imgSliderImg' style={{backgroundImage: `url(${process.env.PUBLIC_URL+this.state.data[this.state.valor]})`}}>
                    <div className='flexSlider'>
                    <h1>-</h1>
                    <div className='imgSliderContainer'> 
                    {this.state.data.map((i,index)=><button style={{"background":this.state.background[index]}} className='imgSliderImg-button' key={index} onClick={()=>{this.changeColor(index);this.setState({valor:index})}} />)}
                    </div>
                    </div>
                </div> 
            } 
            {!this.state.dataLoaded &&
              <LoadingLoop />
            }
        </div>  );
    }
}
 
export default  ImgSlider;