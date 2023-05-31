 import PropTypes from "prop-types"

import styles from "./PokemonCard.css"

const PokemonCard = ({pokemons}) => {

    console.log(pokemons);
    

    return (
    <div>
        <figure style={{backgroundColor:pokemons.backColor}}>
            {pokemons.imgSrc != null ? <img src= {pokemons.imgSrc}></img> : <p>???</p>}
            <figcaption>{pokemons.name}</figcaption> 
        </figure>
    </div>
    );
}

PokemonCard.propTypes = {
      pokemons: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        backColor:PropTypes.string,
     }).isRequired
 }


// const PokemonCard = (props) => {

//     console.log(props);
    

//     return (
//     <div>
//         <figure >
//             {props.pokemonImage != null ? <img src= {props.pokemonImage}></img> : <p>???</p>}
//             <figcaption>{props.pokemon}</figcaption> 
//         </figure>
//     </div>
//     );
// }

PokemonCard.propTypes = {
      pokemons: PropTypes.shape({
        pokemon: PropTypes.string.isRequired,
        pokemonImage: PropTypes.string
     })
 }


export default PokemonCard;