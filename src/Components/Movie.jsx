import React from 'react'
import MovieCard from './MovieCard'


function Movie({movies}) {
  return (
    <section className="py-5">
    <div className='container'>
        <div className='row'>
      {
      movies.length >= 1 ? (
        movies.map((project) => {
          return <MovieCard key={project.id} project={project} />;
        })
      ) : (
        <h1 className="text-center text-danger fw-bold">No Movies</h1>
      )}
      
      </div>
      </div>
    </section>
  )
}
export default Movie;
