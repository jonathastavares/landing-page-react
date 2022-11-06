import React from "react";

const Footer = () => {
    return(
        <div>
           <div className="bg-gray-200 h-full w-full flex justify-around py-10 text-xs " >
                <ul>
                    <li><a href="#">Condições</a></li>
                    <li><a href="#">Politica de cookies</a></li>
                    <li><a href="#">Configuração de cookies</a></li>
                    <li><a href="#">Politica de privacidade</a></li>
                    <li><a href="#">Declaração de acessibilidade</a></li>
                </ul>
                <ul>
                    <li><a href="#">Bussines </a></li>
                    <li><a href="#">Suporte técnico</a></li>
                    <li><a href="#">Politica de dados</a></li>
                    <li><a href="#">Ajuda e assistencia</a></li>
                    <li><a href="#">Eventos e promoções</a></li>
                </ul>
                <form className="text-white flex flex-col justify-start ">
                    <label className="text-black gap-3"> Receba promoções exclusivas </label>
                    <div>
                        <input className="h-6 border-2 border-black"></input>
                        <button className="bg-black w-20 h-7 rounded">Enviar</button>
                    </div>
                </form>
           </div>
        </div>
    );
}
export default Footer;