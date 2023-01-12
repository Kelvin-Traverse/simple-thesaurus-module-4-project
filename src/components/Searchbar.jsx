import { useState } from 'react';
import './Searchbar.css';

const Searchbar = props => {
    const [searchWord, setSearchWord] = useState('');

    const submitSearch = event => {
        if (event.key === 'Enter') {
            props.action(searchWord)
        }
    }

    return (
        <div className="searchbar-container">
            <input
                id='searchbar'
                placeholder='Find a synonym'
                value={searchWord}
                onChange={e => setSearchWord(e.target.value)}
                onKeyDown={submitSearch}
            />
        </div>
    );
};

export default Searchbar;