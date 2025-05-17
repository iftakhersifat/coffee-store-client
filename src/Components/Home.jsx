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
        <div className='mb-10'>

            {/* banner section */}
           <div className="flex flex-col justify-center items-center gap-4 p-6 h-[650px] bg-cover bg-center relative"
  style={{ backgroundImage: "url('/assets/images/more/3.png')" }}>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
  <div className="absolute bg-black opacity-50"></div>

  {/* Content */}
  <div className="relative text-center text-white px-4">
    <h1 className="text-3xl lg:ml-[550px] md:text-4xl font-bold">
      Would you like a Cup of Delicious Coffee?
    </h1>
    <p className="mt-4 lg:ml-[520px] text-sm md:text-base">
      It's coffee time-Slip & Savor Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.
    </p>
    <button className="bg-[#E3B577] text-black px-6 py-2 rounded mt-6 font-semibold hover:bg-[#c99b58] transition">
      Learn More
    </button>
  </div>
</div>


            {/* image & text section */}
            <div className='bg-[#ECEAE3] p-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center md:text-left'>
                <img className="mx-auto md:mx-0" src="/assets/images/icons/1.png" alt="" />
                <h1 className='text-2xl font-bold mt-4'>Awesome Aroma</h1>
                <p className='mt-2'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
              </div>
              <div className='text-center md:text-left'>
                <img className="mx-auto md:mx-0" src="/assets/images/icons/2.png" alt="" />
                <h1 className='text-2xl font-bold mt-4'>High Quality</h1>
                <p className='mt-2'>We served the coffee to you maintaining <br /> the best quality</p>
              </div>
              <div className='text-center md:text-left'>
                <img className="mx-auto md:mx-0" src="/assets/images/icons/3.png" alt="" />
                <h1 className='text-2xl font-bold mt-4'>Pure Grades</h1>
                <p className='mt-2'>The coffee is made of the green coffee <br /> beans which you will love</p>
              </div>
              <div className='text-center md:text-left'>
                <img className="mx-auto md:mx-0" src="/assets/images/icons/4.png" alt="" />
                <h1 className='text-2xl font-bold mt-4'>Proper Roasting</h1>
                <p className='mt-2'>The coffee is brewed by first roasting <br /> the green coffee beans</p>
              </div>
            </div>
            </div>



            {/* text section */}
            <div className='space-y-4 mt-10 mb-10 text-center'>
                <p>--- Sip & Savor ---</p>
                <h1 className='font-bold text-2xl text-[#331A15]'>Our Popular Products</h1>
                <button className='btn text-white border-[#331A15] bg-[#E3B577]'>Add Coffee</button>
            </div>

            {/* main section */}
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                {
                    card.map(cards=><CardDetails key={cards._id} card={card} setCard={setCard} cards={cards}></CardDetails>)
                }
            </div>

            {/* text sections */}
            <div className='text-center mt-10 mb-10'>
            <p>Follow Us Now</p>
            <h1 className='font-bold text-2xl mb-4'>Follow on Instagram</h1>
            </div>
            
            {/* coffees sections */}
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 p-4 md:p-0 mb-10'>
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