import { Box } from '@mui/material'
import React from 'react'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'

function FooterAddress() {
  let address=`Keremane Sy No 6/8,Shivanahalli Village, Ragihalli Post, Jigani Hobli, Anekal Taluk, Bengaluru,Karnataka 560083, INDIA`
  return (
    <>
      
      <TypoGraphyComponent variant='h5' component='h5' text='Lake View Aquatics'/>
      <TypoGraphyComponent variant='body2' component='p' text={address}/>

      

    </>
  )
}

export default FooterAddress
