export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; // `` serve como  $ em C#, com o intuito de inserir variáveis dentro da string sem concatenação 
        const response = await fetch(url); //Chamada assíncrona
        return response.json();
    } catch(error) {
        console.log("error: ", error);
    }
}
export const getPokemons = async (limit = 50, offset = 0) => { //Valores default
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`; // Query parameters  
        const response = await fetch(url); //Chamada assíncrona
        return response.json();
    } catch(error) {
        console.log("error: ", error);
    }
}