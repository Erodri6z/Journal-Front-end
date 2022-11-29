import { Link } from "react-router-dom"
import React from 'react'


const Journal = (props) => {
  return(
    <>
    {props.notes.map(note =>
    <>
    {note.author._id === props.user.profile ?
      <div key={note._id}>
        <Link to='/journal-page' key={note._id} state={{ note }}>
          <h2>{note.title}</h2>
        </Link>
        <p>
          {note.mood} was the mood
        </p>
        <hr />
      </div>
      :
      <h3>Nothing Yet</h3>
      }
      </> 
      )}
    </>
  )
}

export default Journal 