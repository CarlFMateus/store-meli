import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, ProductDetail, Search } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='items' element={<Search />} />
        <Route path='items/:id' element={<ProductDetail />} />

        <Route path='*' element={<div>Pagina no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
