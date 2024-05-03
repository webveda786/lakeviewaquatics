import React from 'react'
import GridComponent from '../molecules/GridComponent'
import { Box, Grid } from '@mui/material'
import GenericGridComponents from '../organisms/GenericGridComponents'
import "./FooterComponent.css"
import FooterAddress from '../molecules/FooterAddress'
import FooterLinks from '../molecules/FooterLinks'
import FooterSearch from '../molecules/FooterSearch'

function FooterComponent() {
    let mapdata=[<FooterAddress/>,<FooterLinks/>,<FooterSearch/>]
  return (
    // <Box className="footer">
        <GenericGridComponents bgcolor='#0d7d61' xs={12} sm={12} lg={4}
         mapdata={mapdata} padding={3}/>
    // </Box>
  )
}

export default FooterComponent
