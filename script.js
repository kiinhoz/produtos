// Obtém todas as imagens de referência
const referenceImages = document.querySelectorAll('.reference-image');

// Percorre todas as imagens de referência
referenceImages.forEach((image) => {
  // Verifica se a imagem de referência possui um caminho definido
  const referenceImage = image.querySelector('img');
  const referenceImagePath = referenceImage.getAttribute('src');
  const imageExists = new Image();
  imageExists.src = referenceImagePath;
  imageExists.onerror = function () {
    // Se o caminho da imagem de referência não for reconhecido, oculta a div
    image.style.display = 'none';
  };

  if (referenceImagePath && referenceImagePath !== 'img/' && imageExists.complete) {
    // Adiciona o evento de clique na imagem de referência
    image.addEventListener('click', () => {
      // Remove a classe 'active' de todas as imagens de referência
      referenceImages.forEach((refImage) => {
        refImage.classList.remove('active');
      });

      // Adiciona a classe 'active' à imagem de referência clicada
      image.classList.add('active');

      // Obtém a imagem do produto
      const productImage = document.querySelector('.product-image img');

      // Atualiza o atributo src da imagem do produto com o caminho da imagem de referência
      productImage.setAttribute('src', referenceImagePath);
    });
  }
});
