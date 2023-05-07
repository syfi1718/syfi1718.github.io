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

const images = ['img/grad.JPG', 'img/folsom.JPG', 'img/chat.JPG', 'img/sunset.JPG', 'img/casey.JPG', 'img/maui.JPG', 'img/4friends.JPG', 'img/campus.JPG', 'img/vail.JPG', 'img/postinos.JPG', 'img/chatnanny.JPG'];
/* Declaring the alternative text for each image file */
const alts = {
    'img/grad.JPG' : 'Graduation Photo',
    'img/folsom.JPG' : 'Folsom Field Photo',
    'img/chat.JPG' : 'Chautauqua Photo',
    'img/sunset.JPG' : 'Sunset in Maui',
    'img/casey.JPG' : 'Friend Photo',
    'img/maui.JPG' : 'Maui Water Photo',
    'img/4friends.JPG' : 'Friends Photo',
    'img/campus.JPG' : 'Campus Photo',
    'img/vail.JPG' : 'Vail Photo',
    'img/postinos.JPG' : 'Food Photo',
    'img/chatnanny.JPG' : 'Chautauqua Nanny House Photo',
    
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
  
