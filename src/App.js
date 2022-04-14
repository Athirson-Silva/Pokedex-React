import React, {useEffect, useState} from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import NavBar from './components/navbar';
import Pokedex from './components/pokedex';
import SearchBar from './components/searchbar'; 





function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
      //Lista de promessas
      return await getPokemonData(pokemon.url) 
      });

      //Ao final do processamento das promessas, elas são armazenadas no results
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("Fetch pokemon error:", error)
    }

  }

  useEffect(() => {
    console.log("Carregou!")
    fetchPokemons()
  }, [])
  

  /*useEffectSnippet
  first - Quando carregar executa a função X
  return second - Quando o componente é destruído, executa a função Y
  third - Quando o componente third for alterado, mesmo que no dom, o React é obrigado a renderizá-lo também, como se aplicado no virtual DOM 
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
    <div>
      <div>
        <NavBar/>
        <SearchBar/>
      </div>
      <div>
        <Pokedex pokemons={pokemons} loading={loading} /> 
      </div> 
      
    </div>
  );
}

export default App;
