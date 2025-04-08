import  { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import Contact from '../pages/Contact';
import NotFound4O4 from '../components/4O4/NotFound4O4';
import OfflineNotice from '../components/4O4/OfflineNotice';
import Blog from '../pages/Blog';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import CommingSoon from '../pages/CommingSoon';

const AppRoutes = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  const renderElement = (Component: React.ReactElement) => (isOnline ? Component : <OfflineNotice />);

  return (
    <Routes>
      <Route path="/" element={renderElement(<Home />)} />
      <Route path="*" element={renderElement(<NotFound4O4 />)} />
      <Route path="/about" element={renderElement(<About />)} />
      <Route path="/features" element={renderElement(<Features />)} />
      <Route path="/blogs" element={renderElement(<Blog/>)} />
      <Route path="/gallery" element={renderElement(<Gallery />)} />
      <Route path="/store" element={renderElement(<Store />)} />
      <Route path="/contact" element={renderElement(<Contact />)} />
      <Route path='/comming-soon' element={renderElement(<CommingSoon />)} />
    </Routes>
  );
};

export default AppRoutes;
