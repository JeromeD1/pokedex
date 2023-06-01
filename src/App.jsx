import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"
import ButtonCard from './components/ButtonCard'
import Navbar from './components/Navbar'
import ButtonPokemon from './components/ButtonPokemon'
import { useEffect } from 'react'

function App() {
  
  useEffect(
    () => {
      alert("Bienvenue Pokemon trainer, voici les pokemons que vous avez en votre possession !")
      
    }
      ,
    []
  )
  
  const [count, setCount] = useState(0)

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        backColor: "lightgreen",
        figCaptionColor:"red"
    },
    {
      name: "Charmander",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      ,
      backColor: "lightyellow",
      figCaptionColor:"purple"
    }
    ,
    {
      name:"squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      backColor: "lightblue",
      figCaptionColor:"yellow"
    }
    ,
    {
      name:"pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      backColor: "rgb(255,100,100)",
      figCaptionColor:"blue"
    },
    {
      name: "mew",
      imgSrc: "https://w7.pngwing.com/pngs/898/80/png-transparent-pokemon-go-pokemon-x-and-y-mewtwo-pokemon-trading-card-game-pokemon-go-purple-mammal-cat-like-mammal-thumbnail.png",
      backColor: "lightpink",
      figCaptionColor:"green"
    },
  ];

  // const [pokemonIndex, setPokemonIndex] = useState(count);
  

  return (
    <>
      <div className={styles.containerPokemonCards}>
      <Navbar count={count} setCount={setCount} pokemonList={pokemonList} />
      <PokemonCard pokemons={pokemonList[count]}/>
      {/* <PokemonCard pokemons={pokemonList[pokemonIndex]}/> */}
    
      </div>
      
    </>
  )
}

export default App
