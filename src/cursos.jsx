import React, { useState, useEffect } from "react";
import axios from 'axios';

const Cursos = () => {
  const chaveDaApi = '431b8418';
  const [titulo, setTitulo] = useState('')
  const [resultado, setResultado] = useState()

  const procurarFilme = async (titulo) => {
    const resposta = await axios.get(`http://www.omdbapi.com/?t=${titulo}&apikey=${chaveDaApi}`)
    setResultado(resposta.data)
  }

    return(
      <div>
        <input placeholder="Titulo" className="rounded-full w-[200px]" onChange={(event) => {
          setTitulo(event.target.value);
        }} />
        <button className="rounded-full px-6 py-2 bg-black text-white" onClick={() => procurarFilme(titulo)}>Procurar Filme</button>
        {resultado && (
          <div className="h-[600px] w-[200px] text-center">
            <img className="w-full h-auto object-cover" src={resultado.Poster} alt="filme" />
            <h1 className="text-xl shadow-xl">{resultado.Title}</h1>
            <p className="text-sm shadow-sm">{resultado.Plot}</p>
          </div>
        )}
      </div>
    );
} 
export default Cursos;