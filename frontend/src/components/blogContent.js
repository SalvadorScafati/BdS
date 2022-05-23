import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../styles/blogContainer.css'


class BlogContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={visibility: false,tittle:"",img:"",link:"",dataLoaded:false}
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.visibility!==this.state.visibility){
             const requestOptions = {
                 method:'POST',
                 headers:{'Content-Type': 'application/json' },
                 body:JSON.stringify({type:this.props.type})
             }
            fetch('https://backend-bds.herokuapp.com/api/blog',requestOptions)
            .then(response => response.json())
            .then (data=>{
              this.setState({img:data.img,link:data.link,tittle:data.tittle,dataLoaded:true})
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });}
    }
  
    render() { 
        return (
        <VisibilitySensor onChange={(isVisible) => {
            this.setState({visibility: isVisible})
          }}>

        <div className='blogContainer'>
            {this.state.dataLoaded &&
            <div style={{"backgroundImage": `url(${process.env.PUBLIC_URL+"./icons/pattern2.png"})`}} className='blogContent'>
                <span>
                    <img src={process.env.PUBLIC_URL+'/icons/blogger.png'} alt="blogicon" />
                    <h1 >{this.state.tittle}</h1>
                </span>
                <img src={this.state.img} alt="blog" onClick={()=>window.open(this.state.link, "_blank")} />                
            </div>
            }
        </div>
        </VisibilitySensor>);
    }
}
 
export default BlogContent;