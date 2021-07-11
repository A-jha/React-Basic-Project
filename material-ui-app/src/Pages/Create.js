fetch("http://localhost:8000/notes", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ title, details, catagory }),
}).then();
