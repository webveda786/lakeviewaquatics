import React from 'react'
import GridComponent from '../molecules/GridComponent'
import { Box, Grid } from '@mui/material'
import GenericGridComponents from '../organisms/GenericGridComponents'
import "./FooterComponent.css"
import FooterAddress from '../molecules/FooterAddress'
import FooterLinks from '../molecules/FooterLinks'
import FooterSearch from '../molecules/FooterSearch'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'

function FooterComponent() {
    let mapdataContent=[<FooterAddress/>,<FooterLinks/>,<FooterSearch/>]
    let mapdataHeadings=[,
    ,
]
// Subscribe To Our Newsletter And Recieve The Latest Updates About Our Products And Fishes

  return (
    <Box className="footer" bgcolor="#0d7d61">
        {/* <GenericGridComponents xs={12} sm={12} lg={4}
         mapdata={mapdataHeadings}  sx={{marginBottom:"10px",textAlign:"center"}}/> */}

         <GenericGridComponents xs={12} sm={12} lg={4}
         mapdata={mapdataContent} sx={{textAlign:"center"}} />
         <hr />
         <TypoGraphyComponent variant='caption' component='p' text={`© ${new Date().getFullYear()} Lake View Aquatics.All Rights Reserved`}/>

    </Box>
  )
}

export default FooterComponent
