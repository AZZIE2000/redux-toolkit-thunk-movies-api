import { configureStore } from '@reduxjs/toolkit'
import MoviesSlice from '../MoviesSlice'
export default configureStore({
    reducer: {
        movie: MoviesSlice
    }
})