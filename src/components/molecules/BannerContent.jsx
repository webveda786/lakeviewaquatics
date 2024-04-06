import { Box, Card, CardContent, Typography } from '@mui/material'
// import CardCover from '@mui/joy/CardCover';
import React from 'react'

//! paper==> Elevation=0-24
function BannerContent() {
  return (
    <Box sx={{ width: "100%",border:"2px solid red" }}>
        {/* <Card > */}
        
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://media.istockphoto.com/id/1019388730/video/reef-and-beautiful-fish-underwater-life-in-the-ocean-tropical-fish.mp4?s=mp4-480x480-is&k=20&c=cSdzjEU0YVqHROP3hLggpdSncZkgqKZDoQS_S7pExX8="
              type="video/mp4"
            />
          </video>
        {/* <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent> */}
      {/* </Card> */}
    </Box>
  )
}

export default BannerContent
