const router = require("express").Router();
const { findById, createNewNote, validateNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

// router.delete("/notes/:id", (req, res) => {
//   console.log(req.params.id);
//   console.log(res);

//   const noteId = req.params.id;

//   // const result = findById(req.params.id, notes);

//   if (noteId) {
//     res.json(noteId);
//   } else {
//     res.send(404);
//   }
// });

module.exports = router;
