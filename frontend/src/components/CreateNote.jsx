import { useState } from "react";
import { API } from "../api";
import { NoteForm } from "./NoteForm";

export function CreateNote() {
 
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };
  
  const addNote = async () => {
    await API.post("/add", note).catch((err) => {
      console.log("Algo deu errado ao adicionar uma nota :(" + err);
    });
  };

  return (
    <div>
      <NoteForm note={note} handleChange={handleChange} onSubmit={addNote} buttonText={'Salvar'} />
    </div>
  );
}
