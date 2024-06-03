import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  notes: [],
  searchTag:''
};


export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action) => {
        if(state.notes === 0) {
            state.notes = action.payload;
        } else {
            state.notes = [...state.notes, action.payload];
        }
        
    },
    deleteNote:(state, action) => {
        const idToDelete = action.payload   ;
        const notes = state.notes.filter(item => item.id !== idToDelete);
        state.notes = notes;
    },
    deleteAllNotes:(state, action) => {
        state.notes = [];
    },
    editNote:(state, action) => {
        let note = state.notes.find(note => note.id === action.payload.id);
        if (note) {
          note.noteTitle = action.payload.noteTitle;
          note.noteText = action.payload.noteText;
          note.noteDescription = action.payload.noteDescription;
          note.tags = action.payload.noteTags;
        }
    },
    tagSearch:(state, action) => {
      state.searchTag = action.payload
  },
  },

});

export const { createNote, deleteNote, deleteAllNotes, editNote, tagSearch} = noteSlice.actions;

export default noteSlice.reducer;
