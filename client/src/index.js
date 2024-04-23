import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Se importa Bootstrap para todas las paginas
import 'bootstrap/dist/css/bootstrap.min.css';


// Crea un root utilizando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza el componente en el root
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);