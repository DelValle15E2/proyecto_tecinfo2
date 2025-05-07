let indice = 0;

function moverCarrusel(direccion) {
  const carrusel = document.querySelector('.imagenes');
  const total = carrusel.children.length;
  indice += direccion;

  if (indice < 0) indice = total - 1;
  if (indice >= total) indice = 0;

  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}
