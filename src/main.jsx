import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Homepage from './pages/Homepage'
import Categories from './pages/Categories'
import New from './pages/New'
import Popular from './pages/Popular'
import Trending from './pages/Trending'
import NotFound from './pages/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>} />
        <Route path='new' element={<New/>} />
        <Route path='categories' element={<Categories/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='popular' element={<Popular/>} />
        <Route path='trending' element={<Trending/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
