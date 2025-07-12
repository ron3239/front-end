import { createSlice } from '@reduxjs/toolkit'

export const instructionSlice = createSlice({
  name: 'instruction',
  initialState: {
    isOpen:false
  },
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOpen } = instructionSlice.actions

export default instructionSlice.reducer