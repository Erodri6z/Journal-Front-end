import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import NoteEntry from './pages/JournalEntry/Journal-Entry'
import JournalPage from './components/JournalPage/JournalPage'
import Journal from './components/Journal/Journal'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as noteService from './services/notesService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchAllNotes = async () => {
      const notesData = await noteService.getAll()
      setNotes(notesData)
    }
    fetchAllNotes()
  }, [])

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddNote = async (newNoteData) => {
    const newNote = await noteService.create(newNoteData)
    setNotes([...notes, newNote ])
    navigate('/journal')
  }

  const handleDeleteNote = async noteId => {
    const deletedNote = await noteService.deletedNote(noteId)
    const newNoteArray = notes.filter(note => note._id !== deletedNote._id)
    setNotes(newNoteArray)
    navigate('/journal')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route 
        path='/new-entry'
        element={ <NoteEntry 
          handleAddNote={handleAddNote}
          />}
        />
        <Route
          path='/journal'
          element={ <Journal
            user={user}
            notes={notes}
          />}
        /> 
        <Route
          path='/journal-page'
          element={
            <JournalPage 
              notes={notes}
              user={user}
              handleDeleteNote={handleDeleteNote}
            />
          }
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
