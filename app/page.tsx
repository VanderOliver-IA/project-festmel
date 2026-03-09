import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white font-sans">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          PROJETO FESTMEL
        </h1>
      </div>
      <p className="mt-8 text-zinc-400">
        Iniciado com Antigravity Factory.
      </p>
      <div className="mt-12 flex gap-4">
        <a href="/login" className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
          Fazer Login (Super Admin)
        </a>
      </div>
    </main>
  );
}
