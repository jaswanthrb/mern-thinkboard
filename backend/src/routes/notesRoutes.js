import express from 'express';

import { getAllNotes, createNotes, deleteNotes, updateNotes, getNotesById } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNotesById); // Assuming you want to fetch a specific note by ID

router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);



export default router;

