

import React from 'react'
import "../atom css/ButtonComponent.css"
import Button from '@mui/material/Button';

function ButtonComponent({
    color="primary",
    children="Button", 
    variant="text", 
    href="",
    sx={},
    onClick=()=>{}, 
    className=""}) 
 {
  return (
    <Button variant={variant} 
     color={color} sx={sx}>{children}</Button>
  )
}

export default ButtonComponent
