"use client";
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'omd.vandersonoliveira@gmail.com' && password === 'Entrar2026@') {
      alert('Login realizado com sucesso! Bem-vindo, Vanderson Oliveira.');
      window.location.href = '/admin';
    } else {
      alert('Credenciais inválidas.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="w-full max-w-md p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6">Acesso Administrativo</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="omd.vandersonoliveira@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Senha</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
