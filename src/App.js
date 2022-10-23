import {useState, useEffect} from
'react'
import { Navbar } from './components/Navbar';
import {Character} from './components/character'





function App() {
  const [character, setCharacter] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      setCharacter(data.results)

      setLoading(false)
  }
  const fetchplanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets/');
      const data = await response.json();
      setPlanets(data.results)

      setLoading(false)
  }



  useEffect(() => {

    fetchCharacters()
    fetchplanets()

  }, [])

  if(loading) {
    return <h1>... loading</h1>
  }

  return (
    <>
    <Navbar />
    <Character data={character}/>
    </>
  );
}

export default App;
