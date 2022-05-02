//Componentes são parte do código que funcionam como módulos
//Todo módulo  é composto pela const módulo, um retorno onde está o conteúdo HTML e o export default módulo

import React, {useContext} from "react";
import FavoriteContext from "../contexts/FavoriteContext";

const NavBar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);
    console.log(favoritePokemons)

    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav>
            <div>
                <img src={logoImg} //A forma de incorporar JavaScript no html é através das chaves {}
                alt="PokeApi-logo"
                className="navbar-img"/>
            </div>
            <div //{favoritePokemons.length}
            >
            ❤️
            </div>
        </nav>
    );
};

export default NavBar;