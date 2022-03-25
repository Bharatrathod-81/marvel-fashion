import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Nikon",
    description:
      "Our digital SLR cameras capture stunning images with cutting-edge speed, ... Side view of a Nikon DSLR with hot spots indicating different features.",
    image:"/public/images/nikonPic1.webp"
  },
  {
    _id: uuid(),
    categoryName: "Canon",
    description:
      "Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc.",
    image:"/public/images/canonPic3.webp"
  },
  {
    _id: uuid(),
    categoryName: "Sony",
    description:
      "Sony DSLRs use A-mount lenses; compact system cameras use E-mount lenses (or A-mount with adapter).",
    image:"/public/images/sonyPic3.webp"
  },
  {
    _id: uuid(),
    categoryName: "Olympus",
    description:
      "Break Free with Olympus. Explore small, lightweight, travel-ready camera and lens systems to take your photography to exciting new places.",
    image:"/public/images/olympusPic1.webp"
  },
  {
    _id: uuid(),
    categoryName: "Leica",
    description:
      "Photography ; Leica S-System. The best tool. · Medium format DSLR. 64 MP. Dual shutter system. Cine4K Video. Professional ; Leica SL-System. It's your choice.",
    image:"/public/images/leicaPic1.webp"
  },
  {
    _id: uuid(),
    categoryName: "Fujifilm",
    description:
      "A compact active camera that is water-, dust-, shock- and freeze-proof. It is designed to offer a simple operability and functions for outdoor shooting use.",
    image:"/public/images/FujifilmPic1.webp"
  },
  {
    _id: uuid(),
    categoryName: "Pentax",
    description:
      " Pentax camera database lets you browse reviews and specifications of Pentax DSLRs, mirrorless cameras, compacts, and film bodies.",
    image:"/public/images/PentaxPic1.webp"
  },
  {
    _id: uuid(),
    categoryName: "Panasonic",
    description:
      "The Panasonic Lumix DC-ZS200 marries a long zoom lens to a premium 1-inch image sensor. It's a very good pocket camera, but we wish the screen offered tilt.",
    image:"/public/images/panasonicPic1.jpg"
  }
];
