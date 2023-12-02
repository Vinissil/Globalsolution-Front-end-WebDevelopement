window.addEventListener('DOMContentLoaded', (event) => {
  const phoneImage = document.querySelector('#column-3 img');
  phoneImage.classList.add('animate-phone');
});

const icons = document.querySelectorAll('#column-2 a img');
icons.forEach((icon, index) => {
    setTimeout(() => {
        icon.classList.add('fade-in');
    }, index * 500); // 500ms delay between each icon
});

const siseLogo = document.querySelector('#column-1 div img');
const siseText = document.querySelector('#hometext');
[siseLogo, siseText].forEach((el, index) => {
    setTimeout(() => {
        el.classList.add('slide-in');
    }, index * 300);
});

// Espera o evento de carregamento do DOM para iniciar o JavaScript
document.addEventListener('DOMContentLoaded', function () {
    
  // Animação do telefone na column-3
  let phoneImage = document.querySelector('#column-3 img');
  if (phoneImage) {
      phoneImage.classList.add('animate-phone');
  } else {
      console.log('Elemento do telefone não encontrado');
  }

  // Animação dos ícones na column-2
  let iconsColumn2 = document.querySelectorAll('#column-2 a img');
  if (iconsColumn2.length) {
      iconsColumn2.forEach((icon, index) => {
          setTimeout(() => {
              icon.classList.add('fade-in');
          }, index * 500);
      });
  } else {
      console.log('Ícones da column-2 não encontrados');
  }

  // Animação dos elementos de funcionalidade em container-2
  let featureItems = document.querySelectorAll('.feature-section .feature-item');
  if (featureItems.length) {
      featureItems.forEach((item, index) => {
          setTimeout(() => {
              item.classList.add('slide-in-right');
          }, (index + 1) * 300);
      });
  } else {
      console.log('Elementos de funcionalidade do container-2 não encontrados');
  }

  // Animação dos ícones em container-3
  let iconsContainer3 = document.querySelectorAll('.container-3 .icon');
  if (iconsContainer3.length) {
      iconsContainer3.forEach((icon, index) => {
          setTimeout(() => {
              icon.classList.add('fade-in');
          }, (index + 1) * 300);
      });
  } else {
      console.log('Ícones do container-3 não encontrados');
  }

});

