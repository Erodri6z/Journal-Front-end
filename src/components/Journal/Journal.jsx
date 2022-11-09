

const Journal = (props) => {
  return(
    <>
    {props.notes.map(note =>
      <div key={note._id}>
        <h2>{note.title}</h2>
      </div>
      )}
    </>
  )
}

export default Journal 