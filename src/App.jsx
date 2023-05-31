import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"
import ButtonCard from './components/ButtonCard'
import Navbar from './components/Navbar'

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
      imgSrc: "https://w7.pngwing.com/pngs/898/80/png-transparent-pokemon-go-pokemon-x-and-y-mewtwo-pokemon-trading-card-game-pokemon-go-purple-mammal-cat-like-mammal-thumbnail.png",
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


  

  return (
    <>
      <div className={styles.containerPokemonCards}>
      <Navbar count={count} setCount={setCount} pokemonList={pokemonList}/>
      <PokemonCard pokemons={pokemonList[count]}/>
    
      {/* <ButtonCard precedantSuivant="Precedant" onclick={handleClickPrecedant}/>
      <ButtonCard precedantSuivant="Suivant" onclick={handleClickSuivant}/> */}
      </div>
      
    </>
  )
}

export default App
