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
        { note.mood === "Sick"?
          <p>Sick asf</p>
          :
          note.mood === "Happy"?
          <p>Happy</p>
          :
          note.mood === "Annoyed"?
          <p>Annoyed</p>
          :
          note.mood === "Shocked"?
          <p>Shocked</p>
          :
          note.mood === "Numb"?
          <p>Ive become so numb</p>
          :
          note.mood === "Anxious"?
          <p>Anxiety attack</p>
          :
          note.mood === "Depressed"?
          <p>Depressed</p>
          :
          note.mood === "Angry"?
          <p>big mad</p>
          :
          <p>emotionless</p>
        }
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