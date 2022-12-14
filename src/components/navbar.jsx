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
    <div className='bg-quarta h-[60px] flex justify-between px-4 items-center'>
        <img src="./logo.png" alt="logo" className='h-[60%]'/>
        <ul className='hidden md:flex text-white gap-8 items-center h-full'>
            <li className='hover:scale-110'><a href='/cursos'>CURSOS</a></li>
            <li className='hover:scale-110'><a href='/cert'>CERTIFICADOS</a></li>
            <li className='hover:scale-110'><a href='/opo'>OPORTUNIDADES</a></li>
            <li className='hover:scale-110'><a href='/login'>LOGIN</a></li>
        </ul>
        {/* Inicio do menu mobile */}
        <div className='flex md:hidden text-white'>
          <button onClick={() => abrirMenu()}><img src="./menu.png" alt="menu" className='h-[50px]'/></button>
        </div>
        <div className={`${menuAberto ? 'flex md:hidden' : 'hidden'} right-0 absolute top-[100px] bg-[#226F9E]`}>
         <ul className='flex flex-col text-white gap-3 items-center h-full w-[300px]'>
            <li className='hover:scale-110'><a href='#'>CURSOS</a></li>
            <li className='hover:scale-110'><a href='#'>CERTIFICADOS</a></li>
            <li className='hover:scale-110'><a href='#'>OPORTUNIDADES</a></li>
            <li className='hover:scale-110'><a href='#'>LOGIN</a></li>
         </ul>
        </div>
    </div>
  )
};

export default Navbar;
