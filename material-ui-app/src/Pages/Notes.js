import React from "react";

export const Notes = () => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <>
      <div>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.details}</p>
              <h4>{note.category}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};
