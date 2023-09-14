import { useState, useRef } from "react";
import { API } from "../api";
import { NoteForm } from "./NoteForm";
import { useToast, useDisclosure } from "@chakra-ui/react";
import { PlusCircle } from "@phosphor-icons/react";

export function CreateNote() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

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
    setNote({});
  };

 

  return (
    <>
      <button
        onClick={onOpen}
        className="flex flex-row justify-evenly rounded bg-orange-400 px-2 py-1 text-white font-semibold"
      >
        <PlusCircle size={24} />
        Adicionar nota
      </button>

      <NoteForm
        finalRef={finalRef}
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        formTitle={"Criar nota"}
        handleChange={handleChange}
        onSubmit={addNote}
      />
    </>
  );
}
