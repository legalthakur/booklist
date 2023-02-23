import React from 'react'
import { useState } from 'react'

function BookEdit({book , onEdit , onSubmit}) {

  const [editTitle , setEditTitle] = useState(book.title);
  const handleChange = (event) =>{
    setEditTitle(event.target.value);
  }

  const handleSubmit = (event) =>{
      event.preventDefault();
      onEdit(book.id , editTitle);
      onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={editTitle} className='input' onChange={handleChange}></input>
      <button className='button is-primary' >Submit</button>
    </form>
  )
}

export default BookEdit