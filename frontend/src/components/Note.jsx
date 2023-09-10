import { API } from "../api";
import { NoteForm } from "./NoteForm";
import { useRef } from "react";
import {
  GridItem,
  Heading,
  Button,
  Text,
  useToast,
  useDisclosure,
  Textarea,
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
    <>
      <GridItem w="100%" bg="teal.300">
        <Heading p={"4"} as="h4" size="md" color={"black"}>
          {title}
        </Heading>
        <Textarea isReadOnly color={"black"} value={content} />

        <GridItem area={"footer"}>
          <Button onClick={onOpen} margin={"4"} colorScheme="green">
            Editar
          </Button>
          
          <NoteForm  finalRef={finalRef} initialRef={initialRef} isOpen={isOpen} onClose={onClose} title={title} content={content} id={id} buttonText={'Salvar'} />

          <Button onClick={() => deleteNote(id)} margin={"4"} colorScheme="red">
            <Trash />
          </Button>
        </GridItem>
      </GridItem>

      {/* <button onClick={updateNote(id)}>Update</button> */}
      <span></span>
    </>
  );
}
