const services = [
  {
    title: "Palm Reading",
    description: "Insight into your life path, personality, and future through the lines of your hands.",
    imageClass: "image-palm"
  },
  {
    title: "Face Reading",
    description: "Understanding character, emotions, and destiny through facial features and expressions.",
    imageClass: "image-face"
  },
  {
    title: "Horoscope Reading",
    description: "Personalized astrological guidance based on your birth chart and planetary positions.",
    imageClass: "image-horoscope"
  },
  {
    title: "Love Reading",
    description: "Spiritual insight to help understand relationships, compatibility, and emotional connections.",
    imageClass: "image-love"
  },
  {
    title: "Tarot Reading",
    description: "Card-based intuitive guidance to gain clarity about present situations and future possibilities.",
    imageClass: "image-tarot"
  },
  {
    title: "Negative Energy Removal",
    description: "Spiritual cleansing to release unwanted energies and restore balance and peace.",
    imageClass: "image-energy"
  },
  {
    title: "Fix Family Issues",
    description: "Guidance and energy healing to improve harmony and resolve family conflicts.",
    imageClass: "image-family"
  },
  {
    title: "Witchcraft Removal",
    description: "Protective spiritual practices aimed at removing harmful influences and restoring positive energy.",
    imageClass: "image-witchcraft"
  }
];

const testimonials = [
  {
    name: "Rajesh K",
    initials: "RK",
    review: "Shanmuka helped me understand negative energy that I felt was affecting my home and career. After his cleansing and spiritual guidance, I noticed a real shift in my mindset and overall peace. His approach is respectful, professional, and very insightful."
  },
  {
    name: "Priya S",
    initials: "PS",
    review: "I had a reading with Shanmuka during a very confusing time in my life, and his guidance brought incredible clarity. His astrology and energy reading felt accurate and deeply personal. After the session, I felt calmer and more confident about my decisions."
  },
  {
    name: "Jeanne Wood",
    initials: "JW",
    review: "The horoscope and psychic reading I received from Shanmuka was surprisingly detailed and meaningful. He explained things in a clear and compassionate way and offered practical spiritual remedies. I left the session feeling protected, positive, and hopeful."
  }
];

const servicesGrid = document.getElementById("services-grid");
const testimonialsGrid = document.getElementById("testimonials-grid");

if (servicesGrid) {
  servicesGrid.innerHTML = services
    .map(
      ({ title, description, imageClass }) => `
        <article class="service-card">
          <div class="service-image ${imageClass}" aria-hidden="true"></div>
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `
    )
    .join("");
}



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
