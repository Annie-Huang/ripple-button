const rippleButton = document.querySelector('.ripple-button');

rippleButton.addEventListener('mousemove', (e) => {
  let posX = e.offsetX;
  let posY = e.offsetY;

  console.log(posX, posY);
});
