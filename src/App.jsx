import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"
import ButtonCard from './components/ButtonCard'

function App() {
  const [count, setCount] = useState(0)

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        backColor: "lightgreen"
    },
    {
      name: "Charmander",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      ,
      backColor: "lightyellow"
    }
    ,
    {
      name:"squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      backColor: "lightblue" 
    }
    ,
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        backColor: "black" 
    },
    {
      name: "mew",
      backColor: "lightpink"
    },
  ];

  const pokemon = pokemonList[2].name;
  const pokemonImage =  pokemonList.find(element => element.name === pokemon).imgSrc;
    

  return (
    <>
      <div className={styles.containerPokemonCards}>
      <PokemonCard pokemons={pokemonList[0]}/>
      <PokemonCard pokemons={pokemonList[1]}/>
      <PokemonCard pokemons={pokemonList[2]}/>
      <PokemonCard pokemons={pokemonList[3]}/>
      <ButtonCard precedantSuivant="suivant"/>
      </div>
      {/* <PokemonCard pokemon={pokemon} pokemonImage={pokemonImage} text1 ={}/> */}
    </>
  )
}

export default App
