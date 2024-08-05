import React from 'react';
import MainContent from './components/mainContent/MainContent';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
        <div>
          <Navbar/>
          <MainContent />
          <Footer/>
        </div>
  );
};

export default App;
