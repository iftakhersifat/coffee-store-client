import React, { useEffect, useState } from 'react';

const Home = () => {
    const [Card, setCard] = useState();
    useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then(res => res.json())
      .then(data => {
        setCard(data);
      });
  }, []);
    console.log(Card)
    return (
        <div>
            <h1>Home Section</h1>
        </div>
    );
};

export default Home;