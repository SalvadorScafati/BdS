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
        fetch('https://backend-bds.herokuapp.com/api/blog')
            .then(response => response.json())
            .then (data=>{
              this.setState({img:data[0].img,link:data[0].link,tittle:data[0].tittle,dataLoaded:true})
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
            <div className='blogContent'>
                <span>
                    <img src={process.env.PUBLIC_URL+'/icons/blogger.png'} alt="blogicon" />
                    <h1>{this.state.tittle}</h1>
                </span>
                <img src={this.state.img} alt="blog" onClick={()=>window.open(this.state.link, "_blank")} />                
            </div>
            }
        </div>
        </VisibilitySensor>);
    }
}
 
export default BlogContent;