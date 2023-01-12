import { Navigate } from 'react-router-dom'
import React, { useState } from 'react' 
import './Journal-Entry.css'


const NoteEntry = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    mood: ''
  })

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      props.handleAddNote(formData)
      Navigate('/journal')
    }catch (err) {
      console.log(err)
    }
  }

  console.log(formData)
  return(
    <div className='journal-entry'>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <label>
          <h3 className='title-label'>How would you describe today?</h3>
        </label>
        <input name="title" id="title-box" type="text" onChange={handleChange}/>
        <label>
          <h3 className='mood-label'>How did you feel</h3>
        </label>
        <select name="mood" id="mood-input" type='text' onChange={handleChange}>
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
        <textarea name="text" id="textbox" onChange={handleChange} />
        <br />
        <button className='publish-btn' type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
            </svg>
          </button>
      </form>
    </div>
  )
}

export default NoteEntry
