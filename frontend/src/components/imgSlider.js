import React from 'react';
import '../styles/imgSlider.css';

class ImgSlider  extends React.Component {

    constructor(props) {
        super(props);
        this.state={data:[],dataLoaded:false,valor:-1}
    }


    componentDidMount() {
        fetch("./data/homeimg.json")
        .then(response=>{return response.json()})
        .then(data=>{this.setState({data:data.img})})
        .then(()=>this.setState({dataLoaded:true}))
        .catch(err=>{console.log(err, ' error')})
        this.random()
      }

    random(){
       this.setState({valor:Math.floor(Math.random(10)*10)})
       setTimeout(() => {
            this.random()      
       }, 10000);
    }


    render() { 
        return (<div>
            {this.state.dataLoaded &&
                <div className='imgSliderImg' style={{backgroundImage: `url(${process.env.PUBLIC_URL+this.state.data[this.state.valor]})`}}/> 
            }
        </div>  );
    }
}
 
export default  ImgSlider;