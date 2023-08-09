import { useState } from "react";
import axios from "axios"

function Allpokemons(){
 
const[pokemons,setPokemons] = useState([]);

useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${endcount}&limit=20`).then((response) => {
        setPokemons(response.data.results);
      });
  }, [step]);

return {pokemons}
}

export default Allpokemons();