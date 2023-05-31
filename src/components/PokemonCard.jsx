// import PropTypes from "prop-types"


const PokemonCard = (props) => {

    console.log(props);
    

    return (
    <div>
        <figure figcaption= {props.pokemon} >
            <img src= {props.pokemonImage}></img>
        </figure>
    </div>
    );
}

// PokemonCard.propTypes = {
//     // pokemons: PropTypes.shape({
//         pokemon: PropTypes.string.isRequired,
//         pokemonImage: PropTypes.string
//     // })
// }


export default PokemonCard;