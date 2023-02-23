import React from 'react'
import { useState , useEffect} from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css'
import axios from 'axios';  


function App() {
  const [books ,setBooks] = useState([]);

  const fetchBooks = async () =>{
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data)
  };

  
  useEffect(()=>{
    fetchBooks()
  },[])
 

  const editByID = async (id , newTitle)=>{

     const response= await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle
    })


    const editedBooks = books.map((book)=>{
      if(book.id===id){
        return{...book , ...response.data};
      }
      return book
    })
    setBooks(editedBooks)
  }

  const deleteByID = async(id) =>{

    await axios.delete(`http://localhost:3001/books/${id}`);

      const updatedBooks = books.filter((book)=> {
        return book.id !==id;
      });

      setBooks(updatedBooks);
  }

  const createBook = async (title) => {

      const response=await axios.post('http://localhost:3001/books',{
      title
    });

    const updatedBooks = [
        ...books , response.data
    ]
    setBooks(updatedBooks);
  }

  return (
    <div className='app'>
      <h1>Book List</h1>
        <BookList onDelete = {deleteByID} onEdit = {editByID} books = {books}/>
        <BookCreate onCreate = {createBook} />
    </div>
  )
} 

export default App