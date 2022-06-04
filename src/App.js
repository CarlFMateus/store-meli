import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';

import { Home, NotFound, ProductDetail, Search } from './pages';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.items} element={<Search />} />
          <Route path={`${routes.items}/:id`} element={<ProductDetail />} />
          <Route path='*' element={<NotFound /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
