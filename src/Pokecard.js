const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({id, name, type, base_experience}) {
  let url = `BASE_URL${id}.png`;
  return (
    <div style={{backgroundImage: url}}>
      <h4>{name}</h4>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;