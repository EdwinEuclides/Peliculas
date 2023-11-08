/* eslint-disable react/prop-types */

function Movie({poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating}){
    return (
      <div>
          <img src={poster} className="poster" alt={`Poster de: ${title}`} />
          <div className='datos'>
          <p className='title'>{title}</p>
          <p>{releaseDate}</p>
          <p>{duration}</p>
          <p>{maturity}</p>
          <p>{genres.join(", ")}</p>
          <p>{rating}</p>
          <p>{metascore}</p>
          <p>{director}</p>
          <p>{mainActors. join(", ")}</p>
          <p>{plot}</p>
          </div>
      </div>
    )
  }

  export default Movie