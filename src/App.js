import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState([]);
  const [moves, setMoves] = useState(0);
  const [match, setMatch] = useState(0);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    const newCards = createCards();
    setCards(shuffle(newCards));
  }, []);
  const shuffle = (s) => {
    return s.sort(() => 0.5 - Math.random());
  }

  const handleFlip = (index) => {
    if (flip?.length === 2) {
      window.location.reload();
    }
    else {
      setFlip([...flip, index]);
      setMoves(moves + 1);
    }
    const card1 = flip[0];
    const card2 = flip[1];
    if (card1 === card2) {
      setMatch(match + 1);
      setFlip([]);
      setFinish(true);
    }
  }
  const createCards = () => {
    const cardData = [
      { id: 1, value: '🐶' },
      { id: 2, value: '🐱' },
      { id: 3, value: '🐭' },
      { id: 4, value: '🐹' },
      { id: 5, value: '🐰' },
      { id: 6, value: '🦊' },
      { id: 7, value: '🐻' },
      { id: 8, value: '🐼' }
    ];
    const cards = cardData.map((card) =>
      ({ ...card, flipped: false }));
    return cards
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          4x4 Game
          <div>{finish ? 'Game over' : ''}</div>
          {cards.map((card, index) => (
            <div key={index}
              style={{
                padding: '10px',
              }}
              onClick={() => handleFlip(index)}
            >
              <div>{card.value}</div>
              <div>{card.value}</div>

            </div>
          ))}
        </h2>
      </header>
    </div>
  );
}

export default App;
