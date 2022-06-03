import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';

import { Home, NotFound, ProductDetail, Search } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='items' element={<Search />} />
          <Route path='items/:id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
