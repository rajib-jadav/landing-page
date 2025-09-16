const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (hamburger.innerHTML.includes("ri-menu-2-line")) {
    hamburger.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    hamburger.innerHTML = '<i class="ri-menu-2-line"></i>';
  }
});
// Close navbar when a link is clicked (for better UX on mobile)