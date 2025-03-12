const Card = ({ character }) => {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <div>
        <h5>{character.name}</h5>
        <h6>Status: {character.status}</h6>
        <h6>Species: {character.species}</h6>
        <h6>Gender: {character.gender}</h6>
        <h6>Origin: {character.origin.name}</h6>
      </div>
    </div>
  );
};

export default Card;
