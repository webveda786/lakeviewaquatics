import React from 'react'
import "../atom css/CustomInputComponent.css"
import {Box} from '@mui/material'


function CustomInputComponent() {
  return (
    <Box className="subscribe">
      <input className='subscribe-input' type="text" placeholder='Email' />
      <button className='subscribe-btn'>Subscribe</button>
    </Box>
  )
}

export default CustomInputComponent
