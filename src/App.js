import React, {useEffect, useState} from 'react';
import { getPokemonData, getPokemons, searchPokemon } from './api';
import './App.css';
import NavBar from './components/Navbar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/Searchbar'; 
import { FavoriteProvider } from './contexts/FavoriteContext';



const favoritesKey = "f"
function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
      //Lista de promessas
      return await getPokemonData(pokemon.url) 
      });

      //Ao final do processamento das promessas, elas são armazenadas no results
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("Fetch pokemon error:", error)
    }
  }

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons);
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);
  
  useEffect(() => {
    console.log("Carregou!")
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    //Caso o pkemon já exista na lista ele será removido, caso contrário, será adicionado
    if(favoriteIndex >= 0 ){
      updatedFavorites.splice(favoriteIndex, 1);
    }
    else{
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }
  
const onSearchHandler = async (pokemon) => {
  if(!pokemon) {
    return fetchPokemons();
  }
  setLoading(true)
  setNotFound(false)
  const result = await searchPokemon(pokemon)
  if(!result) {
    setNotFound(true)
  } 
  else {
    setPokemons([result])
    setPage(0)
    setTotalPages(1)
  }
  setLoading(false)
}
  /*useEffectSnippet
  first - Quando carregar executa a função X
  return second - Quando o componente é destruído, executa a função Y
  third - Quando o componente third for alterado, mesmo que no dom, o React é obrigado a renderizá-lo novamente também, como se aplicado no virtual DOM 
  const fetchPokemons = async ()=> {
  useEffect(() => { 
    first
  console.log("azeite")
    return () => {
      second
    }
  })
  , [third]) 
  */ 



  //pokemons e o estado de loading é passado para o componente Pokedex via props
  return (
    <FavoriteProvider
      value={{
        favoritePokemon: favorites, 
        updateFavoritesPokemons: updateFavoritePokemons,
      }} 
    >
    <div>
      <NavBar/>
      <SearchBar onSearch={onSearchHandler}/>
      {notFound ? ( <div className='not-found-text'> meteu essa?! </div> ) : 
      <Pokedex 
        pokemons={pokemons} 
        loading={loading} 
        page={page}
        setPage={setPage} 
        totalPages={totalPages}
        /> }
    </div>
    </FavoriteProvider>
  );
}

export default App;
