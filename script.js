
// =========================
// 1. MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

  });

});


// =========================
// 2. MENU CATEGORY FILTERS
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // Get selected category
    const selectedCategory = button.dataset.category;

    // Update active filter button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    // Show matching menu cards
    menuCards.forEach((card) => {

      const cardCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        selectedCategory === cardCategory
      ) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }

    });

  });

});


// =========================
// 3. CONTACT FORM
// =========================

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  formStatus.textContent =
    "Thank you! Your message has been received in this demo.";

  contactForm.reset();

});
