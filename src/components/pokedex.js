import React from "react";

const Pokedex = (props) => {
    const{pokemons, loading} = props; //Parametros passados pelo app

    return (
        <div className="pokedex-header">
            <h1>Pokedex</h1>
            <div>Paginação</div>
        </div>
    );
}

export default Pokedex;