import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


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

      <h1>Title: {note.title}</h1>
      <h2>Mood: {note.mood}</h2>
      <p>Text: {note.text}</p>
      <button >Delete (not yet working)</button>
      <br />
      <button>Edit (comming soon) </button>
    </>
  )
}

export default JournalPage