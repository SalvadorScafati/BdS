import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
    width:360px;
    height: 300px;
    background-color: aliceblue;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width:400px){
        width:200px;
        height: 300px;
    }
`

const Content = styled.div`
    width:100%;
    height: 300px;
    display: flex;
    flex-direction: column;
`
const Tittle = styled.h1`
   height: 22px;
   width: 100%;
   font-family: "BenchNine";
   font-size: 18px;
   padding-left: 13px;
   background-color: rgb(240, 207, 20);
   margin: 0%;
   z-index: 1;
   @media screen and (max-width:400px){
        height: 50px;
        font-size: 14px;
        padding-left: 5px;
    }
`

const Image = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props=>`url(${props.src})`};
    transition: all 2s;
    &:hover{
        transform: scale(1.3);
    }
   
`
const ImageBlur = styled.div`
    width: 10%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(4px);
    background-image: ${props=>`url(${props.src})`};
   
`

const Images = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`



class BlogContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={tittle:"",img:"",link:"",dataLoaded:false}
    }

    componentDidMount(){
             const requestOptions = {
                 method:'POST',
                 headers:{'Content-Type': 'application/json' },
                 body:JSON.stringify({type:this.props.type})
             }
            fetch('https://bds-6hmt.onrender.com/api/blog',requestOptions)
            .then(response => response.json())
            .then (data=>{
              this.setState({img:data.img,link:data.link,tittle:data.tittle,dataLoaded:true})
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }
  
    render() { 
        return (
            <div>
            {this.state.dataLoaded && 
                <BlogContainer className='blogContainer'>
                <img style={{"zIndex":1}} alt="var" src={this.props.img}/>
                <Content>
                <Tittle>{this.state.tittle}</Tittle>
                <Images>
                <ImageBlur src={this.state.img} onClick={()=>window.open(this.state.link, "_blank")} /> 
                <Image  src={this.state.img} onClick={()=>window.open(this.state.link, "_blank")} /> 
                <ImageBlur src={this.state.img} onClick={()=>window.open(this.state.link, "_blank")} />  
                </Images>
                </Content>
                </BlogContainer>            
            }
            </div>
          
    )}
}
 
export default BlogContent;