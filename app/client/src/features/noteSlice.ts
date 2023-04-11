import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { NoteProp } from "../types";

interface NoteState {
  list: NoteProp[];
}
const initialState: NoteState = { list: [] };

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteProp>) {
      const newList = [...state.list, action.payload];
      state.list = newList;
    },
    updateAll(state, action: PayloadAction<NoteProp[]>) {
      state.list = action.payload;
    },
  },
});

export const { addNote, updateAll } = noteSlice.actions;
export const getNotes = (state: RootState) => state.note.list;
export default noteSlice.reducer;
