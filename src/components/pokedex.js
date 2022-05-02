import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const{pokemons, loading, page, setPage, totalPages} = props; //Parametros passados pelo app
    const onPreviousClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    const onNextClickHandler = () => {
        if(page+1 < totalPages) {
            setPage(page+1)
        }
    }
    return (
        <div>
            <div className="pokedex-header">
            <h1>Pokedex</h1>
            <Pagination
                page={page+1}
                totalPages={totalPages}
                onPreviousClick={onPreviousClickHandler}
                onNextClick={onNextClickHandler}
            />
            </div>
            
            {loading ? (<div>Carregando, aguenta coração...</div>)
            :(  <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => { //map funciona como um foreach, irá oassar por todos objetos da lista e chamará a função
                        //Em listas, cada filho deve ter uma key única, por isso o key={}
                        return (
                            <Pokemon 
                                key={index} 
                                pokemon={pokemon}
                            />
                        );
                    })}
                </div>
            )}
        </div>  
    )
}

export default Pokedex;