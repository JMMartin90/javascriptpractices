const getPokemons = async (limit) => {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API
  const pokemonsRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}/`) // la funcion "fetch" es traer
  const pokemons = await pokemonsRequest.json()
  return pokemons.results
}
//getPokemons()

const getOnePokemon = async (pokemonName) => {
  const pokemonsRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const pokemons = await pokemonsRequest.json()
  return pokemons
}



const listPokemons = async (limit) => {
    const pokemons = await getPokemons(limit)
    const pokePromise = pokemons.map(async (p) => {
      const pokemon = await getOnePokemon(p.name)
      return pokemon
    })
  const pokeList = await Promise.all(pokePromise)
  //console.log(pokeList)
  return pokeList
}

//listPokemons()

const filterPokemonByType = (pokeList, type, type2) => {
  const pokemonByType = pokeList.filter(p => { 
    return p.types.find(pt => pt.type.name === type) &&  // cambiando el  "AND"&& o el "OR"|| podemos elejir coger de la lista pokemon que compartan esos tipos o que tengan ambos.
    (type2 ? p.types.find(pt => pt.type.name === type2) : // ? es igual a "if" y : es igual a "else"
    true)
  })
  return pokemonByType
}

const listPokemonByType = async (limit, type, type2) => {
const pokeList = await listPokemons(limit)
return filterPokemonByType(pokeList, type, type2)
}

(
  async () => {
    const grassPokemons = await listPokemonByType(300, 'grass', 'poison')
    console.log(grassPokemons)
  }
)()

//puta puta puta