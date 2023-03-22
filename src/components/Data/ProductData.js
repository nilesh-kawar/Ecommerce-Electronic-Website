import iphone1 from "../../assets/img/products/iphone_fb_blue.jpg";
import iphone2 from "../../assets/img/products/iphone_fb_white.jpg";
import iphone3 from "../../assets/img/products/iphone_14.webp";
import iphone4 from "../../assets/img/products/iphone_w_charger.jpg";
import airpods from "../../assets/img/products/airpods.webp";
import ipad1 from "../../assets/img/products/ipad_blue.jpg";
import ipad2 from "../../assets/img/products/ipad_gold.jpg";
import iwatch from "../../assets/img/products/iWatch.jpg";
import laptop1 from "../../assets/img/products/laptop_1.jpg";
import macbook from "../../assets/img/products/macbook.jpg";
import otgc from "../../assets/img/products/otg_c.jpg";
import speaker from "../../assets/img/products/speaker.jpg";
import headphone from "../../assets/img/products/headphone.jpg";

export const productData = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: "499.00",
    prevPrice: "899.00",
    rating: "3",
    img1: iphone1,
    img2: iphone4,
    isSoldOut: true,
    category: 'iphone',
    categoryId: 2
  },
  {
    id: 2,
    name: "iWatch Ultra Pro",
    price: "70.00",
    prevPrice: "",
    rating: "2",
    img1: iwatch,
    img2: airpods,
    isSoldOut: false,
    category: 'accessories',
    categoryId: 1
  },
  {
    id: 3,
    name: "Apple Mabook Pro",
    price: "999.00",
    prevPrice: "1599.00",
    rating: "4",
    img1: macbook,
    img2: ipad1,
    isSoldOut: false,
    category: 'laptop',
    categoryId: 3
  },
  {
    id: 4,
    name: "Apple iPad Mini",
    price: "399.00",
    prevPrice: "",
    rating: "2",
    img1: ipad2,
    img2: laptop1,
    isSoldOut: false,
    category: 'iphone',
    categoryId: 2
  },
  {
    id: 5,
    name: "Homepod Mini 2023",
    price: "39.00",
    prevPrice: "60.00",
    rating: "3",
    img1: speaker,
    img2: iphone2,
    isSoldOut: true,
    category: 'accessories',
    categoryId: 1
  },
  {
    id: 6,
    name: "Apple Safe Charger",
    price: "85.00",
    prevPrice: "",
    rating: "3",
    img1: otgc,
    img2: iphone4,
    isSoldOut: false,
    category: 'accessories',
    categoryId: 1
  },
  {
    id: 61,
    name: "Apple Safe Charger",
    price: "85.00",
    prevPrice: "",
    rating: "3",
    img1: headphone,
    img2: iwatch,
    isSoldOut: false,
    category: 'accessories',
    categoryId: 1
  },
  {
    id: 7,
    name: "Apple Headphones",
    price: "35.00",
    prevPrice: "55.00",
    rating: "2",
    img1: headphone,
    img2: iphone2,
    isSoldOut: false,
    category: 'iphone',
    categoryId: 2
  },
  {
    id: 8,
    name: "Apple Airpods",
    price: "25.00",
    prevPrice: "",
    rating: "3",
    img1: airpods,
    img2: iphone3,
    isSoldOut: false,
    category: 'accessories',
    categoryId: 1
  },
  {
    id: 9,
    name: "iWatch Ultra Pro",
    price: "70.00",
    prevPrice: "",
    rating: "2",
    img1: laptop1,
    img2: iwatch,
    isSoldOut: false,
    category: 'laptop',
    categoryId: 3
  },
  {
    id: 10,
    name: "Apple Safe Charger",
    price: "85.00",
    prevPrice: "",
    rating: "3",
    img1: otgc,
    img2: iphone4,
    isSoldOut: true,
    category: 'laptop',
    categoryId: 3
  },
];
