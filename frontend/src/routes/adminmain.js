import React from 'react';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import BlogAdmin from '../components/blog_admin';
import '../styles/adminmain.css';

const cookies=new Cookies();
class Adminmain extends React.Component {
    constructor(props) {
        super(props);
        this.state={redirect:false}
    } 

    componentDidMount(){
       this.redirect()
    }

    redirect(){
        if ((typeof cookies.get("token")=='undefined')){
            this.setState({redirect:true})
        } else{
            const requestOptions = {
                headers: { 'Authorization':' Bearer '+cookies.get("token") },
            }
            fetch("https://backend-bds.herokuapp.com/api/validtoken",requestOptions)
            .then(response =>{if(response.status!==200){cookies.remove("token");this.setState({redirect:true})}})
        }
    }

    render() { 
        return (<div>
             {this.state.redirect && <Navigate to="/entradasecreta" />}
             <div className='blogadmin-container'>
                 <BlogAdmin name="Agenda" type="main"/>
                 <BlogAdmin name="Reseña" type="secondary"/>
             </div>
        </div>);
    }
}
 
export default Adminmain;