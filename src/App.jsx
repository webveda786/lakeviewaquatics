import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ButtonComponent from './components/atoms/ButtonComponent'
import NavbarComponent from './components/atoms/NavbarComponent'

//! variant=text,contained,outlined,disabled
//? disableElevation
//* color=primary,secondary,error,warning,info,success
//! size=small,medium,large
//! startIcon,endIcon(props to add icons inside the buttons.to add icon button we use <IconButton> )

function App() {
  return (
    <>
    <NavbarComponent/>
      <ButtonComponent variant='outlined' sx={{outline:"none"}}/>
        
    </>
  )
}

export default App
