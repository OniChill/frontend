import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import RequireAuth from './middleware/RequireAuth'
import { AuthProvider } from './context/AuthProvider'
import IsLogin from './middleware/IsLogin'
import NotFound from './pages/NotFound'

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* need logout*/}
          <Route path='/login' element={<IsLogin><Login/></IsLogin>} />
          <Route path='/signup' element={<IsLogin><SignUp/></IsLogin>} />
          {/* need login */}
          <Route  path='/' element={<RequireAuth ><Home/></RequireAuth >} />
          {/* catch not define route */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
