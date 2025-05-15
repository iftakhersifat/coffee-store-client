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

            <div className='text-center mt-10 mb-10'>
            <p>Follow Us Now</p>
            <h1 className='font-bold text-2xl mb-4'>Follow on Instagram</h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mb-10'>
                <img src="/assets/images/cups/Rectangle 9.png" alt="" />
                <img src="/assets/images/cups/Rectangle 10.png" alt="" />
                <img src="/assets/images/cups/Rectangle 11.png" alt="" />
                <img src="/assets/images/cups/Rectangle 12.png" alt="" />
                <img src="/assets/images/cups/Rectangle 13.png" alt="" />
                <img src="/assets/images/cups/Rectangle 14.png" alt="" />
                <img src="/assets/images/cups/Rectangle 15.png" alt="" />
                <img src="/assets/images/cups/Rectangle 16.png" alt="" />
            </div>
        </div>
    );
};

export default Home;