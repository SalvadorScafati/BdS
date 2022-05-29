import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import styled from 'styled-components';

const Staff=styled.div`
    margin-top: 40px;
    padding-bottom: 40px;
    background-color: rgb(240, 207, 20);
    border-bottom: 20px solid rgb(240, 207, 20);
`
const Bar=styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid black;
    background-image:url(${props=>process.env.PUBLIC_URL+"./icons/pattern2.png"});

`


const Img=styled.img`
    width: 100px;
    height: 100px;
    @media screen and (max-width:800px) {
        width: 50px;
         height:50px;
    }
`
const Text=styled.h1`
    font-size: 50px;
    font-family: "benchNine";
    font-weight: 900;
    margin-left: 50px;
    color:rgb(240, 207, 20);
    @media screen and (max-width:800px) {
       font-size: 30px
    }
`
const Container=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
`

const Categoria=styled.h1`
    font-size: 33px;
    font-weight: 600;
    font-family: "benchNine";
    margin-bottom: 0px;
    @media screen and (max-width:800px) {
       font-size: 20px
    }
`
const Persona=styled.h1`
    font-size:  24px;
    font-weight: 200;
    margin-left: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "benchNine";
    @media screen and (max-width:800px) {
       font-size: 17px
    }

`

class About extends React.Component {
    render() { 
        return (<div>
            <NavBar/>
                <Staff>
                        <Bar>
                        <Text >Staff</Text>
                        <Img src={process.env.PUBLIC_URL+"/icons/stafficon.png"} alt="icon"/>
                        </Bar>
                        <Container>
                         <Categoria >Directora</Categoria>
                         <Persona>- Jimena Néspolo</Persona>
                         <Categoria>Consejo de Dirección</Categoria>
                         <Persona>- Laura Cliento</Persona>
                         <Persona>- Clauda Feld</Persona>
                         <Persona>- Florencia Eva González</Persona>
                         <Persona>- Juan José Mendoza </Persona>
                         <Persona>- Walter Romero</Persona>
                         <Categoria>Redacción</Categoria>
                         <Persona>- Javier Geist</Persona>
                         <Categoria>Corrección</Categoria>
                         <Persona>- Carolina Fernández </Persona>
                         <Categoria>Arte y Diseño</Categoria>
                         <Persona>- Antonia Scafati</Persona>
                         <Categoria>Community Manager</Categoria>
                         <Persona>- Matuziken Knigth</Persona>
                         <Categoria>Producción Audiovisual</Categoria>
                         <Persona>- Carolina Rosaspini</Persona>
                         <Categoria>Producción de Podcast</Categoria>
                         <Persona>- Pablo Manzano</Persona>    
                       </Container>
                    </Staff>
            <Footer/>
        </div>);
    }
}
 
export default About;