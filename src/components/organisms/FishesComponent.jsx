import React from 'react'
import CardComponent from '../molecules/CardComponent'
import GridComponent from '../molecules/GridComponent'
import { fishes } from '../../assets/Data/fishesInfo'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'
import "../organisms css/FishesComponent.css"


function FishesComponent() {
  return (
    <div className='fishes'>
        <TypoGraphyComponent variant='h4' text='Fishes' component='h4'/>
       <div className="fish-cards">
            <GridComponent length={3} mapdata={fishes}/>
       </div>
    </div>
  )
}

export default FishesComponent
