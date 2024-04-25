import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardComponent({imageUrl="",name=""}) {
  return (
    <Card sx={{ maxWidth: 350,borderRadius:"20px" }} className='card'>
        <img src={imageUrl}  alt="" style={{width:"100%",objectFit:"cover",height:"280px"}} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="h6" sx={{fontWeight:"bold"}}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default CardComponent



