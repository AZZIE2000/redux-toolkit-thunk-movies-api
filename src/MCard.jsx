import { Card } from 'flowbite-react'
import React from 'react'
import { Remove } from './MoviesSlice'
export default function MCard({ movie, dispatch }) {
    return (
        <div key={movie?.id} className="max-w-sm">
            <Card
                horizontal={true}
                imgSrc={'https://image.tmdb.org/t/p/w1280' + movie?.poster_path}
            >
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie?.original_title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {movie?.overview.slice(0, 70)}...
                </p>
                <button onClick={() => dispatch(Remove(movie?.id))} className='bg-red-600 p-2'>Delete</button>
            </Card>
        </div>
    )
}
