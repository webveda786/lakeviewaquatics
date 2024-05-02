import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'


import NavbarComponent from './components/atoms/NavbarComponent'
import Home from './components/My Pages/Home'
import FooterComponent from './components/organisms css/FooterComponent'

//! variant=text,contained,outlined,disabled
//? disableElevation
//* color=primary,secondary,error,warning,info,success
//! size=small,medium,large
//! startIcon,endIcon(props to add icons inside the buttons.to add icon button we use <IconButton> )

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
