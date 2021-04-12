import React from "react";
import "./ProjectCard.css";
import ParallaxCard from 'react-parallax-card'

export default function Card(card) {
  return (
    <ParallaxCard
      enableRotate
      enableTransform
      className = "p-card"
      style={{ margin: "0 auto", width: 580, height: 540}}
    >
      <img src={card.image} role='presentation' className = "img"/>
      <div />
      <div />
    </ParallaxCard>
  );
}
