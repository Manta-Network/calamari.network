import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Index } from './pages/index';

export const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
