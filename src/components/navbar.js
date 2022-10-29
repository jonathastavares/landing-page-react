import React, { useState } from 'react';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const abrirMenu = () => {
    if (menuAberto) {
      setMenuAberto(false)
    } else {
      setMenuAberto(true)
    }
  }
  return (
    <div className='bg-[#226F9E] h-[100px] flex justify-between px-4 items-center'>
        <img src="./logo.png" alt="logo" className='h-[60%]'/>
        <ul className='hidden md:flex text-white gap-8 items-center h-full'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Descrição</a></li>
            <li><a href='#'>Produto</a></li>
        </ul>
        <div className='flex md:hidden text-white'>
          <button onClick={() => abrirMenu()}><img src="./menu.png" alt="menu" className='h-[50px]'/></button>
        </div>
        <div className={`${menuAberto ? 'flex md:hidden' : 'hidden'} right-0 absolute top-[100px] bg-[#226F9E]`}>
         <ul className='flex flex-col text-white gap-3 items-center h-full w-[200px]'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Descrição</a></li>
            <li><a href='#'>Produto</a></li>
         </ul>
        </div>
    </div>
  )
};

export default Navbar;
