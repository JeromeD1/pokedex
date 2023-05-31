import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[0].name;
  const pokemonImage =  pokemonList.find(element => element.name === pokemon).imgSrc;
    

  return (
    <>
      <PokemonCard pokemon={pokemon} pokemonImage={pokemonImage}/>
    </>
  )
}

export default App
