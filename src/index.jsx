import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Lodging from './pages/Lodging/lodging'
import About from './pages/About/about'
import Error from './components/Error/error'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logement" element={<Lodging />} />
        {/*Rajouter '/:id' au path */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
