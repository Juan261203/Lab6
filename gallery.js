// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var thumbImgs = document.querySelectorAll('.thumb-bar img');

/* STEP 2: Loop 5 times to create the <img> elements */
for (var i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);

  /* STEP 3: Build event handler for each <img> */
  newImage.onclick = function(event) {
    var imgSrc = event.target.getAttribute('src');
    displayImage(imgSrc);
  };
}

/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
  displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation */
thumbBar.onclick = function(event) {
  if (event.target && event.target.nodeName === 'IMG') {
    var imgSrc = event.target.getAttribute('src');
    displayImage(imgSrc);

    // Lab 6 STEP A: Change the event.target CSS outline property to "5px solid red"
    event.target.style.outline = '5px solid red';

    // Lab 6 STEP B: Change the event.target CSS position property to "relative"
    event.target.style.position = 'relative';

    // Lab 6 STEP C: Set the CSS z-index property to "10" so that the thumbnail clicked is on top of all the others
    event.target.style.zIndex = '10';
  }
};

/* Lab 6 STEP D: Initialize and declare a var called 'thumbImgs' using the querySelectorAll method to grab all the IMG elements inside the .thumb-bar */
var thumbImgs = document.querySelectorAll('.thumb-bar img');

/* Lab 6 STEP E: Build a function called 'clearWayfinding()' */
function clearWayfinding() {
  for (var i = 0; i < thumbImgs.length; i++) {
    thumbImgs[i].style.outlineWidth = '0';
    thumbImgs[i].style.zIndex = '0';
  }
}

/* Lab 6 STEP F: Inside the clearWayfinding function, for each thumbImgs IMG element, set the CSS outline-width property to "0", and the z-index property also to "0" */
clearWayfinding();

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
