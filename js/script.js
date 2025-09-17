// ======= NAVBAR ACTIVE LINK HIGHLIGHT =======
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.href;
  const menuItems = document.querySelectorAll(".nav-menu a");

  menuItems.forEach(link => {
    if (currentLocation.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

// ======= SMOOTH SCROLL FOR INTERNAL LINKS =======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ======= CONTACT FORM VALIDATION =======
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields before submitting.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // Success
    alert("✅ Thank you, " + name + "! Your message has been sent.");
    form.reset();
  });
}

// ======= SCROLL ANIMATION FOR SERVICE CARDS =======
const serviceCards = document.querySelectorAll(".service-card");
const revealOnScroll = () => {
  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 50) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // call once on load

// ===== Scroll Reveal Effect =====
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".service-card, .about-image, .about-text");

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // run once on load
});
