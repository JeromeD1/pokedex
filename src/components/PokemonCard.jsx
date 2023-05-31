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

export default PokemonCard;