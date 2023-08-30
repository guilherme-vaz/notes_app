import { useState } from "react";
import { API } from "../api";

/* eslint-disable react/prop-types */
export function Note({ id, title, content }) {

  // const updateNote = async (id) => {
  //   await API.put(`/${id}`, note).catch((err) => {
  //     console.log("Algo deu errado ao atualizar a nota :(" + err);
  //   });
  // };

  const onDelete = async (id) => {
    await API.delete(`/${id}`)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <br />
      {/* <button onClick={updateNote(id)}>Update</button> */}
      <span></span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
