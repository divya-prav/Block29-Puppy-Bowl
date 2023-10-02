import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AllPlayers from './components/AllPlayers';
import SinglePlayers from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import { Provider } from 'react-redux'
import store from './API/store.js'


function App() {
 

  return (
    <>
    
     <h1>hello</h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AllPlayers/>}></Route>
      <Route path='/singleplayer' element={<SinglePlayers/>}/>
      <Route path='/newform' element={<NewPlayerForm/>}/>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
