import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const JournalEdit = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.note)

  const handleChange = (e) => {
    setFormData({...formData, 
    [e.target.name] : e.target.value})
  }
  
  return(
  )
}