import React from 'react';
import "../styles/login.css"
import Cookies from 'universal-cookie';
const cookies=new Cookies();

class BlogAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state={dataLoaded:false,tittle:"",img:"",link:""}
    }

    componentDidMount() {
        fetch('https://backend-bds.herokuapp.com/api/blog')
            .then(response => response.json())
            .then (data=>{
              this.setState({img:data[0].img,link:data[0].link,tittle:data[0].tittle,dataLoaded:true})
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    submit(tittle,img,link){
        console.log(tittle,img,link )
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization':' Bearer '+cookies.get("token"), 'Content-Type': 'application/json' },
            body: JSON.stringify({tittle:String(tittle),img:String(img),link:String(link),type:"main"})
    };
        fetch('https://backend-bds.herokuapp.com/api/updateblog', requestOptions)
        .then(response =>{console.log(response);if (response.status===200){alert("cambios guardados")}else{alert("error"+response.status)}})
        .catch(error => console.log(error))
    }

    render() { 
        return (<div > 
        {this.state.dataLoaded ?  
        <div className='formContainer'> 
                <h1> Blog </h1>
                <form id='blog_admin' className='form' onSubmit={e => e.preventDefault()}>
                    <label>Titulo</label>
                    <input onChange={(e) =>{this.setState({ tittle: e.target.value })} } type="text" name='ftittle' value={this.state.tittle}/>
                    <label>Link imagen</label>
                    <input onChange={(e) =>{this.setState({ img: e.target.value })} }    type="text" name='fimg' value={this.state.img} />
                    <label>Link del blog</label>
                    <input onChange={(e) =>{this.setState({ link: e.target.value })} } type="text" name='flink' value={this.state.link}/>
                    <button onClick={()=>{this.submit(this.state.tittle,this.state.img,this.state.link)}}>Guardar cambios</button>
                </form>
        </div>
        :<h1>loading ... </h1>}
        </div>);
    }
}
 
export default BlogAdmin;