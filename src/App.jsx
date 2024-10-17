import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Header from "./components/header";
import Img from "./components/img";
import Menu from "./components/menu";
import Desclaimer from "./components/desclaimer";

function App() {
  return (
    <>
      <Header></Header>
      <Img></Img>
      <Menu></Menu>
      <Desclaimer></Desclaimer>
    </>
  );
}

export default App;
