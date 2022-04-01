import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    model: "Panasonic LUMIX G7 16",
    rating:3,
    inStock: true,
    fastDelivery:true,
    price: 40490,
    categoryName: "Panasonic",
    image:"./images/panasonicPic1.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "PANASONIC LUMIX DMC-G1 12.1MP",
    rating:5,
    inStock: true,
    fastDelivery:false,
    price: 43591,
    categoryName: "Panasonic",
    image:"./images/panasonicPic2.jpeg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Panasonic HC-X1 4K ",
    rating:4,
    inStock: false,
    fastDelivery:false,
    price: 362565,
    categoryName: "Panasonic",
    image:"./images/panasonicPic3.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Sony Alpha ILCE 6000L ",
    rating:5,
    inStock: true,
    fastDelivery:true,
    price: 43190,
    categoryName: "Sony",
    image:"./images/sonyPic1.jpeg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Sony Digital Vlog Camera ZV-1",
    rating:5,
    inStock: true,
    fastDelivery:false,
    price: 60490,
    categoryName: "Sony",
    image:"./images/sonyPic2.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Sony ILCE-5100L",
    rating:4,
    inStock: false,
    fastDelivery:false,
    price: 38690,
    categoryName: "Sony",
    image:"./images/sonyPic3.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Canon EOS 1500D",
    rating:4,
    inStock: true,
    fastDelivery:true,
    price: 36499,
    categoryName: "Canon",
    image:"./images/canonPic1.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Canon EOS M50 Mark II ",
    rating:4,
    inStock: true,
    fastDelivery:false,
    price: 57999,
    categoryName: "Canon",
    image:"./images/canonPic2.jpeg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Canon SX740 HS ",
    rating:5,
    inStock: false,
    fastDelivery:false,
    price: 90683,
    categoryName: "Canon",
    image:"./images/canonPic3.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Nikon Coolpix P520",
    rating:5,
    inStock: false,
    fastDelivery:false,
    price: 12990,
    categoryName: "Nikon",
    image:"./images/nikonPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Olympus TG6",
    rating:3,
    inStock: true,
    fastDelivery:false,
    price: 70524.99,
    categoryName: "Olympus",
    image:"./images/olympusPic1.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Leica D-Lux 7",
    rating:4,
    inStock: true,
    fastDelivery:true,
    price: 11456,
    categoryName: "Leica",
    image:"./images/leicaPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Fujifilm Instax Mini Evo Hybrid Instant Camera",
    rating:5,
    inStock: false,
    fastDelivery:false,
    price: 15270.93,
    categoryName: "Fujifilm",
    image:"./images/FujifilmPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Pentax K-70 DSLR Camera",
    rating:3,
    inStock: true,
    fastDelivery:false,
    price: 75660,
    categoryName: "Pentax",
    image:"./images/PentaxPic1.webp",
    cart:false,
    wishList:false
  }
];
