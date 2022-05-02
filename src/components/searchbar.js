import React, {useState} from "react";

const SearchBar = (props) => { //Constantes que fazem uso de componentes do React precisam começar com letras maiúsculas

    //const{onSearch} = props; //const onSearch = props.onSearch
    const [search, setSearch] = useState("Ditto");
    const {onSearch} = props;
    const onChangeHandler = (ev) => { 
        console.log("pokemon: ", ev.target.value);
        setSearch(ev.target.value); //Indica ao React que ele deve renderizar o componente, por o React trabalha com um Virtual DOM e mudanças no DOM não alteram o Virtual Dom
        if(ev.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search); 
    }

    return (
    <div className="searchbar-container">
        <div className="searchbar">
            <input placeholder="Buscar Pokémon" onChange={onChangeHandler}/>
        </div>
        <div  className="searchbar-btn">
            <button onClick={onButtonClickHandler}>Buscar</button>
        </div>
    </div>
     
    );    
};

export default SearchBar;

//Através da aba sources do Inspecionar Elemento é possível colocarmos breakpoints no código para debug