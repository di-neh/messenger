
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from "./pages/MainPage.tsx";
import {Provider} from "react-redux";
import store from "./States/store.ts";

function App() {

  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' Component={MainPage}/>
              </Routes>
          </BrowserRouter>
      </Provider>

  )
}

export default App
