import React from 'react'
import "../My Pages css/Home.css"
import BannerVideo from '../atoms/BannerVideo'
import BannerContent from '../atoms/BannerContent'
import FishesComponent from '../organisms/FishesComponent'

// import BannerVideo from '../atoms/BannerVideo'
// import BannerContent from '../atoms/BannerContent'


function Home() {
  return (
    <section>
      <div  className='home'>
        <BannerVideo/>
        <BannerContent/>
      </div>
        <FishesComponent/>
    </section>
  )
}

export default Home
