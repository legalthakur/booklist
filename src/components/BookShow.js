import React, { useState } from 'react'
import BookEdit from './BookEdit';

function BookShow({book , onDelete, onEdit}) {

  const [showEdit , setShowEdit] = useState(false);
  const handleDelete = () =>{
    onDelete(book.id);
  };

  const handleEdit = () =>{
    setShowEdit(!showEdit);
  };
  const handleSubmit = () =>{
    setShowEdit(false);
  }
  let content = <h3>{book.title}</h3>
  if(showEdit===true){
    content = <BookEdit book ={book} onSubmit={handleSubmit} onEdit={onEdit}/>
  }


  return (
    <div className='book-show' >
      <img alt = "books"src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
      {content}
    <div className='actions'>
      <button className='edit' onClick={handleEdit}>Edit</button>
      <button className='delete'onClick={handleDelete} >delete</button>
    </div>
    </div>
  )
}

export default BookShow 