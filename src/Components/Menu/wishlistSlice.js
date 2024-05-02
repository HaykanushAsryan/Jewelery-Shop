import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetWishlist = createAsyncThunk(
    "wishlist/get",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:3007/Wishlist"
            )
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    }


)
const initialState = {
    wishlist: [],
    loading: false,
    error: ''
}
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    extraReducers: {
        [GetWishlist.pending]: (state) => {
            state.loading = true
            state.error = ""
        }, 
        [GetWishlist.fulfilled]: (state, action)=>{
            state.loading = false
            state.error = ""
            state.wishlist = action.payload
        }, 
        [GetWishlist.rejected]:(state, action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export default wishlistSlice.reducer

// export const { addToWishlist } = wishlistSlice.actions
// export default wishlistSlice.reducer