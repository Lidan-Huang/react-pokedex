import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, base_experience }) {
  let url = `${BASE_URL}${id}.png`;

  let style = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'grey',
    backgroundPosition: 'center',
  };
  return (
    <div style={style} className="Pokecard">
      <h4 className="Pokecard name">{name}</h4>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;