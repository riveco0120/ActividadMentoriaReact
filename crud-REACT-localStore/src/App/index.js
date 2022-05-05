import React from "react";
import { TodoProvider } from "../components/TodoContext/index";
import { Formulario } from "../components/Formulario/Formulario";
function App() {
  return (
    <TodoProvider>
      <diV className="container">
        <h1>FORMULARIO DE INGRESO</h1>
        <Formulario />
      </diV>
    </TodoProvider>
  );
}

export default App;
