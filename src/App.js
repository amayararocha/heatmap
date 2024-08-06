import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainContent from './components/mainContent/MainContent';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
        <>
          <ToastContainer />
          <Navbar/>
          <MainContent />
          <Footer/>
          </>
  );
};

export default App;
