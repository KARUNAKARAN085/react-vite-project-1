import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import noteServices from "../services/noteServices";


export const loader = async () => {
    const notes = await noteServices.getNotes();
    return notes;
  }

const Home = () => {

  const notes = useLoaderData();

  return (
    <div>
      <h1>Notes</h1>
      <ol>
      {notes.map(note => (
          <li key={note.id} className="m-2">
            <Link className="list-inline-item" to={`/notes/${note.id}`}>{note.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Home;