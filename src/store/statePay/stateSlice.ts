import { createSlice } from '@reduxjs/toolkit'

export const stateSlice = createSlice({
  name: 'counter',
  initialState: {
    status:''
  },
  reducers: {
    setSending: (state) => {
      state.status = 'sending'
    },
    setSuccess: (state) => {
      state.status = 'success'
    },
    setError: (state) => {
      state.status = 'error'
    },
        setNull: (state) => {
      state.status = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSending, setSuccess, setError, setNull } = stateSlice.actions

export default stateSlice.reducer