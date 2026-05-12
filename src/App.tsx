import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { UserPage } from './pages/UserPage';
import { ShopPage } from './pages/ShopPage';
import { MechanicsPage } from './pages/MechanicsPage';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/mechanics" element={<MechanicsPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/user/*" element={<UserPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
