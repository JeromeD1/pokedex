 import PropTypes from "prop-types"


const PokemonCard = (props) => {

    console.log(props);
    

    return (
    <div>
        <figure >
            <img src= {props.pokemonImage}></img>
            <figcaption>{props.pokemon}</figcaption> 
        </figure>
    </div>
    );
}

PokemonCard.propTypes = {
      pokemons: PropTypes.shape({
        pokemon: PropTypes.string.isRequired,
        pokemonImage: PropTypes.string
     })
 }


export default PokemonCard;