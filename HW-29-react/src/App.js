import React from 'react';
import './reset.css';
import './components/header/header.css';
import './components/main/aside/aside.css';
import './components/main/main.css';
import './components/footer/footer.css';
import './index.css';
import Header from '../src/components/header/header';
import Main from '../src/components/main/main';
import Footer from '../src/components/footer/footer';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
