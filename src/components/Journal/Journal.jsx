import { Link } from "react-router-dom"
import React from 'react'
import './Journal.css'


const Journal = (props) => {
  return(
    <>
    {props.notes.map(note =>
    <>
    {note.author._id === props.user.profile ?
      <div className="page-preview" key={note._id}>
        <Link to='/journal-page' className="page-link" key={note._id} state={{ note }}>
          <h2 className="title-link">{note.title}</h2>
        </Link>
        <p>
          {note.mood} was the mood
        </p>
        <hr />
      </div>
      :
      <span></span>
    }
    </> 
    )}
    </>
  )
}

export default Journal 