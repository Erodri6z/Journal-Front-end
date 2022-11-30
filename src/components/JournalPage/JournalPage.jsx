import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import './JournalPage.css'


import { getNote } from '../../services/notesService'

const JournalPage = (props) => {
  const [notes, setNotes] = useState([])
  const location = useLocation()
  const note = location.state.note

  useEffect(() => {
    const fetchNoteDetails = async () => {
      const notesData = await getNote(note._id)
      setNotes(notesData)
    }
    fetchNoteDetails(notes)
  }, [note._id])

  
  
  return (
    <>
      <Link to="/page-edit" state={{note}}>
        <button className="edit-btn">Edit</button>
      </Link>
      <h1 className="title">Title: {note.title}</h1>
      <h2 className="mood">Mood: {note.mood}</h2>
      <p className="text">{note.text}</p>
      <button className='delete-btn'onClick={() => props.handleDeleteNote(note._id)}>Delete</button>
      <br />
    </>
  )
}

export default JournalPage