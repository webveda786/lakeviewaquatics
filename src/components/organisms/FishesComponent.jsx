import React from 'react'
import CardComponent from '../molecules/CardComponent'
import GridComponent from '../molecules/GridComponent'
import { fishes } from '../../assets/Data/fishesInfo'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'
import "../organisms css/FishesComponent.css"


function FishesComponent() {
  return (
    <div className='fishes'>
        <TypoGraphyComponent variant='h4' text='Fishes' component='h4' sx={{textAlign:"center",fontWeight:"bold",margin:"20px"}} />
       <div className="fish-cards">
            <GridComponent xs={12} sm={6} md={6} lg={3}  mapdata={fishes} bgcolor='white'>
              passing children
            </GridComponent>
       </div>
    </div>
  )
}

export default FishesComponent
