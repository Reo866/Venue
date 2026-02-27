import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from './layout/AdminLayout';
import { AlgorithmsPage } from './pages/AlgorithmsPage';
import { DashboardPage } from './pages/DashboardPage';
import { EventsPage } from './pages/EventsPage';
import { ProCirclePage } from './pages/ProCirclePage';
import { RevenuePage } from './pages/RevenuePage';
import { UsersPage } from './pages/UsersPage';
import { VenuesPage } from './pages/VenuesPage';

export const AdminApp = () => (
  <AdminLayout>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/venues" element={<VenuesPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/procircle" element={<ProCirclePage />} />
      <Route path="/algorithms" element={<AlgorithmsPage />} />
      <Route path="/revenue" element={<RevenuePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </AdminLayout>
);
