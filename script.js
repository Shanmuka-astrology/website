



const toggleButton = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (toggleButton && siteNav) {
  toggleButton.addEventListener("click", () => {
    const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!isOpen));
    toggleButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    siteNav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleButton.setAttribute("aria-expanded", "false");
      toggleButton.setAttribute("aria-label", "Open menu");
      siteNav.classList.remove("is-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !toggleButton.contains(event.target)) {
      toggleButton.setAttribute("aria-expanded", "false");
      toggleButton.setAttribute("aria-label", "Open menu");
      siteNav.classList.remove("is-open");
    }
  });
}
