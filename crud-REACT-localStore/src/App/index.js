import React from "react";
import { TodoProvider } from "../components/TodoContext/index";
import {AppUI} from './AppUI'
function App() {
  return (
    <TodoProvider>
      <diV className="container">
        <h1>FORMULARIO DE INGRESO</h1>
        <AppUI/>
      </diV>
    </TodoProvider>
  );
}

export default App;
