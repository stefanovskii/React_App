import { useQuery } from '@apollo/client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { GET_ALL_CHARACTERS } from './query';
import Card from './components/Card/Card';
import './App.css';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';

const App = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const { loading, error, data, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page,
      status: status || null,
      species: species || null,
    }
  });

  useEffect(() => {
    if (data?.characters?.info?.pages) {
      setTotalPages(data.characters.info.pages);
    }
  }, [data]);

  // INFINITE SCROLL - the elements get duplicated

  // const observer = useRef()
  // const lastPicElementRef = useCallback(node => {
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();

  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       setPage(prevPageNumber => prevPageNumber + 1);
  //       fetchMore({
  //         variables: { page: page + 1 },
  //         updateQuery: (prevResult, { fetchMoreResult }) => {
  //           if (!fetchMoreResult) return prevResult;
  //           return {
  //             characters: {
  //               ...fetchMoreResult.characters,
  //               results: [...prevResult.characters.results, ...fetchMoreResult.characters.results]
  //             }
  //           };
  //         }
  //       });
  //     }
  //   });

  //   if (node) observer.current.observe(node);
  // }, [loading, totalPages, fetchMore]);

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
        <h1 className="title">Rick and Morty GraphQL App</h1>
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
        {sortedCharacters.map((character, index) => {
          // if(index === sortedCharacters.length - 1){
          //   return <div ref={lastPicElementRef} key={character.id}><Card character={character}/></div>
          // }
          return <Card character={character} key={character.id} />
        })}
      </div>
      {<Pagination totalPages={totalPages} page={page} setPage={setPage} />}
      {/* <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
