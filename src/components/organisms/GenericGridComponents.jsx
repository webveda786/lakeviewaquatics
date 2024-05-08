import { Grid,Box } from '@mui/material'
import React, { Fragment } from 'react'

function GenericGridComponents({xs=12,sm=6,md=6,lg=3,children="",mapdata=[],bgcolor="transparent",sx={},padding=0}) {
    console.log(padding)
  return (
    <Grid container bgcolor={bgcolor} spacing={1} sx={sx} p={padding}  >
         {mapdata.map((data,id)=>
        {
          let addressWidth=data.type.name==="FooterAddress"?"78%":"100%";
     
            return <Fragment key={id}>
                <Grid  item display={"flex"} xs={xs} sm={sm} md={md} lg={lg} className='grid-item'>
                   <Box className="grid-content-box" sx={{width:addressWidth}}>
                      {data}
                   </Box>
                </Grid>
            </Fragment>
        })}
    </Grid>
  )
}

export default GenericGridComponents
