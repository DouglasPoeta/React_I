import React, { useState } from 'react';
import './stylesCadastro.css';
import { Navigate } from 'react-router-dom';

const SignupForm = () => {
    const [registered, setRegistered] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = { fullName, email, password, birthdate, state, country };
        
        try {
            const response = await fetch('http://localhost:3000/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (response.ok) {
                setRegistered(true); // Define o registro como verdadeiro após o cadastro
            } else {
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };
    

    if (registered) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="signup-container">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Nome completo:</label>
                    <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleFullNameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">Data de Nascimento:</label>
                    <input type="date" id="birthdate" name="birthdate" value={birthdate} onChange={handleBirthdateChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="state">Estado:</label>
                    <input type="text" id="state" name="state" value={state} onChange={handleStateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">País:</label>
                    <input type="text" id="country" name="country" value={country} onChange={handleCountryChange} required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default SignupForm;

