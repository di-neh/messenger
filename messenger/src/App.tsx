
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from "./pages/MainPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={MainPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
