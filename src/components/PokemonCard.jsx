const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];



const PokemonCard = () => {

    
    const pokemon = pokemonList[0].name;
    const pokemonImage =  pokemonList.find(element => element.name === pokemon).imgSrc;
    

    return (
    <div>
        <figure figcaption={pokemon} >
            <img src= {pokemonImage}></img>
        </figure>
    </div>
    );
}

export default PokemonCard;