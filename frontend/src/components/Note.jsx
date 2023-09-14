import { API } from "../api";
import { NoteForm } from "./NoteForm";
import { useRef } from "react";
import {
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";

/* eslint-disable react/prop-types */
export function Note({ id, title, content }) {
  // Necessary stuff for the toast
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  function ToastExample(title, des, type) {
    return toast({
      title: title,
      description: des,
      status: type,
      duration: 5000,
      isClosable: true,
    });
  }

  // const updateNote = async (id) => {
  //   await API.put(`/${id}`, note).catch((err) => {
  //     console.log("Algo deu errado ao atualizar a nota :(" + err);
  //   });
  // };

  const deleteNote = async (id) => {
    try {
      await API.delete(`/${id}`);
    } catch (err) {
      alert("Something wrong :( " + err);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-slate-800 rounded">
      <h3 className="font-sans text-xl font-semibold mt-4 mb-4 text-left text-white">
        {title}
      </h3>

      <textarea
        readOnly
        value={content}
        className="rounded-md resize-none mb-2 font-sans h-36 w-80 p-3"
      />

      {/* BUTTONS */}
      <div className="flex flex-row justify-end space-x-3 mt-1 mb-4">
        <button
          onClick={onOpen}
          className="rounded bg-orange-400 px-2 py-1 text-white font-semibold"
        >
          Editar
        </button>

        <button
          onClick={() => deleteNote(id)}
          className="rounded bg-red-500 px-2 py-1 text-white"
        >
          <Trash size={24} />
        </button>
      </div>

      <NoteForm
        finalRef={finalRef}
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        content={content}
        id={id}
        formTitle={"Editar nota"}
      />

      {/* <button onClick={updateNote(id)}>Update</button> */}
      {/* <span></span> */}
    </div>
  );
}
