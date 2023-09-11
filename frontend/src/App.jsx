import "./App.css";
import { useState, useEffect } from "react";
import { API } from "./api";
import { Note, CreateNote } from "./components";
import { Grid, Container, Flex, Center } from "@chakra-ui/react";

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
    <div className="flex flex-col">
      <h1>Minhas notas</h1>

      <div>
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
      </div>

      <CreateNote />
    </div>
  );
}

export default App;
