import React from "react";
import CardContainer from "../src/components/card-container";
import CreateCardContainer from "./components/create-card-container";
import FaqContainer from "./components/faq-container";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="max-w-[1440px] mx-auto p-4 h-[1500px]">
      <Navbar />
      <CardContainer />
      <CreateCardContainer />
      <FaqContainer />
    </div>
  );
}

export default App;
