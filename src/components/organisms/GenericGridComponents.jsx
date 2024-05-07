import { Grid } from '@mui/material'
import React, { Fragment } from 'react'

function GenericGridComponents({xs=12,sm=6,md=6,lg=3,children="",mapdata=[],bgcolor="gray",sx={},padding=0}) {
    console.log(padding)
  return (
    <Grid container bgcolor={bgcolor} spacing={1} sx={sx} p={padding}>
         {mapdata.map((data,id)=>
        {
            return <Fragment key={id}>
                <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}  xs={xs} sm={sm} md={md} lg={lg} sx={{border:"1px solid red"}}>
                   {data}
                </Grid>
            </Fragment>
        })}
    </Grid>
  )
}

export default GenericGridComponents
