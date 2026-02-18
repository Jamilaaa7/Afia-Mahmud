// =======================
// NAVBAR SCROLL EFFECT
// =======================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// =======================
// HAMBURGER MENU
// =======================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// =======================
// GALLERY FILTER (FIXED)
// =======================
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active button style
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// =======================
// INLINE VIDEO PLAY
// =======================
function playInlineVideo(videoId, playIconEl) {
  const video = document.getElementById(videoId);
  if (!video) return;
  playIconEl.style.display = 'none';
  video.controls = true;
  video.play();
}

// =======================
// LIGHTBOX (IMAGE + VIDEO)
// =======================
function openLightbox(el) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");

  const type = el.getAttribute("data-type");
  const src = el.getAttribute("data-src");

  content.innerHTML = "";

  if (type === "video") {
    content.innerHTML = `
      <video controls autoplay playsinline>
        <source src="${src}">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    content.innerHTML = `
      <img src="${src}" alt="Preview" />
    `;
  }

  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");

  // clears HTML so video stops
  content.innerHTML = "";
  lightbox.classList.remove("active");
}

// close if click outside content
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
