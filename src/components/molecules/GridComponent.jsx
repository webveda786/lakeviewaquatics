import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import CardComponent from './CardComponent';

function GridComponent({xs=12,sm=6,md=6,lg=3,children="",mapdata=[],bgcolor="gray"}) {
   
  return (
    <Grid container spacing={3} bgcolor={bgcolor}>
        {mapdata.map((data,id)=>
        {
            return <Fragment key={id}>
                <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}  xs={xs} sm={sm} md={md} lg={lg}>
                    {children?<CardComponent {...data}/>:children}
                </Grid>
            </Fragment>
        })}
    </Grid>
  )
}

export default GridComponent
