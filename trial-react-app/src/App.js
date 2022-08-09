import React, { useState } from "react";
import './index.css';

function App() {

  const [visibility, setVisibility] = useState();
  const divStyle = { display: visibility }


  function handleClick() {
    setVisibility(current => !current);
  };

  return (
    <div className="h-screen bg-black">
      <div className="flex justify-center items-center h-1/2 pt-48">
        <div style={divStyle} className="w-96">
          <h1 className="text-center font-pStart text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl animate-breathing">
            the game.. again
          </h1>
          <div className="pt-6 text-center space-y-4 font-pStart text-white text-sm">
            <h2 className="cursor-pointer hover:scale-110 hover:text-gray-300"
              onClick={() => { setVisibility('none') }} >
              Start
            </h2>
            <h2 className="cursor-pointer hover:scale-110 hover:text-gray-300">
              Exit
            </h2>
          </div>
        </div>
      </div >
      <div className="flex justify-center items-center h-1/2 pt-48">
        <div className="w-96">
          <h1 className="text-center hidden font-pStart text-white">
            Are you ready?
          </h1>


        </div>
      </div>
    </div >


  )
}

export default App;
