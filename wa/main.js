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

const images = ['img/caro1.JPG', 'img/caro2.JPG', 'img/caro3.JPG', 'img/caro4.JPG', 'img/caro5.JPG'];
/* Declaring the alternative text for each image file */
const alts = {
    'img/caro1.JPG' : 'Trix are for kids',
    'img/caro2.JPG' : 'Aspen mountain',
    'img/caro3.JPG' : 'Vail mountain',
    'img/caro4.JPG' : 'Boulder mountain',
    'img/caro5.JPG' : 'Flowers'
}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }
  
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      overlay.style.width = displayedImage.offsetWidth + 'px';
      overlay.style.height = displayedImage.offsetHeight + 'px';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
