import React from "react";
//Components
import Header from "./components/Header";
import Home from "./components/Header/Home";
//Styles
import { GlobalStyle } from "./GlobalStyle";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
