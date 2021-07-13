import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
        {/* <Grid container alignItems="center" direction="row-reverse">
          <Grid item xs={3} md={2} alignContent="center">
            1
          </Grid>
          <Grid item xs={3} md={2}>
            2
          </Grid>
          <Grid item xs={3} md={2}>
            3
          </Grid>
          <Grid item xs={3} md={2}>
            4
          </Grid>
          <Grid item xs={3} md={2}>
            5
          </Grid>
        </Grid> */}
        <Grid container justifyContent="center" spacing={2}>
          {notes.map((note) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
                <Paper style={{ padding: 20 }}>
                  <h3>{note.title}</h3>
                  <p>{note.details}</p>
                  <h4>{note.category}</h4>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
