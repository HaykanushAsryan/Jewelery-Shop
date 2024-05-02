import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMyAccaount = createAsyncThunk("accaount/get", async () => {
    try {
        const response = await axios.get("http://localhost:3007/NewCollection")
        return response.data
    } catch (error) {
        console.error(error);
    }
})

export const getBelts = createAsyncThunk("belt/get", async () => {
    try {
        const response = await axios.get("http://localhost:3007/Bracelets")
        return response.data
    } catch (error) {
        console.error(error);
    }
})

export const getNecklace = createAsyncThunk("necklace/get", async () => {
    try {
        const response = await axios.get("http://localhost:3007/Necklace")
        return response.data
    } catch (error) {
        console.log(error)
    }
})
export const getPendants = createAsyncThunk("pendants/get", async () => {
    try {
        const response = await axios.get("http://localhost:3007/Pendants")
        return response.data
    } catch (error) {
        console.log(error);
    }
})
export const getCharms  = createAsyncThunk("charm/get", async () => {
    try {
        const response = await axios.get("http://localhost:3007/NewCharms")
        return response.data
    } catch (error) {
        console.log(error);
    }
})
export const accaountSlice = createSlice({
    name: "accaount",
    initialState: {
        accaount: [],
        isLoading: false,
        error: "",
        belts: [],
        beltLoading: false,
        beltError: "",
        necklace: [],
        necklaceLoading: false,
        necklaceError: "",
        pendants: [],
        pendantsisLoading: false,
        pendantserror: "",
        charms: [],
        charmsisLoading: false,
        charmserror: "",


    },
    extraReducers: {
        [getMyAccaount.pending]: (state) => {
            state.isLoading = true
            state.error = ""
        },
        [getMyAccaount.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = ""
            state.accaount = action.payload
        },
        [getMyAccaount.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        [getBelts.pending]: (state) => {
            state.beltLoading = true
            state.beltError = ""
        },
        [getBelts.fulfilled]: (state, action) => {
            state.beltLoading = false
            state.beltError = ""
            state.belts = action.payload
        },
        [getBelts.rejected]: (state, action) => {
            state.beltLoading = false
            state.beltError = action.payload

        },

        [getNecklace.pending]: (state) => {
            state.necklaceLoading = true
            state.necklaceError = ""
        },
        [getNecklace.fulfilled]: (state, action) => {
            state.necklaceLoading = false
            state.necklaceError = ""
            state.necklace = action.payload
        },
        [getNecklace.rejected]: (state, action) => {
            state.necklaceLoading = false
            state.necklaceError = action.payload

        },
        [getPendants.pending]: (state) => {
            state.pendantsisLoading = true
            state.pendantserror = ""
        },
        [getPendants.fulfilled]: (state, action) => {
            state.pendantsisLoading = false
            state.pendantserror = ""
            state.pendants = action.payload
        },
        [getPendants.rejected]: (state, action) => {
            state.pendantsisLoading = false
            state.pendantserror = action.payload
        },

        [getCharms.pending]: (state) => {
            state.charmsisLoading = true
            state.charmserror = ""
        },
        [getCharms.fulfilled]: (state, action) => {
            state.charmsisLoading = false
            state.charmserror = ""
            state.charms = action.payload
        },
        [getCharms.rejected]: (state, action) => {
            state.charmsisLoading = false
            state.charmserror = action.payload
        }



    }
})

export default accaountSlice.reducer