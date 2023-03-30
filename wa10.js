const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

array_name = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */



/* Looping through images */
for (var i = 1; i <= 10; i++) {

    var thumb = document.createElement("img/pic1.jpg");
    thumb.src = "img" + i + ".jpg";
    thumb.alt = "eye" + i;
    var thumb = document.createElement("img/pic2.jpg");
    thumb.src = "img" + i + ".jpg";
    thumb.alt = "pic2" + i;
    var thumb = document.createElement("img/pic3.jpg");
    thumb.src = "img" + i + ".jpg";
    thumb.alt = "pic3" + i;
    var thumb = document.createElement("img/pic4.jpg");
    thumb.src = "img" + i + ".jpg";
    thumb.alt = "pic4" + i;
    var thumb = document.createElement("img/pic5.jpg");
    thumb.src = "img" + i + ".jpg";
    thumb.alt = "pic5" + i;

}
  

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */