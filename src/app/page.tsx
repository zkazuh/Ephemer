import './global.css';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    document.body.classList.add('homepage');}, []);
  return (
    <div className="login-container" id='login-container'>
        <h1>Ephemer</h1>
        <div>
            <div className="conteiner">
                <div>
                <a href="/login" className="login-page">Signin</a>
                </div>
                <div>
                    <a href="/signup" className="signup-page">Signup</a>
                </div>
            </div>
        </div>
    </div>
  );
};

