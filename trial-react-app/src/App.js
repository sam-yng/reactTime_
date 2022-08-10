import React, { useState } from "react";
import './index.css';

function App() {

  const [visibile, setVisibility] = useState(false);
  const divStyle = { display: visibile }

  const handleClick = event => {
    setVisibility(current => !current);
  };

  const closeTab = () => window.close();


  return (
    <div className="h-screen bg-black">
      <div style={divStyle} className="flex justify-center items-center h-1/2 pt-48">
        <div className="w-96">
          <h1 className="text-center font-pStart text-red-600 text-4xl animate-shake">
            the game.. again
          </h1>
          <div className="pt-6 text-center space-y-4 font-pStart text-white text-sm">
            <h2 className="cursor-pointer hover:scale-110 hover:text-gray-300" onClick={() => { handleClick(); setVisibility('none'); }} >
              Start
            </h2>
            <h2 onClick={closeTab} className="cursor-pointer hover:scale-110 hover:text-gray-300">
              Exit
            </h2>
          </div>
        </div>
      </div>

      {visibile && (
        <div className="flex justify-center items-center h-1/2 pt-48">
          <div className="w-96">
            <h1 className="overflow-hidden whitespace-nowrap m-auto animate-typing text-center font-pStart text-white">
              Are you ready?
            </h1>

          </div>
        </div>
      )}

    </div >


  )
}

export default App;
