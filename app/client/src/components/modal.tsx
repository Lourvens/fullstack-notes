import React, { useState } from "react";
import axios from "axios";
import { NoteProp } from "../types";

export function AddNoteModal({ editMode, note }: IProp) {
  const [noteText, setNoteText] = useState(note?.content);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSucces = () => {};

  function addNote() {
    if (!!noteText) return;

    setLoading(true);
    axios
      .post("/api/notes", { noteText })
      .then(onSucces)
      .finally(() => {
        setLoading(false);
      });
  }

  function updateNote() {
    if (!!noteText || noteText == note?.content) return;

    setLoading(true);
    axios
      .patch(`/api/notes/${note?.id}`, { noteText })
      .then(onSucces)
      .finally(() => {
        setLoading(false);
      });
  }

  const handleClick = () => {
    editMode == true ? updateNote() : addNote();
  };
  return (
    <>
      <input
        type="checkbox"
        id="add-note-modal"
        className="modal-toggle"
        checked={isOpen}
        onChange={(e) => {
          setIsOpen(e.target.checked);
        }}
      />

      <label htmlFor="add-note-modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="font-bold text-lg">Add your notes</h3>
          <textarea
            className="w-full h-32 mt-4 textarea textarea-bordered"
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <div className="modal-action">
            <button
              className="btn btn-accent"
              onClick={handleClick}
              disabled={isLoading}
            >
              {editMode ? "save" : "add"}
            </button>
          </div>
        </label>
      </label>
    </>
  );
}

interface IProp {
  editMode?: boolean;
  note?: NoteProp;
}
