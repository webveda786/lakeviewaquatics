import { Box } from '@mui/material'
import React from 'react'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'

function FooterSearch() {
    let text="Subscribe To Our Newsletter And Recieve The Latest Updates About Our Products And Fishes" 
  return (
    <Box>
      <TypoGraphyComponent component='p' text={text}/>
    </Box>
  )
}

export default FooterSearch
