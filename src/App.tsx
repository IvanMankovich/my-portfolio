import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Skills} from './pages/Skills/Skills';
import { Layout } from './components/Layout/Layout';
import { Protfolio } from './pages/Portfolio/Protfolio';
import { Experience } from './pages/Experience/Experience';
import { Contact } from './pages/Contact/Contact';
import { CV } from './pages/CV/CV';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Protfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
