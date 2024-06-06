import { useLoaderData, useParams } from "react-router-dom";

const Note = () => {

    const { id } = useParams();
    const notes = useLoaderData();

    const note = notes.find(note => note.id === parseInt(id));

  return (
      <div className="m-3">
        <h3>Name: {note.name}</h3>
        <p>Username: {note.username}</p>
        <p>Email: {note.email}</p>
        <p>Phone: {note.phone}</p>
        <p>Website: {note.website}</p>
      </div>
  )
}

export default Note;