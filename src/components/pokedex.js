import React from "react";
import Pokemon from "./pokemon";

const Pokedex = (props) => {
    const{pokemons, loading} = props; //Parametros passados pelo app

    return (
        <div>
            <div className="pokedex-header">
            <h1>Pokedex</h1>
            <div>Paginação</div>
            </div>
            
            {loading ? (<div>Carregando, aguenta coração...</div>)
            :(  <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => { //map funciona como um foreach, irá oassar por todos objetos da lista e chamará a função
                        //Em listas, cada filho deve ter uma key única, por isso o key={}
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>)}
        </div>  
    )
}

export default Pokedex;