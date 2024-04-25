import { Box, Card, CardContent, Paper, Typography } from '@mui/material'
// import CardCover from '@mui/joy/CardCover';
import React from 'react'
import "../atom css/BannerContent.css"
import TypoGraphyComponent from './TypoGraphyComponent'

//! paper==> Elevation=0-24
function BannerContent() {
    let text='Tanks, Cabinets & Live Fish'
    let title='OVER 100 SPECIES OF COLOURFUL FISH TO SELECT'
    let shipping="Free Shipping"

  return (
   <Box className='banner-content'>
        <TypoGraphyComponent variant='h6' component='h6' text={text}/>
        <TypoGraphyComponent variant='h3' component='h3' text={title}/>
        <TypoGraphyComponent variant='p' component='p' text={shipping}/>

   </Box>
  )
}

export default BannerContent
