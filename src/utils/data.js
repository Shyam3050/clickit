import cake from "../img/CAKE.avif";
import chaat from "../img/chaat.avif";
import chicken from "../img/CHICKEN.webp";
import panner from "../img/PANNER.avif";
import rice from "../img/rice.avif";

export const heroData = [
  {
    id: 1,
    name: "cake",
    decp: "All variety Cakes",
    price: "5.25",
    imageSrc: cake,
  },
  {
    id: 2,
    name: "chicen",
    decp: "chicken thai",
    price: "10.25",
    imageSrc: chicken,
  },
  {
    id: 3,
    name: "paneer",
    decp: "paneer malai",
    price: "8.25",
    imageSrc: panner,
  },
  {
    id: 4,
    name: "chaat",
    decp: "gupchup chaat",
    price: "5.25",
    imageSrc: chaat,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
    imgSrc: chicken,
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
    imgSrc: panner,
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
    imgSrc: rice,
  },
  // {
  //   id: 4,
  //   name: "Fish",
  //   urlParamName: "fish",
  // },
  // {
  //   id: 5,
  //   name: "Fruits",
  //   urlParamName: "fruits",
  // },
  // {
  //   id: 6,
  //   name: "Icecreams",
  //   urlParamName: "icecreams",
  // },

  // {
  //   id: 7,
  //   name: "Soft Drinks",
  //   urlParamName: "drinks",
  // },
  {
    id: 8,
    name: "snacks",
    urlParamName: "snacks",
    imgSrc: cake,
  },
];
