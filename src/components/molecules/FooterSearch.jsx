import { Box ,TextField,InputAdornment} from '@mui/material'
import React from 'react'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'
import CustomInputComponent from '../atoms/CustomInputComponent'

import ButtonComponent from '../atoms/ButtonComponent'

function FooterSearch() {
    let text="Subscribe To Our Newsletter And Recieve The Latest Updates About Our Products And Fishes" 
  return (
    <>
        <TypoGraphyComponent variant='h5' component='h5'  text="Our Newletter"/>
        <TypoGraphyComponent variant='body2' component='p' text={text}/>

       <CustomInputComponent/>
    </>
  )
}

export default FooterSearch
