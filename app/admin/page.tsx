import React from 'react';

export default function Admin() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-white">
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-8">HUB - Antigravity</h2>
        <nav className="space-y-2">
          <a className="block px-4 py-2 bg-zinc-800 rounded-lg">Dashboard</a>
          <a className="block px-4 py-2 text-zinc-400 hover:text-white">Projetos</a>
          <a className="block px-4 py-2 text-zinc-400 hover:text-white">Configurações</a>
        </nav>
      </aside>
      <section className="flex-1 p-12">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Resumo do Projeto</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">Vanderson Oliveira</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </header>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <p className="text-zinc-400 text-sm">Status Infra</p>
            <p className="text-2xl font-bold text-green-400">ONLINE</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <p className="text-zinc-400 text-sm">Base de Dados</p>
            <p className="text-2xl font-bold">sb-hub-geral</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <p className="text-zinc-400 text-sm">Último Acesso</p>
            <p className="text-2xl font-bold">Agora mesmo</p>
          </div>
        </div>
      </section>
    </main>
  );
}
