import React, {useEffect, useState} from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import NavBar from './components/Navbar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/Searchbar'; 





function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const itensPerPage = 50;

  const fetchPokemons = async () => {
    try {
      setLoading(true)
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

  useEffect(() => {
    console.log("Carregou!")
    fetchPokemons()
  }, [page])
  

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
    <div>
      <div>
        <NavBar/>
        <SearchBar/>
      </div>
      <div>
        <Pokedex 
          pokemons={pokemons} 
          loading={loading} 
          page={page}
          setPage={setPage} 
          totalPages={totalPages}/> 
      </div> 
      
    </div>
  );
}

export default App;
