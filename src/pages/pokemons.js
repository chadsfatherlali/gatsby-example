import React from 'react'

const Pokemons = ({ pageContext: { data } }) => {
  return (
    <main>
      {data && data.map((pokemon) => (
        <div>
          <h2
            style={{
              textTransform: 'capitalize'
            }}
          >
            {pokemon.name}
          </h2>
          <a 
            href={`/pokemons/${pokemon.name}`}
            target="_blank"
          >
            View details
          </a>
        </div>
      ))}
    </main>
  )
}

export default Pokemons
