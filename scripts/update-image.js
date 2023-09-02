const fs = require('fs');

const IMAGES = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
];

const newImage = IMAGES[new Date().getDay() % IMAGES.length];

const stylesPath = 'styles.css';
let stylesContent = fs.readFileSync(stylesPath, 'utf-8');
stylesContent = stylesContent.replace(/background-image: url\('.*'\);/, `background-image: url('${newImage}');`);
fs.writeFileSync(stylesPath, stylesContent, 'utf-8');
