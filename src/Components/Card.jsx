import React from 'react';

function Card({ input1, input2 }) {
  return (
    <div className="Card">
      <h2>Información Ingresada:</h2>
      <p>Nombre: {input1}</p>
      <p>Pokemon favorito: {input2}</p>
  
    </div>
    
  );
}

export default Card;