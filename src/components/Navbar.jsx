import './Navbar.css'
import ButtonCard from './ButtonCard';
import ButtonPokemon from './ButtonPokemon';
import PropTypes from "prop-types";


const Navbar = ({count, setCount, pokemonList}) => {

    const handleClickSuivant = () => {
        if(count<pokemonList.length - 1){
          setCount(count + 1);
          console.log(count);
        }
        const countPrevious = count+1;
        if(countPrevious===3){
            alert("Pika Pikachuuuu !!!")
          }
    }
  
    const handleClickPrecedant = () => {
          if(count>0){  
            setCount(count - 1);
            console.log(count);
          }
          const countPrevious = count-1;
          if(countPrevious===3){
            alert("Pika Pikachuuuu !!!")
          }
    }

    

    const handleClickPokemon = (event) => {
        const pokemonClique = event.target.textContent;
        const indexPokemonClique = pokemonList.findIndex(pokemon => pokemon.name === pokemonClique);
        setCount(indexPokemonClique);
        if(indexPokemonClique===3){
            alert("Pika Pikachuuuu !!!")
          }
    }
    
    return (
        <>
        <div className="buttonName">
            {pokemonList.map((pokemon) => (
                <ButtonPokemon name={pokemon.name} onclick={handleClickPokemon} key={pokemon.name}/>
                
            ))}
        </div>

        <div>
            <ButtonCard precedantSuivant="Precedant" onclick={handleClickPrecedant}/>
            <ButtonCard precedantSuivant="Suivant" onclick={handleClickSuivant}/>
        </div>
        </>
    )
}


Navbar.propTypes = {
    count: PropTypes.number.isRequired,
    setCount:PropTypes.func.isRequired,
    pokemonList:PropTypes.shape.isRequired
}


export default Navbar;