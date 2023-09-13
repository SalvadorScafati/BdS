import React, { useState, useEffect } from 'react';
import { getBlogs } from '../helpers/axios';
import LoadingLoop from './loadingLoop';
import  '../styles/noticias.css';

function Noticias() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function cargarDatos(){
           const data = await getBlogs();
           setData(data);
           console.log(data);
        }
        cargarDatos();
      }, []);

    if (data.length === 0){
        return <LoadingLoop />
    }
    
    return ( 
    <div className='noticias'>
        {data.map(article => (
            <NoticiasItem key={article._id} data={article} />
      ))}
    </div>);
}

function NoticiasItem(props) {
    const { img, type, tittle, text, autor, link } = props.data;
    

    return (
    <article  className="noticiasItem"onClick={()=>window.open(link, "_blank")}>
        <div className="noticiasItem__img">
             <img  src={img} alt='img_noticia'/>
        </div>
        <span className='categoria'>{type}</span>
        <h1 className='noticiasItem__titulo'>{tittle}</h1>  
        <h2 className='noticiasItem__descripcion' >{text}</h2>  
        <h3 className='noticiasItem__autor'>{autor}</h3>  
       
    </article>);  
}



export default Noticias;