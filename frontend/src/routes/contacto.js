import React from 'react';
import NavBar from '../components/navbar';
import '../styles/contacto.css'
import Footer from '../components/footer';

class Contacto extends React.Component {
    
    constructor(props){
        super(props)
        this.state={response:"",mensaje:false,invisible:'visible',sending:false,email:"",name:"",text:""}
    }

    enviar(email,name,text){
        if (email==="" || name==="" || text==="" || this.validateEmail(email)===false){
            return
        }
        this.setState({invisible:'hidden',sending:true})
        setTimeout(()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({mail:String(email),name:String(name),text:String(text)})
        };
        fetch('https://backend-bds.herokuapp.com/mail/send', requestOptions)
        .then(response =>{if (response.status===200){
              this.setState({response:"Mensaje enviado",mensaje:true,sending:false})
              setTimeout(()=>{ this.setState({invisible:'visible',mensaje:false})},5000)
        }else{
            this.setState({response:"ocurrio un problema, mensaje no enviado",mensaje:true,sending:false})
            setTimeout(()=>{ this.setState({invisible:'visible',mensaje:false})},5000)
        }})
        .catch(error =>{this.setState({invisible:'visible',sending:false});console.log(error)})
        },4000)
    }

     validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    render() { 
        return (<div>
        <NavBar/>
            <div className='containerForm' onSubmit={e => e.preventDefault()}>
                <form id='formContacto'>
                    <h1> Contactanos </h1>
                    <input  onChange={(e) =>{this.setState({email: e.target.value })} } type="email" id="femail" placeholder='email'  required/>
                    <input  onChange={(e) =>{this.setState({name: e.target.value })} }  type="text"  id="fname" placeholder='Nombre'  required/>
                    <input  onChange={(e) =>{this.setState({text: e.target.value })} } type="text"   id="ftext" placeholder='Mensaje' required/>
                    <button style={{visibility:this.state.invisible}} onClick={()=>this.enviar(this.state.email,this.state.name,this.state.text)}>enviar</button>
                    {this.state.sending && <img src={process.env.PUBLIC_URL+"/icons/messageicon.png"} alt='messageicon'/>}
                    {this.state.mensaje && <h2 className='estadodelmensaje'>{this.state.response}</h2>}
                </form>
                
            </div>
         <Footer />
        </div>);
    }
}
 
export default Contacto;