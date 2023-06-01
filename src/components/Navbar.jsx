import './Navbar.css'
import ButtonCard from './ButtonCard';
import ButtonPokemon from './ButtonPokemon';

const Navbar = ({count, setCount, pokemonList}) => {

    const handleClickSuivant = () => {
        if(count<pokemonList.length - 1){
          setCount(count + 1);
          console.log(count);
        }
    }
  
    const handleClickPrecedant = () => {
          if(count>0){  
            setCount(count - 1);
            console.log(count);
          }
    }

    

    const handleClickPokemon = (event) => {
        const pokemonClique = event.target.textContent;
        const indexPokemonClique = pokemonList.findIndex(pokemon => pokemon.name === pokemonClique);
        setCount(indexPokemonClique);
    }
    
    return (
        <>
        <div classname="buttonName">
            {pokemonList.map((pokemon) => (
                <ButtonPokemon name={pokemon.name} onclick={handleClickPokemon} keyPokemon={pokemon.name}/>
                
            ))}
        </div>

        <div>
            <ButtonCard precedantSuivant="Precedant" onclick={handleClickPrecedant}/>
            <ButtonCard precedantSuivant="Suivant" onclick={handleClickSuivant}/>
        </div>
        </>
    )
}



export default Navbar;