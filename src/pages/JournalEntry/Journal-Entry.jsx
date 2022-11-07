import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'



const NoteEntry = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: ''
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
          <h3>Tell us more</h3>
        </label>
        <textarea name="text" id="textbox" onChange={handleChange} />
      </form>
    </div>
  )
}

export default NoteEntry
