// Footer.js
import React from "react";
import "./styles.css";

function Contacts() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="newsletter-section">
            <h2>Inscreva-se em nossa newsletter</h2>
            <form className="newsletter-form">
              <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit">Inscrever-se</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contatos</h2>
            <p>Telefone: (XX) XXXX-XXXX</p>
            <p>E-mail: contato@exemplo.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contacts;
