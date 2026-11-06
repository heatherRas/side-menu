const menuIcon = document.getElementById
("menu-icon");

menuIcon.addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector("nav").classList.toggle("is-open");
    })