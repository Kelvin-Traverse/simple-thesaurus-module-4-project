import {  useState } from 'react';
import { useQuery } from 'react-query';

import Searchbar from './components/Searchbar';
import SynonymList from './components/SynonymList';

import './App.css';

function App() {
  const [word, setWord] = useState('');

  const fetchSynonyms = async _ => {
    if (!word) {
      return null;
    }

    const res = await fetch(`http://api.datamuse.com/words?rel_syn=${word}&v=enwiki`);
    return res.json();
  }
  
  const {data, isLoading} = useQuery([word], fetchSynonyms);
  
  let words;
  if (!isLoading && data) {
    try {
      words = data.map(e => e.word);
    } catch (e) {
      console.error(e);
    }
  } else {
    words = [];
  }

  return (
    <div className="App">
      <Searchbar action={word => setWord(word)}></Searchbar>
      {
        isLoading
        ? <SynonymList isLoading={isLoading}></SynonymList>
        : <SynonymList words={words}></SynonymList>
      }
    </div>
  );
}

export default App;
