import './WordBadge.css';

const WordBadge = props => {
    return (
        <div className="badge">{props.word}</div>
    );
};

export default WordBadge;