import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AllPositionsPage from "./pages/AllPositionsPage";
import Search from "./components/Search";

function App() {
  return (
    // <DndProvider backend={HTML5Backend}>
    <>
      <Header />
      {/* <Search/> */}
      {/* <AllPositionsPage/> */}
      <Home/>
      {/* <Footer /> */}
      </>
    // </DndProvider>
  );
}

export default App;
