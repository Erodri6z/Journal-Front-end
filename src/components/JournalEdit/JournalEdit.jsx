import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './JournalEdit.css'

const JournalEdit = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.note)

  const handleChange = (e) => {
    setFormData({...formData, 
    [e.target.name] : e.target.value})
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateNote(formData)
      navigate('/journal')
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <>
      <div className="edit-page">
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>
            <h3 className='title-label'>How was your day</h3>
          </label>
          <input name="title" id="title-box" value={formData.title} type="text" onChange={handleChange}/>
          <label>
            <h3 className='mood-label'>How did you feel</h3>
          </label>
          <select name="mood" id="mood-input" type='text' value={formData.mood} onChange={handleChange}>
            <option value='none'>Select A Mood</option>
            <option value='Happy'>Happy</option>
            <option value='Annoyed'>Annoyed</option>
            <option value='Shocked'>Shocked</option>
            <option value='Numb'>Numb</option>
            <option value='Angry'>Angry</option>
            <option value='Sick'>Sick</option>
            <option value='Anxious'>Anxious</option>
            <option value='Depressed'>Depressed</option>
          </select>
          <label>
            <h3 className='text-label'>Tell us more</h3>
          </label>
          <textarea name="text" id="textbox" value={formData.text} onChange={handleChange} />
          <br />
          <button className='publish-btn' type='submit'>
            Publish
          </button>
        </form>
      </div>
    </>
  )
}

export default JournalEdit