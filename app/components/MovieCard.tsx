import React from 'react'

interface MovieCardProps {
    title: string;
    overview: string;
    poster_path : string;
    vote_average : string;
}

const MovieCard =({title, poster_path, overview, vote_average}: MovieCardProps) => {

    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
:'/no-image-available.png';

  return (
    <div className= "bg-white rounded shadow p-4">
        <img className="w-full h-64 rounded mb-4" src={imageUrl} alt="poster" />
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-sm text-gray-500'>{overview.substring(0,150)}</p>
        <p className='text-sm text-black-500'>Voted : {vote_average}</p>
        </div>
  )
}


export default MovieCard