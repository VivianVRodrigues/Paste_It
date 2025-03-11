import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
const initialState = {
  /* pastes is key and paste is the arrray that is accessable by state.paste
   because all the changes that is done it should be updated in the state */
  paste: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
};

export const pasteSlice = createSlice({
  name: 'paster',
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      state.paste.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.paste));
      toast("Pasted Successfully !!!!");
    },
    updatePaste: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.paste.findIndex(paste => paste._id === updatedPaste._id);
      if (index !== -1) {
        state.paste[index] = updatedPaste; // Replace the old paste with the updated one
        localStorage.setItem('pastes', JSON.stringify(state.paste)); // Persist the update
        toast("Updated Successfully !!!!");
      }
      else{
        toast("Invail Id !!!!");
      }
    },
    resetPaste: (state) => {
      localStorage.setItem('pastes', JSON.stringify([]));
    },
    removeFromPastes: (state, action) => {
      const pasteid=action.payload;
      const index = state.paste.findIndex(paste => paste._id === pasteid);
      if (index !== -1) {
        state.paste.splice(index, 1); // Removes the paste at that index
        localStorage.setItem("pastes", JSON.stringify(state.paste)); // Save back to localStorage
        toast("Removed Successfully !!!!")
      }
      else{
        toast("Invail Id !!!!");
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPaste, updatePaste, resetPaste, removeFromPastes} = pasteSlice.actions;

export default pasteSlice.reducer;
