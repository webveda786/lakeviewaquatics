import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonComponent from '../atoms/ButtonComponent';
import RatingComponent from '../atoms/RatingComponent';


function CardComponent({imageUrl="",name="",rating=""}) {
  return (
    <Card sx={{ maxWidth: 350,borderRadius:"10px" }} className='card'>
        <img src={imageUrl}  alt="" style={{width:"100%",objectFit:"cover",height:"280px"}} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="h6" sx={{fontWeight:"bold"}}>
        {name}
      </Typography>
      {/* <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography> */}
    </CardContent>
    <CardActions sx={{display:"flex",justifyContent:"space-between", paddingBottom:"10px"}}>
      {/* <Button size="small">Share</Button>
      <Button size="small">Learn More</Button> */}
      <RatingComponent value={rating}/>
      <ButtonComponent size='snall' variant='contained' color='success' sx={{float:"right"}}>Buy Now</ButtonComponent>
    </CardActions>
  </Card>
  )
}

export default CardComponent



