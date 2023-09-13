import React, { useState } from 'react';
import { updateBlog, insertBlog } from '../helpers/axios';
import '../styles/adminmain.css';


  function BlogAdminForm({data,salir,modificar}) {
    const [formData, setFormData] = useState({
    _id : data._id,
    type: data.type, 
    tittle: data.tittle,
    link: data.link,
    img: data.img,
    autor: data.autor,
    text: data.text,
    date:  data.date ? data.date : new Date().toISOString().substr(0, 10)
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData._id === 'nuevo') {
        insert(formData);
      } else {
        update(formData);
      }
    };

    async function update(data){
      updateBlog(data);
      modificar(data)
      salir();
   }

   async function insert(data){
    insertBlog(data);
    salir();
   }
    return (
      <div>
        <form onSubmit={handleSubmit} className='form-container'>
        <h1> Modificar </h1>
        <div className='form-field'>
            <label htmlFor="type">Tipo:</label>
            <input
              type="text"
              name="type"
              id="type"
              className='input'
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="tittle">Titulo:</label>
            <input
              type="text"
              name="tittle" // Note the typo, it should be "title"
              id="tittle"
              className='input'
              value={formData.tittle}
              onChange={handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              name="link"
              id="link"
              className='input'
              value={formData.link}
              onChange={handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="img">Imagen URL:</label>
            <input
              type="text"
              name="img"
              id="img"
              className='input'
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              name="autor" // Note the typo, it should be "author"
              id="autor"
              className='input'
              value={formData.autor}
              onChange={handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="text">Texto:</label>
            <textarea
              name="text"
              id="text"
              className='input'
              value={formData.text}
              onChange={handleChange}
              maxLength={170}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="date">Fecha:</label>
            <input
              type="text"
              name="date"
              id="date"
              className='input'
              value={formData.date}
              onChange={handleChange}
              maxLength={170}
            />
          </div>
          <button type="submit" className='submit-button'>Confirmar</button>
          <button onClick={()=>salir()} className='cancel-button'>Cancelar</button>
</form>
      </div>
    );
  }

export default BlogAdminForm;