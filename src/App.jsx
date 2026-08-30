import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import ViewBook from "./pages/ViewBook"
import UpdateBook from './pages/UpdateBook'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/viewbook' element={<ViewBook/>}/>
        <Route path='/updatebook/:id' element={<UpdateBook/>}/>
      </Routes>
    </>
  )
}

export default App