
import movies from './datos/MOVIES_DATA.json'
import Movie from './Componentes/Movie.jsx'
import './App.css'

function App() {
  return movies.map((p)=> <Movie {...p} />);
}

export default App
