import { createSlice } from "reduxjs/tookit";

const initialState = {
  user: "",
};
//? SLice ile bir global state'in hem action type'leri , hem action creator fonksiyonlarini hem de reducer i tek bir hamlede olusturulabilir.
const authSlice = createSlice({
  name: "auth",  // action type i olusturmak ici
   initialState, // state in baslangic dgeri icin
   reducers:{
    // action creator fonks ve reducer icin
    setUser:(state,action) =>{
        state.user=action.payload
    },
    clearUser:(state)=>{
        state.user=""
    },
   }
});


// olusan action fonskiyonlari sliceAdi.actions dan destructure edilerek export edilir.
export const {setUser,clearUser} = authSlice.actions

//reducer ise sliceAdi.reducer seklinde export edilmelidir.
export default authSlice.reducer