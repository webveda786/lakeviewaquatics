

import React from 'react'
import "../atom css/ButtonComponent.css"
import Button from '@mui/material/Button';

function ButtonComponent({
    color="primary",
    text="Button", 
    variant="text", 
    href="",
    sx={},
    onClick=()=>{}, 
    className=""}) 
 {
  return (
    <Button variant={variant} 
     color={color} sx={sx}>{text}</Button>
  )
}

export default ButtonComponent
