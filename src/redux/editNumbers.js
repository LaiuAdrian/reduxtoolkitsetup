import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const interogareApi = createAsyncThunk(
    'interogareApi/setInterogareApi',
     async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {method: 'GET', redirect: 'follow'}).then(result => result.json());
        return response;
    }

)

const editNumbers =createSlice({
    name:'edit_numbers',
    initialState:{
        data:10,
        pending:false,
        error:false,
        posts:[]
    },
    reducers:{
        addNumber:(state,action)=>{
            state.data = state.data + 1
        },
        removeNr:(state,action)=>{
            state.data =state.data -1
        }
    },
    extraReducers:{
        [interogareApi.pending]:(state)=>{
            state.pending = true;
            state.error = false;
        },
        [interogareApi.fulfilled]:(state,action)=>{
            state.pending = false;
            state.posts = action.payload;
            state.error = false;
        },
        [interogareApi.rejected]:(state)=>{
            state.pending = false;
            state.error = true;
        }
    }
})


export const {addNumber,removeNr} = editNumbers.actions

export default editNumbers.reducer

