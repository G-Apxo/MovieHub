import React from 'react'
import { useState, useEffect } from 'react'

const Moviedetails = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const uniqueMovies = async () => {
            const mobieById = await fetch(
                `https://api.themoviedb.org/3/movie/${window.location.href.split("/")[4]}?api_key=04c35731a5ee918f014970082a0088b1`
                
                )
                const movie = await mobieById.json()
                setMovie(movie)
        }
        uniqueMovies()
        console.log(movie)
       
    } , [movie.id]);
  return (
    <div>
      <div className="movie_details">
        <div className="movie_details_img">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} />
        </div>
      </div>
    </div>
  )
}

export default Moviedetails