import React from 'react'
import TypoGraphyComponent from '../atoms/TypoGraphyComponent'
import { Box,List,ListItem,ListItemText } from '@mui/material'
import {Link} from "react-router-dom"

function FooterLinks() {
  let links=['Home', 'Fishes', 'Stones','Tanks & Bowls']
  return (
    <>
        <TypoGraphyComponent variant='h5' component='h5' text='Usefull Links'/>
        <List className='links'>
              {links.map((link,id)=>
              {
               return <ListItem  key={id}>
                  <Link to="/">
                    <ListItemText
                      primary={link}
                    />
                  </Link>
              </ListItem>
          
              })}
               
          </List>
    </>
  )
}

export default FooterLinks
