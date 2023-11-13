import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='/:id' element={<DetailPage />} />
        </Route>
        <Route path='/home' element={<Navigate to='/' replace />} />
      </Routes>

      <Menu />

      <Footer />
    </>
  );
};

export default App;
