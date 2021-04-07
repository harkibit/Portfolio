import React from "react";
import "./ProjectCard.css";
import ParallaxCard from 'react-parallax-card'

export default function Card(card) {
  return (
    <ParallaxCard
      enableRotate
      style={{ margin: "0 auto", width: 500, height: 510, objectFit : "contain" }}
    >
      <img src={card.image} role='presentation' className = "img"/>
      <div />
      <div />
    </ParallaxCard>
  );
}
