import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [{ gun: 'Pzt', gelir: 120000 }, { gun: 'Sal', gelir: 160000 }, { gun: 'Çar', gelir: 170000 }];

export const DashboardPage = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Dashboard Genel Bakış</h2>
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded">Toplam Kullanıcı: 10234</div>
      <div className="bg-white p-4 rounded">Aktif Etkinlik: 268</div>
      <div className="bg-white p-4 rounded">Aylık Gelir: 4.2M ₺</div>
    </div>
    <div className="bg-white p-4 rounded h-72">
      <ResponsiveContainer width="100%" height="100%"><LineChart data={data}><XAxis dataKey="gun" /><YAxis /><Tooltip /><Line type="monotone" dataKey="gelir" stroke="#0ea5e9" /></LineChart></ResponsiveContainer>
    </div>
  </div>
);
