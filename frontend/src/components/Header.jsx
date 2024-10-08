import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Header = () => {
  const {setMenu} = useContext(StoreContext)

  const handleMenuClick = () => {
    setMenu("menu");
    location.href = "/#explore-menu";
  }

  return (
    <div className="relative h-[36vw] my-8 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain">
      <div className='absolute animate-fade rounded-lg flex flex-col items-start gap-[1.5vw] max-w-[75%] md:max-w-[65%] bottom-[10%] left-[6vw]'>
        <h2 style={{ fontSize: 'max(3.75vw, 22px)' }} className='font-bold text-neutral-200'>Order your favourite food here</h2>
        <p style={{ fontSize: 'max(1.2vw, 12px)' }} className='text-neutral-200 backdrop-blur-sm rounded-lg hidden sm:block'>At SpiceRoute, you can choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button onClick={handleMenuClick} style={{ fontSize: 'max(0.75vw, 13px)' }} className='bg-neutral-200 py-[1vw] px-[2.3vw] rounded-full hover:bg-neutral-300'>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
