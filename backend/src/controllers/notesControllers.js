import Note from '../models/Note.js';


export async function getAllNotes(_, res) {
    try{
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(notes);
    }
    catch(error) {
        console.error("Error in getAllNotes controller:", error);
        res.status(500).json({message: "Error fetching notes", error: error.message});
    }
}

export async function getNotesById(req, res) {
    try{

        const { id } = req.params; 
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(note); 
    }catch(error) {
        console.error("Error in getNotesById controller:", error);
        res.status(500).json({message: "Error fetching note by ID", error: error.message});
    }
    
}

export async function createNotes(req, res)  {
    try{
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({message: "Title and content are required"});
        }
        // console.log("Received body:", req.body);
        const newNote = new Note({ title, content });
        await newNote.save();
        
        res.status(201).json({message: "Note created successfully!", note: newNote});
    }
    catch(error) {
        console.error("Error in createNotes controller:", error);
        res.status(500).json({message: "Error creating note", error: error.message});
    }
}

export function updateNotes(req, res) {
    try{
        const { id } = req.params;
        const { title, content } = req.body;

        // if (!title || !content) {
        //     return res.status(400).json({message: "Title and content are required"});
        // }

        Note.findByIdAndUpdate(id, { title, content }, { new: true })
            .then(updatedNote => {
                if (!updatedNote) {
                    return res.status(404).json({message: "Note not found"});
                }
                res.status(200).json({message: "Note updated successfully!", note: updatedNote});
            })
            .catch(error => {
                console.error("Error in updateNotes controller:", error);
                res.status(500).json({message: "Error updating note", error: error.message});
            });
    } catch (error) {
        console.error("Error in updateNotes controller:", error);
        res.status(500).json({message: "Unexpected error occurred", error: error.message});
    }
}

export function deleteNotes(req, res) {
    try{
        const { id } = req.params;

        Note.findByIdAndDelete(id)
            .then(deletedNote => {
                if (!deletedNote) {
                    return res.status(404).json({message: "Note not found"});
                }
                res.status(200).json({message: "Note deleted successfully!"});
            })
            .catch(error => {
                console.error("Error in deleteNotes controller:", error);
                res.status(500).json({message: "Error deleting note", error: error.message});
            });
    } catch (error) {
        console.error("Error in deleteNotes controller:", error);
        res.status(500).json({message: "Unexpected error occurred", error: error.message});
    }
}