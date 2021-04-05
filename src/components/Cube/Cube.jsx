import React from 'react'
import Anime from 'react-anime';

export default function Cube() {
  return (
    <Anime easing="easeOutExpo"
         duration={1000}
         direction="alternate"
         loop={true}
         delay={(el, index) => index * 350}
         translateX='13rem'
         scale={[.75, .9]}>
    <h1 className="blue"> hello</h1>
  </Anime>
  )
}
