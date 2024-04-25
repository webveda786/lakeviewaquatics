import { Rating } from '@mui/material'
import React from 'react'

function RatingComponent({value=1,size="small"}) {
  return (
    <Rating  defaultValue={3} value={value} size={size} precision={0.5} readOnly />
  )
}

export default RatingComponent
