import WordBadge from "./WordBadge";

import './SynonymList.css';

const SynonymList = props => {    
    return (
        <div className="synonym-list">
            {props.isLoading
            ? <span>Loading</span>
            : props.words.map(word => <WordBadge key={word} word={word}></WordBadge>)
            }
        </div>
    );
};

export default SynonymList;