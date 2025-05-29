import App from './App'
import Home from './Home'
import { Route, Routes } from 'react-router'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from './apiSlice';

export const Layout = () => {
  return (
    <Routes>
  <Route path="/" element={<ApiProvider api={api}>
    <App />
  </ApiProvider>}>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<p>Contact Us</p>} />
  </Route>
</Routes>
  )
}
