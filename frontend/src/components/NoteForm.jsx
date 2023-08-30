/* eslint-disable react/prop-types */
export function NoteForm({ title, content, onSubmit, handleChange, note, buttonText }) {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Note title</label>
        <input
          value={note.title}
          type="text"
          name="title"
          onChange={handleChange}
          defaultValue={title}
        />
        <p></p>
        <label htmlFor="content">Note content</label>
        <input
          value={note.content}
          type="text"
          name="content"
          onChange={handleChange}
          defaultValue={content}
        />
        <p></p>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}
