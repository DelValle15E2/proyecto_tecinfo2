document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach((img, index) => {
        img.addEventListener("click", () => {
            alert(`Has hecho clic en la imagen ${index + 1}`);
        });
    });
});
