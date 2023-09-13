import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies=new Cookies();
 
const baseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: baseUrl
  });   

export async function getBlogs() {
    try {
      const response = await instance.get('/api/blog');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }

  export async function insertBlog(blogData) {
    try {
      const response = await instance.post('/api/insertblog', blogData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.get("token")}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error inserting data:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }

  export async function deleteBlog(blogData) {
    try {
      const jsonData = JSON.stringify(blogData);
      const response = await instance.post('/api/deleteblog', jsonData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.get("token")}`, 
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }

  export async function updateBlog(blogData) {
    try {
      const jsonData = JSON.stringify(blogData);
      const response = await instance.post('/api/updateblog',jsonData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.get("token")}`, 
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }


