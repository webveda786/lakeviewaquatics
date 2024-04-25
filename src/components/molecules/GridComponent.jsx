import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import CardComponent from './CardComponent';

function GridComponent({length=3,xs=12,sm=6,md=6,lg=4,children="",mapdata=[]}) {
    let  grid = [""]
    grid.length=length;
    console.log(grid.length)
  return (
    <Grid container spacing={3} >
        {mapdata.map((data,id)=>
        {
            return <Fragment key={id}>
                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} item xs={xs} sm={sm} md={md} lg={lg}>
                    {children?children:<CardComponent {...data}/>}
                </Grid>
            </Fragment>
        })}
    </Grid>
  )
}

export default GridComponent
