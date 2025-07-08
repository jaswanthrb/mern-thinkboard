import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},
{
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});


const Note = mongoose.model("Note", noteSchema);
export default Note;
// export { noteSchema }; // Export the schema if needed elsewhere
// export const noteSchemaOptions = {
//   timestamps: true, // Automatically manage createdAt and updatedAt fields
// };
// Note model for MongoDB using Mongoose
// This schema defines the structure of a note document in the database 