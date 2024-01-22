const icon_hamburger = document.querySelector(".icon-hamburger");
const nav_links = document.querySelector(".nav-links");

console.log(icon_hamburger);
console.log(nav_links);

icon_hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("active-nav");
});