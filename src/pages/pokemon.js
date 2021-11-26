import React from 'react'

const Pokemon = ({ pageContext: { data } }) => {
  return (
    <main>
      <h1
        style={{
          textTransform: 'uppercase'
        }}
      >
        {data && data.name}
      </h1>
      {data?.sprites?.other?.home && <img
        src={data.sprites.other.home.front_default} 
      />}
      {data?.abilities && <div>
        <h2>
          Abilities
        </h2>
        <ul>
        {data.abilities.map((ability, index) => (
          <li
            style={{
              textTransform: 'capitalize'
            }} 
            key={index}
          >
            {ability.ability.name}
          </li>
        ))}
        </ul>
      </div>}
      {data?.moves && <div>
        <h2>
          Moves
        </h2>
        <ul>
        {data.moves.map((move, index) => (
          <li
            style={{
              textTransform: 'capitalize'
            }} 
            key={index}
          >
            {move.move.name}
          </li>
        ))}
        </ul>
      </div>}
    </main>
  )
}

export default Pokemon
