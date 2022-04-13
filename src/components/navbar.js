//Componentes são parte do código que funcionam como módulos
//Todo módulo  é composto pela const módulo, um retorno onde está o conteúdo HTML e o export default módulo

import React from "react";

const NavBar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav>
            <div>
                <img src={logoImg} //A forma de incorporar JavaScript no html é através das chaves {}
                alt="PokeApi-logo"
                className="navbar-img"/>
            </div>
        </nav>
    );
};

export default NavBar;