const NoteEntry = (props) => {
  return(
    <div>
      <form>
        <label>
          <h3>How was your day</h3>
        </label>
        <input name="title" id="title-box" />
        <textarea name="text" id="textbox" />
      </form>
    </div>
  )
}

export default NoteEntry
