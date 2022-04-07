import React, { useState } from 'react';
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote,setNewNote]= useState("a new note")

  const addNote = (event) => {
    event.preventDefault()
    console.log(event.target)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote}
          onChange={addNote}
          />
          <button>Save</button>
      </form>
    </div>
  )
}

export default App;
