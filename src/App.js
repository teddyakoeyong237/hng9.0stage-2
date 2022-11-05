import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ContactMe from './pages/contactMe/ContactMe';
import LinkTree from './pages/linkTree/LinkTree';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LinkTree />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
