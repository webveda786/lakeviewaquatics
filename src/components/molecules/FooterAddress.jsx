import { Box } from '@mui/material'
import React from 'react'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'

function FooterAddress() {
  let address=`Keremane Sy No 6/8,Shivanahalli Village,Ragihalli Post,Jigani Hobli,Anekal Taluk,Bengaluru,Karnataka 560083,INDIA`
  return (
    <Box>
      
      <TypoGraphyComponent variant='body1' component='h5' text={address}/>

      

    </Box>
  )
}

export default FooterAddress
