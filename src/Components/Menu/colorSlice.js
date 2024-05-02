import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  GetColors = createAsyncThunk("color/get",
async () => {
    try {
        const response = await axios.get(
            "http://localhost:3007/Colors"
        );
       
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const ColorSlice = createSlice({
    name:"color",
    initialState:{
        colors:[],
        loading:false,
        error:""
    },
    extraReducers:{
        [GetColors.loading]:(state)=>{
            state.loading = true
            state.error = ""

        },
        [GetColors.fulfilled]:(state, action)=>{
            state.loading = false
            state.error = ""
            state.colors = action.payload
        },
        [GetColors.rejected]:(state, action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export default ColorSlice.reducer