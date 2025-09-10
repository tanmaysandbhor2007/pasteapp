import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
}

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload
      if (!paste.title || paste.title.trim() === "") {
    toast.error("Title is required!");
    return 
      }
      state.pastes.push(paste)
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      toast.success('Paste created successfully')
        
      


      
    },

    updateToPastes: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex(item => item._id === paste._id)
      
      if (index >= 0) {
        state.pastes[index] = paste
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success('Paste updated successfully')
      } else {
        toast.error('Paste not found!')
      }
    },

    resetAllPastes: (state) => {
      state.pastes = []
      localStorage.setItem("pastes", JSON.stringify([]))
      toast.success('All pastes cleared')
    },

    removeFromPastes: (state, action) => {
      const pasteId = action.payload
     const index =state.pastes.findIndex(item=>item._id===pasteId)
     if(index>=0){
      state.pastes.splice(index,1)
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
     }
      toast.success('Paste removed')
    },
  },
})

export const {
  addToPastes,
  updateToPastes,
  resetAllPastes,
  removeFromPastes
} = pasteSlice.actions

export default pasteSlice.reducer
