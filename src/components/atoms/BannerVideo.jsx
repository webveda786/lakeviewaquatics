import { Box } from '@mui/material'
import React from 'react'
import "../atom css/BannerVideo.css"

function BannerVideo() {
  return (
    <>
      <>
        {/* <Card > */}
          <video
            autoPlay
            loop= {true}
            playsInline
            muted
            poster="https://i.pinimg.com/originals/1d/7b/a2/1d7ba250bdf6beea3feca7da9c522ea6.gif"
          >
            <source
              src="https://videos.pexels.com/video-files/855798/855798-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* <iframe src="https://youtu.be/embed/eEoYqsG6ECg" frameborder="0"></iframe> */}
          {/* <iframe width="1349" height="480" src="https://www.youtube.com/embed/eEoYqsG6ECg?autoplay=1&mute=1&loop=1&controls=0&modestbranding=0&showinfo=0" title="Beautiful Betta Fish True Black 8K Video Ultra HD for 8K TV By TRUE 8K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
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
    </>
    </>
  )
}

export default BannerVideo
