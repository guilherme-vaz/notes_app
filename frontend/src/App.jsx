import "./App.css";
import { useState, useEffect } from "react";
import { API } from "./api";
import { Note, CreateNote } from "./components";
import { Flex, Container, Center, Grid } from "@chakra-ui/react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    API.get("/notes")
      .then(({ data }) => {
        setNotes(data);
      })
      .catch((err) => {
        console.log("Algo deu errado :(" + err);
      });
  }, [notes]);

  // Isso funciona, mas os objetos não tem um atributo que possa ser usado para ordená-los, o ID é aleatório por isso fica estranho.
  // const notesSorted = notes.sort((a, b) => a.id - b.id)
  // console.log(notesSorted)

  return (
    <>
      <Flex
        grow={1}
        direction={"column"}
        textAlign="center"
        fontSize="s"
        h={"100%"}
      >
        <Container maxW="100%">
          <h1>Minhas notas</h1>
        </Container>

        <Flex bg="yellow.100" minWidth='max-content' alignItems='center' gap='2'>
          <Center width={"100"}>
            {notes?.map((note) => {
              return (
                <Note
                  key={note.id}
                  title={note.title}
                  content={note.content}
                  id={note.id}
                />
              );
            })}
          </Center>
        </Flex>
      </Flex>

      <CreateNote />
    </>
  );
}

export default App;
