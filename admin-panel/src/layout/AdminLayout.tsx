import React from 'react';
import { Link } from 'react-router-dom';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen grid grid-cols-[250px_1fr]">
    <aside className="bg-slate-900 text-white p-4 space-y-2">
      <h1 className="text-xl font-bold">Venue Admin</h1>
      {[
        ['/', 'Genel Bakış'],
        ['/users', 'Kullanıcılar'],
        ['/venues', 'Mekanlar'],
        ['/events', 'Etkinlikler'],
        ['/procircle', 'Pro Circle'],
        ['/algorithms', 'Algoritma Ağırlıkları'],
        ['/revenue', 'Gelir Takibi']
      ].map(([to, label]) => <Link key={to} className="block py-1" to={to}>{label}</Link>)}
    </aside>
    <main className="p-6">{children}</main>
  </div>
);
