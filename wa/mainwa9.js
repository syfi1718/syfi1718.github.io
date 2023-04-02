const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = 'One hot summer day, a zebra named :insertx: went to the pool. When she got to :inserty:, all eyes turned to stare at her unique stripes, but :insertz:. Lifeguard Lion watched the crowd turn their heads, but was not surprised — :insertx: has stunning stripes, and everyone admired her.';

const insertX = ['Marty', 'Patricia', 'Suzie'];

const insertY = ['the pool party', 'the packed pool', 'the beautiful pool'];

const insertZ = ['she didnt mind', 'she loved the attention', 'she waved right back at everyone'];



randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Lifeguard Lion', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature = `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}