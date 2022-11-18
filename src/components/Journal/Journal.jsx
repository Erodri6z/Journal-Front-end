import { Link } from "react-router-dom"

const Journal = (props) => {
  return(
    <>
    {props.notes.map(note =>
      <div key={note._id}>
        <Link to='/journal-page' key={note._id} state={{ note }}>
          <h2>{note.title}</h2>
        </Link>
        <p>
          {note.mood} was the mood
        </p>
        <hr />
      </div>
      )}
    </>
  )
}

export default Journal 