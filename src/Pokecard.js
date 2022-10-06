import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, base_experience }) {
  let url = `${BASE_URL}${id}.png`;

  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img className="Pokecard-image" src={url} alt="pokemon" />
      <p className="Pokecard-type">Type: {type}</p>
      <p calssName="Pokecard-base-experience">EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;