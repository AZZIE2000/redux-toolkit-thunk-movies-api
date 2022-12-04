import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const res = await axios.get('https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1')
    return res.data.results
})

export const counterSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: []
    },
    reducers: {
        // addMovies: (state, action) => {

        //     return { ...state, movies: action.payload }
        // },
        Remove: (state, action) => {
            const newArr = state.movies.filter((i) => {
                return i.id != action.payload
            })
            return { ...state, movies: newArr }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }, extraReducers(builder) {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return { ...state, movies: action.payload }
        })
    }
})

// Action creators are generated for each case reducer function
export const { addMovies, Remove, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer