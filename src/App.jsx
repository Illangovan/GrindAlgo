import React from 'react'
import Menubar from './component/Menubar'
import Problems from './component/Problems'
import Systemdesign from './component/Systemdesign'
import Discuss from './component/Discuss'
import Home from './component/Home'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menubar/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/Problems'element={<Problems/>}></Route>
        <Route path='/systemdesign' element={<Systemdesign/>}></Route>
        <Route path='/discuss' element={<Discuss/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}
export default App
