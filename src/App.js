import React from 'react';
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import QuoteGen from "./components/QuoteGen";
import ImageGen from "./components/ImageGen";
import CompositeDisplay from "./components/CompositeDisplay";

function App(){

  return (
    <>
      <Nav />
      <main>
        <Sidebar />
        <div className="grid-container">
          <QuoteGen />
          <ImageGen />
          <CompositeDisplay />
        </div>
      </main>
    </>
  );
}
export default App;
