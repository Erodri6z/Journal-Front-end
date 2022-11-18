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

      <h1>{note.title}</h1>
      <h2>{note.mood}</h2>
      <p>{note.text}</p>
    </>
  )
}

export default JournalPage