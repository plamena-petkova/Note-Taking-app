import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  notes: [],
};


export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action) => {
        if(state.notes === 0) {
            state.notes = action.payload;
            console.log('Yes', state.notes)
        } else {
            state.notes = [...state.notes, action.payload];
        }
        
    },
    deleteNote:(state, action) => {
        console.log(action.payload);
        state.notes = state.notes.findIndex(note => note.id === action.payload);
    },


  },

});

export const { createNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
