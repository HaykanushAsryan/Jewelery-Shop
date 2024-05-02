import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';
import axios from 'axios';



export const postWishlist = createAsyncThunk("wishlist/post", async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:3007/Wishlist", data

        )
        return response.data
    } catch (error) {
        console.error(error);
    }
})

export const updateWishlistCollection = createAsyncThunk("wishlistCollection/put", async (data) => {
    try {
        const response = await axios.put(
            `http://localhost:3007/Collection/${data.id}`, data
        )

        return response.data
        
    } catch (error) {
        console.error(error);
    }
})
export const updateWishlistCharms = createAsyncThunk("wishlistCharms/put", async (data) => {
    try {
        const response = await axios.put(
            `http://localhost:3007/Charms/${data.id}`, data ///?data.id
        )

        return response.data
    } catch (error) {
        console.error(error);
    }
})

export const GetBag = createAsyncThunk("bag/get", async (data) => {
    try {
        const response = await axios.get("http://localhost:3007/Bag")
        return response.data
    } catch (error) {
        console.log(error);
    }
})

export const deleteBag = createAsyncThunk("bag/delete", async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3007/Bag/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
})

export const PostBag = createAsyncThunk("bag/post", async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:3007/Bag", data

        )
        return response.data
    } catch (error) {
        console.error(error);
    }
})
export const PatchBag = createAsyncThunk("bad/patch", async (data) => {
    try {
        const response = await axios.patch(`http://localhost:3007/Bag/${data.id}`, data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

export const getProducts = createAsyncThunk(
    "home/getProducts",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:3007/Collection"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    });

export const PatchCollection = createAsyncThunk(
    "collection/patchCollection",
    async (data) => {
        try {
            const response = await axios.patch(`http://localhost:3007/Collection/${data.id}`,
                data
                // {
                // //   bag: !data.bag,
                //   count: data.count+1
                // }
            )
            return response.data

        } catch (error) {
            console.error(error);
        }
    }
)

export const PatchCharms = createAsyncThunk(
    "charms/patch",
    async (data) => {
        try {
            const response = await axios.patch(`http://localhost:3007/Charms/${data.id}`, data)
            return response.data
        } catch (error) {
            console.error(error);

        }
    }
)

export const GetBagBelt = createAsyncThunk("beltBag/get",
    async () => {
        try {
            const response = await axios.get("http://localhost:3007/BeltBag")
            return response.data
        } catch (error) {
            console.log(error);
        }
    })

export const PostBagBelt = createAsyncThunk("beltBag/post",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:3007/BeltBag", data)
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)
export const editBagBelt = createAsyncThunk("beltBag/patch", async(data)=>{
    try{
       const response = await axios.patch(`http://localhost:3007/BeltBag/${data.id}`, data)
        return response.data
    }catch(error){
        console.log(error);
    }
})
export const deleteBagBelt = createAsyncThunk("bag/delete", async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3007/BeltBag/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
})
export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        products: [],
        bag: [],
        bagBelt: [],
        bagBeltIsLoading: false,
        bagBeltError: "",
        bagIsLoading: false,
        bagError: "",
        // wishlist: [],
        isLoading: false,
        error: ""
    },
    extraReducers: {
        // [editProd.pending]:(state)=>{
        //     state.isLoading = true;
        //     state.error = false
        // },
        // [editProd.fulfilled]:(state, action)=>{
        //     state.wishlist = action.payload;

        // },
        // [editProd.rejected]:(state, action)=>{
        //     state.error = action.payload
        //     state.isLoading = false

        // },
        [GetBagBelt.pending]: (state) => {
            state.bagBeltIsLoading = true
        },
        [GetBagBelt.fulfilled]: (state, action) => {
            state.bagBeltIsLoading = false
            state.bagBeltError = ""
            state.bagBelt = action.payload
        },
        [GetBagBelt.rejected]: (state, action) => {
            state.bagBeltIsLoading = false
            state.bagBeltError = action.payload

        },
        [GetBag.pending]: (state) => {
            state.bagIsLoading = true
            state.bagError = ""
        },
        [GetBag.fulfilled]: (state, action) => {
            state.bag = action.payload
            state.bagIsLoading = false
            state.bagError = ""
        },
        [GetBag.rejected]: (state, action) => {
            state.bagError = action.payload
            state.bagIsLoading = false

        },
        [getProducts.pending]: (state) => {
            state.isLoading = true;
            state.error = false
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;

        },
        [getProducts.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
    // reducers: {
    //     increment: (state) => {
    //         state.value += 1; //synch
    //     },
    // },

});

// export const { increment } = homeSlice.actions;

// export const { addToWishlist } = getProducts.actions
export default homeSlice.reducer;
