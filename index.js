const rippleButton = document.querySelector('.ripple-button');

function mousePositionToCustomProp(event, element) {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty('--x', posX + 'px');
  element.style.setProperty('--y', posY + 'px');

  // console.log(posX, posY);
}

// rippleButton.addEventListener('mousemove', (e) => {
// rippleButton.addEventListener('mousedown', (e) => {
rippleButton.addEventListener('click', (e) => {
  mousePositionToCustomProp(e, rippleButton);
  rippleButton.classList.add('pulse'); // javascript cannot really grep the sudo element
});
