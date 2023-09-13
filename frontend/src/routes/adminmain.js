import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Navigate} from 'react-router-dom';
import '../styles/adminmain.css';
import { deleteBlog, getBlogs } from '../helpers/axios';
import LoadingLoop from '../components/loadingLoop';
import BlogAdminForm from '../components/blog_adminForm';



const cookies = new Cookies();

function Adminmain() {
  const [redirect, setRedirect] = useState(false);
  const [blog, setBlogs] = useState([]);
  const [seleccion, setSeleccion] = useState(null);

  useEffect(() => {
    const checkTokenAndLoadData = async () => {
      await redirectIfTokenInvalid();
      cargarDatos();
    };

    checkTokenAndLoadData();
  }, []);

    const redirectIfTokenInvalid = async () => {
        if (typeof cookies.get('token') === 'undefined') {
          setRedirect(true);
        } else {
          const requestOptions = {
            headers: { Authorization: 'Bearer ' + cookies.get('token') },
          };
    
          const response = await fetch('https://bds-6hmt.onrender.com/api/validtoken', requestOptions);
    
          if (response.status !== 200) {
            cookies.remove('token');
            setRedirect(true);
          }
        }
      };

  async function cargarDatos(){
    const data = await getBlogs();
    setBlogs(data);
 }

 function salir(){
  setSeleccion(null)
 }

 function modificar(data){
  setSeleccion(data)
 }

 function handleUpdate(data,actualizar){
  if (actualizar){
    const updatedBlog= blog.map((obj) =>
    obj._id === data._id ? data : obj
  );
  setBlogs(updatedBlog);
  } else {
    window.location.reload(); 
    /*
    AGREGAR METODO DE INSERT PARA QUE
    DEVUELVA EL ID Y AGREGARLO AL DATA
    PARA ASI EVITAR EL REFRESH DE LA 
    PAGINA.
    const updatedBlog = blog.slice()
    updatedBlog.push(data)
    setBlogs(updatedBlog);*/
  }
 }

 function handleAgregar(){
  setSeleccion({_id:'nuevo'})
 }

 if (blog.length === 0){
    return  <LoadingLoop />
}
if (redirect){
  return <Navigate to="/entradasecreta" />
}

if (seleccion !== null ){
  return (<BlogAdminForm data={seleccion} salir ={salir} modificar={handleUpdate}/>);
}

  return (
    <div>
      <div className='form-container'>
        <button onClick={()=>handleAgregar()} className='add-button'>
            Agregar
        </button>
        {blog.map(article =>(
           <NoticiasItem key={article._id} data={article} modificar={modificar} />
        ))}
        </div>
    </div>
  );
}

function NoticiasItem({data,modificar}) {
  const {tittle,_id} = data;


   async function handleDelete(){
    const blogData = {
      id: _id,
    };
    await deleteBlog(blogData);
    window.location.reload();
  }



  return (
   <section className='noticia'>
    <h1>{tittle}</h1>
      <button onClick={()=>modificar(data)}  className='submit-button'>
            Modificar
      </button>
    <button onClick={handleDelete}  className='cancel-button'>Borrar</button>
   </section>
   );
}



export default Adminmain;
