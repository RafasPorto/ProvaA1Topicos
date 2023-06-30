import React from "react";
import CadastrarDespesa from "./components/pages/CadastrarDespesa";
import ListarDespesas from "./components/pages/ListarDespesa";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <div>
      <Nav />

      <CadastrarDespesa/>
      
      <ListarDespesas/>
    </div>
  );
}

export default App;
