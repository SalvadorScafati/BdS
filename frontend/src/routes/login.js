import React from 'react';
import '../styles/login.css';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';

const cookies=new Cookies();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={redirect:false,user:"",pass:""}
    } 

    componentDidMount(){
       this.redirect()
    }

    redirect(){
        if ((typeof cookies.get("token")!=='undefined')){
            this.setState({redirect:true})
        } 
    }

    loginquery(user,pass){
    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user:String(user),pass:String(pass)})
    };
    // https://bds-6hmt.onrender.com/api/login
        fetch('https://bds-6hmt.onrender.com/api/login', requestOptions)
        .then(response =>{return response.json()})
        .then(data =>{
            console.log(data)
            if("token" in data){
                cookies.set('token',data.token,{path:"/"})
                this.setState({redirect:true})
            }else{
                alert(data.message)
            }
        
        })
        .catch(error => console.log(error))
    }

    render() { 
        return <div className='blogadmin-container'><div className='formContainer'>
                {this.state.redirect && <Navigate to="/adminmain" />}
                <h1>LOGIN</h1>
                <form className='form' onSubmit={e => e.preventDefault()}>
                    <label>USER </label>
                    <input onChange={(e) =>{this.setState({ user: e.target.value })} } type="text" name='fname'/>
                    <label> password </label>
                    <input onChange={(e) =>{this.setState({ pass: e.target.value })} } type="text" name='fpassword'/> 
                    <button onClick={()=>{this.loginquery(this.state.user,this.state.pass)}}>login</button>
                </form>
                </div></div>;
    }
}
 
export default Login;