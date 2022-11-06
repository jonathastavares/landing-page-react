import React, {useState} from "react";

const Info = () => {
    const [numero, setNumero] = useState(0);
    const aumentar = () => {
        setNumero(numero+1)
        const container = document.getElementById("container")
        container.classList.add("bg-black")
        container.classList.remove("bg-red-500")
    }
    const diminuir = () => {
        setNumero(numero-1)
        const container = document.getElementById("container")
        container.classList.add("bg-red-500")
        container.classList.remove("bg-black")
    }
    return(
        <div id="container" className="w-screen h-screen flex flex-col justify-center items-center"> 
            <h1 className="text-3xl">{numero}</h1>
            <div className="flex justify-center gap-12 ">
            <button className="py-4 px-8 bg-blue-700 text-white text-xl" onClick={() => diminuir()}>-1</button>
            <button className="py-4 px-8 bg-blue-700 text-white text-xl" onClick={() => aumentar()}>+1</button>
            </div>
        </div>
    );
} 
export default Info;