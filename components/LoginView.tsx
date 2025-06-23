
import React, { useState } from 'react';
import Input from './common/Input';
import Button from './common/Button';
import { APP_NAME } from '../constants'; // For default app name

interface LoginViewProps {
  onLoginSuccess: (username: string, password: string) => void; 
  setLoginAttemptError: (error: string | null) => void; 
  loginError: string | null; 
  companyLogoUrl?: string;
  companyName?: string;
}

const LoginView: React.FC<LoginViewProps> = ({ 
    onLoginSuccess, 
    setLoginAttemptError,
    loginError, 
    companyLogoUrl, 
    companyName 
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const handleLoginAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null); 
    setLoginAttemptError(null); 

    if (!username.trim()) {
      setLocalError("Nome de usuário é obrigatório.");
      return;
    }
    if (!password) { 
      setLocalError("Senha é obrigatória.");
      return;
    }

    onLoginSuccess(username, password); 
  };

  const effectiveCompanyName = companyName || APP_NAME;
  const displayLoginError = localError || loginError;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-secondary-800 p-8 rounded-xl shadow-2xl space-y-6 transform transition-all hover:scale-105 duration-300">
          <div className="text-center space-y-4">
            {companyLogoUrl ? (
              <img 
                src={companyLogoUrl} 
                alt={`${effectiveCompanyName} Logo`} 
                className="mx-auto h-20 w-auto object-contain transition-opacity duration-500 ease-in-out hover:opacity-80"
              />
            ) : (
              <div className="mx-auto h-20 w-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-transform duration-300 ease-out hover:rotate-6">
                {effectiveCompanyName.substring(0, 1)}
              </div>
            )}
            <h1 className="text-3xl font-bold text-primary-400 tracking-tight">
              {effectiveCompanyName}
            </h1>
            <p className="text-secondary-300">Bem-vindo! Faça login para continuar.</p>
          </div>

          <form onSubmit={handleLoginAttempt} className="space-y-6">
            <Input
              label="Usuário"
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Seu usuário"
              required
              containerClassName="mb-0"
              labelClassName="text-secondary-300"
              className="bg-secondary-700 text-secondary-100 border-secondary-600 placeholder-secondary-400 focus:ring-primary-500 focus:border-primary-500"
            />
            <Input
              label="Senha"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
              containerClassName="mb-0"
              labelClassName="text-secondary-300"
              className="bg-secondary-700 text-secondary-100 border-secondary-600 placeholder-secondary-400 focus:ring-primary-500 focus:border-primary-500"
            />

            {displayLoginError && (
              <p className="text-sm text-red-300 bg-red-800 bg-opacity-30 p-3 rounded-md border border-red-700 text-center">
                {displayLoginError}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 py-3 text-lg"
              size="lg"
            >
              Entrar
            </Button>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-secondary-400">
          &copy; {new Date().getFullYear()} {effectiveCompanyName}. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default LoginView;