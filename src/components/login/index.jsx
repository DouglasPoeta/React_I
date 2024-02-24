import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./styles.css";

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verifica o login no servidor
    try {
      const response = await fetch("http://localhost:3000/Users");
      if (!response.ok) {
        throw new Error("Erro ao carregar dados do servidor");
      }
      const users = await response.json();
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        setLoggedIn(true);
      } else {
        setError("E-mail ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login");
    }
  };

  if (loggedIn) {
    return <Navigate to="/Games" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <NavLink to="/cadastro">Cadastre-se</NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
