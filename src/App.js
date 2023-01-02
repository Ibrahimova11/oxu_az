import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cemiyyet from './components/Pages/Cemiyyet/Cemiyyet'
import Home from './components/Pages/Home/Home'
import Idman from './components/Pages/Idman/Idman'
import Iqtisadiyyat from './components/Pages/Iqtisadiyyat/Iqtisadiyyat'
import Kriminal from './components/Pages/Kriminal/Kriminal'
import Medeniyyet from './components/Pages/Medeniyyet/Medeniyyet'
import Muharibe from './components/Pages/Muharibe/Muharibe'
import Siyaset from './components/Pages/Siyaset/Siyaset'
import Biznes from './components/Pages/Sou_biznes/Biznes'

function App() {
  return (
   <BrowserRouter>
  <Navbar/>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/siyaset" element={<Siyaset/>}/>
    <Route path ="/iqtisadiyyat" element={<Iqtisadiyyat/>}/>
    <Route path ="/sou_biznes" element={<Biznes/>}/>
    <Route path ="/muharibe" element={<Muharibe/>}/>
    <Route path ="/cemiyyet" element={<Cemiyyet/>}/>
    <Route path ="/idman" element={<Idman/>}/>
    <Route path ="/kriminal" element={<Kriminal/>}/>
    <Route path ="/medeniyyet" element={<Medeniyyet/>}/>



    </Routes>
   </BrowserRouter>
  )
}

export default App
