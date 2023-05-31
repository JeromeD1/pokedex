import PropTypes from "prop-types"
import "./ButtonCard.css"

const ButtonCard = ({precedantSuivant}) => {


    return (
        <div>
        <button>{precedantSuivant}</button>
        <p>poulet</p>
        </div>
    )
}

ButtonCard.propTypes = {
    precedantSuivant: PropTypes.string.isRequired,
}


export default ButtonCard;