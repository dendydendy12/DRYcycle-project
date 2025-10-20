document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  if (!menuBtn || !mobileMenu || !overlay) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("show");

    const spans = menuBtn.querySelectorAll("span");
    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-2");
    spans[1].classList.toggle("opacity-0");
    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-2");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("show");

    const spans = menuBtn.querySelectorAll("span");
    spans[0].classList.remove("rotate-45", "translate-y-2");
    spans[1].classList.remove("opacity-0");
    spans[2].classList.remove("-rotate-45", "-translate-y-2");
  });
});
