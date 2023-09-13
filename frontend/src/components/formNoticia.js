import React, { useState } from 'react';

function FormNoticia(accion) {
  const [blogData, setBlogData] = useState({
    type: '',
    tittle: '',
    img: '',
    link: '',
    autor: '',
    text: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await accion(blogData);
      console.log('Blog updated successfully');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type:</label>
          <input type="text" name="type" value={blogData.type} onChange={handleChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="tittle" value={blogData.tittle} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="img" value={blogData.img} onChange={handleChange} />
        </div>
        <div>
          <label>Link URL:</label>
          <input type="text" name="link" value={blogData.link} onChange={handleChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="autor" value={blogData.autor} onChange={handleChange} />
        </div>
        <div>
          <label>Text:</label>
          <textarea name="text" value={blogData.text} onChange={handleChange} />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default FormNoticia;