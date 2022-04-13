import React, {useEffect, useState} from 'react';
import { getPokemons } from './api';
import './App.css';
import NavBar from './components/navbar';
import Pokedex from './components/pokedex';
import SearchBar from './components/searchbar'; 





function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = async ()=> {
    try {
      setLoading(true)
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("Fetch pokemon error:", error)
    }

  }

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
      <NavBar/>
      <SearchBar/> 
      <Pokedex pokemons={pokemons} loading={loading} /> 
    </div>
  );
}

export default App;
