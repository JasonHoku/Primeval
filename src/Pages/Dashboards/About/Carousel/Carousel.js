import React from "react";
import { UncontrolledCarousel } from "reactstrap";

//import image3 from "../../../../assets/images/thumbs/04.png";

const max = 3;

const items = [
  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  }, 
  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",

 
    interval: "30",
  },  {
    id: 1,
    src: " ./images/slide/" + Math.floor(Math.random()*max+1) + ".jpg",
    altText: "Gallery Randomizer",
 
    interval: "30",
  }, 
 /* {
    id: 3,
    src: image3,
    altText: "Slide 3",
    caption: "Slide 3",
  }, */
];

const CarouselDefault = () => <UncontrolledCarousel items={items} />;

export default CarouselDefault;
