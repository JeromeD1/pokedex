import PropTypes from "prop-types"
import "./ButtonPokemon.css"

const ButtonPokemon = ({name, onclick}) => {


    return (
   
        <button onClick={onclick}>{name}</button>
    )
}

ButtonPokemon.propTypes = {
    name: PropTypes.string.isRequired,
    onclick:PropTypes.func.isRequired,
    keyPokemon: PropTypes.string
    
}


export default ButtonPokemon;