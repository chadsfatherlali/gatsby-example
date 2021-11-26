const axios = require('axios')

const getPokemons = async () => {  
  const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')

  const pokemons = await Promise
    .all(results.map(async (pokemon, index) => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
      
      return data
    }))

  return {
    pokemonsList: results,
    pokemons
  }
}

exports.createPages = async ({ actions: { createPage } }) => {
  const { 
    pokemonsList,
    pokemons
  } = await getPokemons()

  createPage({
    path: '/pokemons',
    component: require.resolve('./src/pages/pokemons.js'),
    context: { data: pokemonsList }
  })

  pokemons.forEach((pokemon) => {
    createPage({
      path: `/pokemons/${pokemon.name}`,
      component: require.resolve('./src/pages/pokemon.js'),
      context: { data: pokemon }
    })
  })
}