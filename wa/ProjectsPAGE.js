const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

thumbBar.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      displayedImage.src = event.target.src;
      displayedImage.alt = event.target.alt;
    }
});

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['img/Bdaycakerender.JPG', 'img/FlatMockup1.JPG', 'img/Cosymphfront.JPG', 'img/Cosymphback.JPG', 
'img/Slalomdefinition.JPG', 'img/Slalomweb.JPG', 'img/Stevequote.JPG', 'img/Linkedinad.JPG', 'img/S1.JPG', 
'img/S2.JPG', 'img/S3.JPG', 'img/S4.JPG','img/S5.JPG', 'img/S6.JPG', 'img/S7.JPG', 'img/S8.JPG',
'img/S9.JPG', 'img/S10.JPG', 'img/S11.JPG'];
/* Declaring the alternative text for each image file */
const alts = {
    'img/Bdaycakerender.JPG' : 'Bday Cake',
    'img/FlatMockup1.JPG' : 'Flat Mockup',
    'img/Cosymphfront.JPG' : 'Co Front Poster',
    'img/Cosymphback.JPG' : 'Co Back Poster',
    'img/Slalomdefinition.JPG' : 'Slalom Def',
    'img/Slalomweb.JPG' : 'Slalom web',
    'img/Stevequote.JPG' : 'Steve quote',
    'img/Linkedinad.JPG' : 'LinkedIn Ad',
    'img/S1.JPG' : 'S1', 
    'img/S2.JPG' : 'S2',
    'img/S3.JPG' : 'S3',
    'img/S4.JPG' : 'S4',
    'img/S5.JPG' : 'S5',
    'img/S6.JPG' : 'S6',
    'img/S7.JPG' : 'S7',
    'img/S8.JPG' : 'S8',
    'img/S9.JPG' : 'S9',
    'img/S10.JPG' : 'S10',
    'img/S11.JPG' : 'S11',
    
}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    newImage.setAttribute('alt', alts[`img/${image}`]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  
    newImage.addEventListener('error', e => {
      e.target.style.display = 'none'; // Hide the image if it fails to load
    });
  }
  
