import React, {useState} from "react";
import { searchPokemon } from "../api";

const SearchBar = (props) => { //Constantes que fazem uso de componentes do React precisam começar com letras maiúsculas

    //const{onSearch} = props; //const onSearch = props.onSearch
    const [search, setSearch] = useState("Ditto");
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (ev) => { 
        console.log("pokemon: ", ev.target.value);
        setSearch(ev.target.value); //Indica ao React que ele deve renderizar o componente, por o React trabalha com um Virtual DOM e mudanças no DOM não alteram o Virtual Dom
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search); 

    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        console.log(result);
        setPokemon(result);
    }
    return (
    <div className="searchbar-container">
        <div className="searchbar">
            <input placeholder="Buscar Pokémon" onChange={onChangeHandler}/>
        </div>
        <div  className="searchbar-btn">
            <button onClick={onButtonClickHandler}>Buscar</button>
        </div>
        {pokemon ? (
        <div>
            <div>Nome: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.nome}/>
        </div>
    ) : null}
    </div>
     
    );    
};

export default SearchBar;

//Através da aba sources do Inspecionar Elemento é possível colocarmos breakpoints no código para debug