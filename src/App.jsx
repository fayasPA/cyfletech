import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         {/* <Route path="" element={<Home />} /> */}
         {/* <Route path="/products" element={<Products />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/contact" element={<Contacts />} />
         <Route path="/about" element={<About />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
