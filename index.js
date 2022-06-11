const rippleButton = document.querySelector('.ripple-button');

function mousePositionToCustomProp(event, element) {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty('--x', posX + 'px');
  element.style.setProperty('--y', posY + 'px');

  // console.log(posX, posY);
}

rippleButton.addEventListener('mousemove', (e) => {
  mousePositionToCustomProp(e, rippleButton);
});
