import React, { useState } from 'react';
import Card from './Card';

function Formulario() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || input1.startsWith(' ') || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div>
          <label>Ingrese su nombre:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
        </div>
        <div>
          <label>Ingrese su Pokemon favorito:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {submitted && !error && (
        <div className="Card-render-container">
          <Card input1={input1} input2={input2} />
        </div>
      )}
    </div>
  );
}

export default Formulario;