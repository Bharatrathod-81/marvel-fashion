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
    price: "₹ 40,490",
    categoryName: "Panasonic",
    image:"/public/images/panasonicPic1.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "PANASONIC LUMIX DMC-G1 12.1MP",
    rating:5,
    inStock: true,
    fastDelivery:false,
    price: "₹ 43,591",
    categoryName: "Panasonic",
    image:"/public/images/panasonicPic2.jpeg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Panasonic HC-X1 4K ",
    rating:4,
    inStock: false,
    fastDelivery:false,
    price: "₹ 362,565",
    categoryName: "Panasonic",
    image:"/public/images/panasonicPic3.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Sony Alpha ILCE 6000L ",
    rating:5,
    inStock: true,
    fastDelivery:true,
    price: "₹ 43,190",
    categoryName: "Sony",
    image:"/public/images/sonyPic1.jpeg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Sony Digital Vlog Camera ZV-1",
    rating:5,
    inStock: true,
    fastDelivery:false,
    price: "₹ 60,490",
    categoryName: "Sony",
    image:"/public/images/sonyPic2.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Sony ILCE-5100L",
    rating:4,
    inStock: false,
    fastDelivery:false,
    price: "₹ 38,690",
    categoryName: "Sony",
    image:"/public/images/sonyPic3.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Canon EOS 1500D",
    rating:4,
    inStock: true,
    fastDelivery:true,
    price: "₹ 36,499",
    categoryName: "Canon",
    image:"/public/images/canonPic1.jpg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Canon EOS M50 Mark II ",
    rating:4,
    inStock: true,
    fastDelivery:false,
    price: "₹ 57,999",
    categoryName: "Canon",
    image:"/public/images/canonPic2.jpeg",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Canon SX740 HS ",
    rating:5,
    inStock: false,
    fastDelivery:false,
    price: "₹ 90,683",
    categoryName: "Canon",
    image:"/public/images/canonPic3.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Nikon Coolpix P520",
    rating:5,
    inStock: false,
    fastDelivery:false,
    price: "₹ 12,990",
    categoryName: "Canon",
    image:"/public/images/nikonPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Olympus TG6",
    rating:3,
    inStock: true,
    fastDelivery:false,
    price: "₹ 70,524.99",
    categoryName: "Olympus",
    image:"/public/images/olympusPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Leica D-Lux 7",
    rating:4,
    inStock: true,
    fastDelivery:true,
    price: "₹ 11,456.06",
    categoryName: "Leica",
    image:"/public/images/leicaPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Fujifilm Instax Mini Evo Hybrid Instant Camera",
    rating:5,
    inStock: false,
    fastDelivery:false,
    price: "₹ 15,270.93",
    categoryName: "Fujifilm",
    image:"/public/images/FujifilmPic1.webp",
    cart:false,
    wishList:false
  },
  {
    _id: uuid(),
    model: "Pentax K-70 DSLR Camera",
    rating:3,
    inStock: true,
    fastDelivery:false,
    price: "₹ ₹ 75,660",
    categoryName: "Pentax",
    image:"/public/images/PentaxPic1.webp",
    cart:false,
    wishList:false
  }
];
