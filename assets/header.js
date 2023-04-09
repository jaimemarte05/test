const open = document.querySelector(".open-btn-menu");
const close = document.querySelector(".close-btn-menu");
const enlaces = document.querySelector(".menu-major");

open.addEventListener("click", () => {
    enlaces.classList.toggle("activado");
    enlaces.classList.toggle("remove");
    close.classList.toggle("remove");
});

