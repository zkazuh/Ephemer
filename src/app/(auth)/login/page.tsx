import '../../global.css';
import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    document.body.classList.add('homepage');}, []);
  return (
    <div className="login-container">
        <h1>Num tem login</h1>
        <div className="login-form">
          <a href='/chat'>Ir para chat</a>
        </div>
    </div>
  );
};