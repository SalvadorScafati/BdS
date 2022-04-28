import React from 'react';
import '../styles/home.css'

class SpotifyItem extends React.Component {
    constructor(props){
        super(props);
        this.state={src:false};
    }

    componentDidMount(){
        if(this.props.src!==""){
            this.setState({src:true})
        }
    }



    

    render() { 
        return (
            <div className={this.props.className}  style={{ overflowY:'hidden'}}>
                {this.state.src &&
               <iframe title='spotify' style={{overflowY:'hidden',overflow:'hidden',width:`${100}%`,borderradius:"12px"}} src={this.props.src} height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                }
            </div>
        );
    }
}
 
export default SpotifyItem;