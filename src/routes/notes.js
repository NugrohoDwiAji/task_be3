import express from 'express'
import { deleteNote, UpdateNote, createNote, getAllNote, getNoteById } from '../controllers/notesController.js';
import { createTable } from '../models/NoteModel.js';
const routeNotes = express.Router();

routeNotes
.route("/note")
.post(createTable,createNote)
.get(getAllNote)
.delete(deleteNote)
routeNotes
.route("/note/:id")
.get(getNoteById)
.put(UpdateNote)


export default routeNotes