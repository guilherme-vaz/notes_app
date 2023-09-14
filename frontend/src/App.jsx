// import "./App.css";
import { useState, useEffect } from "react";
import { API } from "./api";
import { Note, Navbar } from "./components";


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
    <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 mb-12">
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
      </div>
    </>
  );
}

export default App;
