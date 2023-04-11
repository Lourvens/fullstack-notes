import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/header";
import { AddNoteModal } from "./components/modal";
import NoteList from "./components/NoteList";

function App() {
  return (
    <Provider store={store}>
      <div className="mx-auto max-w-7xl">
        <Header />
        <AddNoteModal />
        <NoteList />
      </div>
    </Provider>
  );
}

export default App;
