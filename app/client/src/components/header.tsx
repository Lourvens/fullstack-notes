import { AiOutlinePlusCircle } from "react-icons/ai";
import React from "react";

function Header() {
  return (
    <header className="navbar py-4 md:py-6">
      <h3 className="flex-1 text-2xl font-bold">Note App</h3>
      <label
        htmlFor="add-note-modal"
        className="btn gap-2 btn-accent rounded-sm"
      >
        add note
        <AiOutlinePlusCircle />
      </label>
    </header>
  );
}

export default Header;
