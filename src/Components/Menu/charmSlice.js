import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharms = createAsyncThunk(
    "home/getCharms", 
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:3007/Charms"
            );
           
            return response.data;
        } catch (error) {
            console.error(error);
        }
    });
    
export const CharmSlice = createSlice({
    name:"charms",
    initialState:{
        charms:[],
        loading:false,
        error:""
    },
    extraReducers:{
        [getCharms.loading]:(state)=>{
            state.loading = true
            state.error = ""

        },
        [getCharms.fulfilled]:(state, action)=>{
            state.loading = false
            state.error = ""
            state.charms = action.payload
        },
        [getCharms.rejected]:(state, action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})  

export default CharmSlice.reducer