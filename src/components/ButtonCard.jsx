import PropTypes from "prop-types"
import "./ButtonCard.css"

const ButtonCard = ({precedantSuivant, onclick}) => {


    return (
        <button onClick={onclick}>{precedantSuivant}</button>
    )
}

ButtonCard.propTypes = {
    precedantSuivant: PropTypes.string.isRequired,
    onclick:PropTypes.func.isRequired
}


export default ButtonCard;