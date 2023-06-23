const productImage = document.querySelector('.product-image');
const image = productImage.querySelector('img');
let isZoomed = false;

productImage.addEventListener('mousemove', (event) => {
  if (!isZoomed) {
    productImage.style.cursor = 'zoom-in';
    return;
  }

  const { left, top } = productImage.getBoundingClientRect();
  const mouseX = event.clientX - left;
  const mouseY = event.clientY - top;

  image.style.transformOrigin = `${mouseX}px ${mouseY}px`;
});

productImage.addEventListener('mouseenter', () => {
  isZoomed = true;
  productImage.classList.add('zoomed');
});

productImage.addEventListener('mouseleave', () => {
  isZoomed = false;
  productImage.classList.remove('zoomed');
});
