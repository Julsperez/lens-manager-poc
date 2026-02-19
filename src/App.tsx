import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Groups from './pages/Groups';
import Calendar from './pages/Calendar';
import Finance from './pages/Finance';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
