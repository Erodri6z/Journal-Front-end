import { Navigate, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'



const NoteEntry = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    mood: ''
  })

  const handleChange = (e) => {
    setFormData({... formData,
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
    <div>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <label>
          <h3>How was your day</h3>
        </label>
        <input name="title" id="title-box" type="text" onChange={handleChange}/>
        <label>
          <h3>How did you feel</h3>
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
          <h3>Tell us more</h3>
        </label>
        <textarea name="text" id="textbox" onChange={handleChange} />
        <button type='submit'>
          Publish
        </button>
      </form>
    </div>
  )
}

export default NoteEntry
