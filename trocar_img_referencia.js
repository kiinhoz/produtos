// Obtém todas as imagens de referência
const referenceImages = document.querySelectorAll('.reference-image');

// Percorre todas as imagens de referência
referenceImages.forEach((image) => {
  const referenceImage = image.querySelector('img');
  const referenceImagePath = referenceImage.getAttribute('src');

  if (referenceImagePath && referenceImagePath !== 'img/') {
    // Verifica se a imagem de referência é válida
    const imageExists = new Image();
    imageExists.src = referenceImagePath;
    imageExists.addEventListener('error', () => {
      // Se a imagem de referência não for encontrada, oculta a div
      image.style.display = 'none';
    });

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
      productImage.src = referenceImagePath;
    });
  }
});
