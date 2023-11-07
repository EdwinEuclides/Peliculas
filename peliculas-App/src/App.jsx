//import { useState } from 'react'
import movies from './datos/MOVIES_DATA.json'
import './App.css'

/*
"poster":"http://dummyimage.com/227x213.png/cc0000/ffffff",
"title":"Sniper, The",
"releaseDate":"3/13/1905",
"duration":"2:51 PM",
"maturity":"R",
"genres":["Horror","Comedy","Action"],
"director":"Salomon Eslinger",
"mainActors":["Dilly Mazillius","Adrian McElvogue"],
"plot":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
"metascore":96,
"rating":9.3}
*/
export function Movie({poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating}){
  return (
    <li>
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
    </li>
  )
}
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="list-movies">
        <ul>
          <div>
            {movies.map((p)=>(
                <Movie p />     
              ))}
          </div>
        </ul>
      </div>
    </>
  )
}


function App1() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="list-movies">
        <ul>
          <div>
            {movies.map((p)=>(
                <Movie p />     
              ))}
          </div>
        </ul>
      </div>

        {/*
        <Movie 
          poster = "dlfgd" //"http://dummyimage.com/227x213.png/cc0000/ffffff"
          title = "Sniper, The"
          releaseDate = "3/13/1905"
          duration = "2:51 PM"
          maturity = "R"
          genres = {["Horror","Comedy","Action"]}
          director =  "Salomon Eslinger"
          mainActors = {["Dilly Mazillius","Adrian McElvogue"]}
          plot = "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
          metascore = "96"
          rating = "9.3"
        />
            */}
    
      
    
     
     {/*
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
  */}
    </>
  )
}
export default App
