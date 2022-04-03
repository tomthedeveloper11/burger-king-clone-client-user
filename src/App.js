import HomePage from './views/HomePage'
import MenuPage from './views/MenuPage'
import MenuDetailPage from './views/MenuDetailPage'
// import CategoryPage from './views/CategoryPage'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='menu' element={<MenuPage />} />
        <Route path='menu/:id' element={<MenuDetailPage />} />
        {/* <Route path='categories' element={<CategoryPage />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
