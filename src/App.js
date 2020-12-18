import React from "react";
import Credits from "./components/credits/Credits";
import Header from "./components/header/Header";

import Navbar from "./components/navbar/Navbar";
import Images from "./components/unsplash/Images";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Images />
      <Credits />
    </>
  );
};

export default App;
