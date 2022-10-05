import Pokecard from "./Pokecard";

function Pokedex({pokemons}) {
  return (
    <div>
      {pokemons.map(pokemon => <Pokecard key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      type={pokemon.type}
      base_experience={pokemon.base_experience}/>)}
    </div>
  );
}

export default Pokedex;