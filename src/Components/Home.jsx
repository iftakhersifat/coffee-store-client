import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';

const Home = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then(res => res.json())
      .then(data => {
        setCard(data);
      });
  }, []);
    console.log(card)
    return (
        <div className='container mx-auto p-4 md:p-0 mt-10 mb-10'>
            <h1>Home Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                {
                    card.map(cards=><CardDetails key={cards._id} card={card} setCard={setCard} cards={cards}></CardDetails>)
                }
            </div>
        </div>
    );
};

export default Home;