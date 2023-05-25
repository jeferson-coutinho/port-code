import React, { useEffect, useState } from "react";

import "./index.css";
import Header from "./components/Header";
import LittleHeader from "./components/LittleHeader";
import RoutesRoute from "./routes";
import Footer from "./components/Footer";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Atualiza o tamanjo da tela quando a janela é redimensionada
    window.addEventListener("resize", handleResize);

    //Define o tamanho da tela quando o componente é montado
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {width <= 576 ? <LittleHeader /> : <Header />}
      <RoutesRoute />
      <Footer />
    </React.Fragment>
  );
}

export default App;
