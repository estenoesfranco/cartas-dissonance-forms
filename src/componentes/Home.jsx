import React, { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [datosEnviado, setTextoEnviado] = useState('');

  const abrirFormulario = () => {
    // Agregar lógica para abrir el formulario aquí
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const enviarTexto = () => {
    console.log('Email enviado:', email);
    console.log('Contraseña enviada:', password);
    setTextoEnviado('Email enviado: ' + email + ', Contraseña enviada: ' + password);
  };

  return (
    <div>
      <div>
        <button onClick={abrirFormulario}>Abrir formulario</button>
      </div>
      <div>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Ingrese su correo electrónico."
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Ingrese su Contraseña."
        />
        <button onClick={enviarTexto}>Enviar</button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Home;
