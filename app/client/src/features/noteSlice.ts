import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Note } from "../types";

interface NoteState {
  list: Note[];
}
const initialState: NoteState = { list: [] };

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      const newList = [...state.list, action.payload];
      state.list = newList;
    },
    updateAll(state, action: PayloadAction<Note[]>) {
      state.list = action.payload;
    },
  },
});

export const { addNote, updateAll } = noteSlice.actions;
export const getNotes = (state: RootState) => state.note.list;
export default noteSlice.reducer;
