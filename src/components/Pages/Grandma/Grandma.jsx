import React from 'react'
import "./Grandma.css"
import Carousel from "./Carousel";
import Time from "./Time"
const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];


export const Grandma = () => {
  return (
    <div>
        <br></br>
        <div class="nine">
          <h1>刘玳<span>生于1936年03月11日, 天津</span></h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
      <div class="caro">
        <Carousel images={images} />
      </div>
      <div class="nine">
        <h1><span>-</span></h1>
      </div>
      <Time />
    </div>
  )
}
