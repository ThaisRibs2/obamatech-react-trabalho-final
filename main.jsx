// Importa a biblioteca React
import React from "react";
// Importa o ReactDOM, responsável por renderizar a aplicação na página
import ReactDOM from "react-dom/client";
// Importa o componente principal da aplicação
import App from "./App.jsx";
// Importa o CSS global da aplicação
import "./App.css";

// Procura no HTML o elemento com id="root"
// Toda aplicação React será carregada dentro desse elemento
ReactDOM.createRoot(document.getElementById("root")).render(
  // O StrictMode ajuda a identificar possíveis problemas durante o desenvolvimento
  <React.StrictMode>
    {/* Renderiza o componente principal */}
    <App />
  </React.StrictMode>
);
