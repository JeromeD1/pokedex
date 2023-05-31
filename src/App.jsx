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
      name:"pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      backColor: "rgb(255,100,100)" 
    },
    {
      name: "mew",
      backColor: "lightpink"
    },
  ];

  // const pokemon = pokemonList[2].name;
  // const pokemonImage =  pokemonList.find(element => element.name === pokemon).imgSrc;
    
  // const handleClick = (action) => {
  //   if(action==="Suivant"){
  //     if(count<pokemonList.length - 1){
  //       setCount(count + 1);
  //     }
  //   } else if(action==="Precedant"){
  //       if(count>0){  
  //         setCount(count - 1);
  //       }
  //   }
  // }


  const handleClickSuivant = () => {
      if(count<pokemonList.length - 1){
        setCount(count + 1);
      }
  }

  const handleClickPrecedant = () => {
        if(count>0){  
          setCount(count - 1);
        }
  }

  return (
    <>
      <div className={styles.containerPokemonCards}>
      <PokemonCard pokemons={pokemonList[0]}/>
      <PokemonCard pokemons={pokemonList[1]}/>
      <PokemonCard pokemons={pokemonList[2]}/>
      <PokemonCard pokemons={pokemonList[3]}/>
      <PokemonCard pokemons={pokemonList[count]}/>
      {/* <ButtonCard precedantSuivant="Suivant"/> */}
      <ButtonCard precedantSuivant="Precedant" onclick={handleClickPrecedant}/>
      <ButtonCard precedantSuivant="Suivant" onclick={handleClickSuivant}/>
      </div>
      {/* <PokemonCard pokemon={pokemon} pokemonImage={pokemonImage} text1 ={}/> */}
    </>
  )
}

export default App
