import React from "react";

const Banner = () => {
    return(
        <div className="flex justify-between">
            <div className="flex-col w-[40%] px-4 py-10">
                <h1 className="text-quarta text-4xl">Couser advance</h1>
                <h1 className="text-secundaria text-2xl">Programming web</h1>
                <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum dolorum modi sunt praesentium animi vel, doloribus ducimus doloremque deleniti aliquam dignissimos necessitatibus distinctio labore ab fuga perspiciatis veritatis saepe.
                </p>
                <button className="bg-quarta py-2 text-white px-5 my-4 hover:bg-primaria rounded-r-lg">Fazer teste</button>
            </div>

            <div className="">
                <img src="./banner1.jpg" alt="foto" className="h-[400px]"/>
            </div>
        </div>
    );
}
export default Banner;