import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Main from './page/Main'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
