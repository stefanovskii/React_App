import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_ALL_CHARACTERS } from './query';
import Card from './Card';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [sortBy, setSortBy] = useState('');

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page,
      status: status || null,
      species: species || null,
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  const sortedCharacters = [...data.characters.results].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'origin') {
      const originA = a.origin?.name || ''; 
      const originB = b.origin?.name || ''; 
      return originA.localeCompare(originB);
    }
    return 0;
  });


  return (
    <>
      <header>
        <h1 className="text-center m-5">Rick and Morty GraphQL App</h1>
        <div className="filters">
          <select className="filter-dropdown" onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="">All Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <select className="filter-dropdown" onChange={(e) => setSpecies(e.target.value)} value={species}>
            <option value="">All Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Robot">Robot</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Mythological Creature">Mythological Creature</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Animal">Animal</option>
            <option value="Disease">Disease</option>
            <option value="Unknown">Unknown</option>
          </select>

          <select className="filter-dropdown" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="origin">Origin</option>
          </select>
        </div>
      </header>

      <div className="row">
        {sortedCharacters.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};

export default App;
