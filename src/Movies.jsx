import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMovies, fetchMovies } from './MoviesSlice'
import axios from 'axios'
import MCard from './MCard'
export default function Movies() {
    const movies = useSelector(state => state.movie.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])
    // useEffect(() => {
    //     axios.get('https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1')
    //         .then((res) => {
    //             console.log(res);
    //             dispatch(addMovies(res.data.results))
    //         })
    // }, [])
    return (
        <div className='grid grid-cols-4 gap-3 p-2'>
            {
                movies?.map((movie, i) => {
                    return <MCard key={i} dispatch={dispatch} movie={movie} />
                })
            }
        </div>
    )
}
