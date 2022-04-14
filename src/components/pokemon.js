import React from "react";

const Pokemon = (props) => {
    const{pokemon} = props;
    const onFavoriteClick = () => {
        console.log("Pode fav");
    }
    const heart ="❤️";
    return (
    <div className="pokemon-card">
        <div className="pokemon-image-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image"/>
        </div>
        <div className="card-body"> 
            <div className="card-top">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div>
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-favorite-btn" onClick={onFavoriteClick}>
                    {heart}
                </button>
            </div>
        </div>
    </div>)
}
export default Pokemon;