import React,  {useState, useEffect}  from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxiosPoke = () => {
    const [pokemon, setPokemon] = useState([]);
    const addPokemon = async name => {
        console.log(name)
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
        setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
      };
    return [pokemon, addPokemon];
}

export default useAxiosPoke;