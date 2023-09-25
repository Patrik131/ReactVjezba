import { useState } from 'react'
import './App.css'
import Profile from './components/Profile.jsx'
import Naslovna from './components/Naslov.jsx'
import Gumbovi from './components/Gumbovi.jsx'
import Sadrzaj from './components/Sadrzaj.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <main>
      <Profile />
      <Naslovna />
      <Gumbovi />
      <Sadrzaj />
      <Footer />
    </main>
  )
}

export default App
