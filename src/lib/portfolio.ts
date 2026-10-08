import work0_0 from "@/assets/portfolio/work-01-01.jpg.asset.json";
import work0_1 from "@/assets/portfolio/work-01-02.jpg.asset.json";
import work0_2 from "@/assets/portfolio/work-01-03.jpg.asset.json";
import work1_0 from "@/assets/portfolio/work-02-01.jpg.asset.json";
import work1_1 from "@/assets/portfolio/work-02-02.jpg.asset.json";
import work1_2 from "@/assets/portfolio/work-02-03.jpg.asset.json";
import work2_0 from "@/assets/portfolio/work-03-01.jpg.asset.json";
import work3_0 from "@/assets/portfolio/work-04-01.jpg.asset.json";
import work4_0 from "@/assets/portfolio/work-05-01.jpg.asset.json";
import work5_0 from "@/assets/portfolio/work-06-01.jpg.asset.json";
import work5_1 from "@/assets/portfolio/work-06-02.jpg.asset.json";
import work5_2 from "@/assets/portfolio/work-06-03.jpg.asset.json";
import work6_0 from "@/assets/portfolio/work-07-01.jpg.asset.json";
import work7_0 from "@/assets/portfolio/work-08-01.jpg.asset.json";
import work8_0 from "@/assets/portfolio/work-09-01.jpg.asset.json";
import work9_0 from "@/assets/portfolio/work-10-01.jpg.asset.json";
import work9_1 from "@/assets/portfolio/work-10-02.jpg.asset.json";
import work10_0 from "@/assets/portfolio/work-11-01.jpg.asset.json";
import work11_0 from "@/assets/portfolio/work-12-01.jpg.asset.json";
import work12_0 from "@/assets/portfolio/work-13-01.jpg.asset.json";

export const PORTFOLIO_DRIVE_URL = "https://drive.google.com/drive/folders/1Fw7BVsIUuLxQKkIN5DgmbtfDUhZ3wkFd";

export const WORK_CATEGORIES = [
  { label: "Digital Imaging", images: [
    { src: work0_0.url, alt: "Digital Imaging \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work0_1.url, alt: "Digital Imaging \u2014 karya 2 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work0_2.url, alt: "Digital Imaging \u2014 karya 3 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Product Photo Manipulation", images: [
    { src: work1_0.url, alt: "Product Photo Manipulation \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work1_1.url, alt: "Product Photo Manipulation \u2014 karya 2 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work1_2.url, alt: "Product Photo Manipulation \u2014 karya 3 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Wedding Photo Book Cover", images: [
    { src: work2_0.url, alt: "Wedding Photo Book Cover \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Magazine", images: [
    { src: work3_0.url, alt: "Magazine \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Menu Design", images: [
    { src: work4_0.url, alt: "Menu Design \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Instagram Feed Cover", images: [
    { src: work5_0.url, alt: "Instagram Feed Cover \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work5_1.url, alt: "Instagram Feed Cover \u2014 karya 2 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work5_2.url, alt: "Instagram Feed Cover \u2014 karya 3 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Business Card", images: [
    { src: work6_0.url, alt: "Business Card \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Certificate", images: [
    { src: work7_0.url, alt: "Certificate \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Infographic", images: [
    { src: work8_0.url, alt: "Infographic \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Flyer", images: [
    { src: work9_0.url, alt: "Flyer \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 },
    { src: work9_1.url, alt: "Flyer \u2014 karya 2 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Wedding", images: [
    { src: work10_0.url, alt: "Wedding \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Human Interest Photography", images: [
    { src: work11_0.url, alt: "Human Interest Photography \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] },
  { label: "Product Photography", images: [
    { src: work12_0.url, alt: "Product Photography \u2014 karya 1 Dwitiya Ramaniya", width: 2133, height: 1600 }
  ] }
];

export const GALLERY_CATEGORIES = WORK_CATEGORIES.filter(
  (category) => category.images.length === 3
);
