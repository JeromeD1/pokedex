import './Navbar.css'
import ButtonCard from './ButtonCard';

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
    
    return (
        <div>
            <ButtonCard precedantSuivant="Precedant" onclick={handleClickPrecedant}/>
            <ButtonCard precedantSuivant="Suivant" onclick={handleClickSuivant}/>
        </div>
    )
}



export default Navbar;