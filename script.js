// TYPING EFFECT
const text = ["BSC(Hons) Software Engineering", "Web Developer"];
let index = 0, charIndex = 0, currentText = "", isDeleting = false;

function typeEffect() {
  if (index < text.length) {
    if (!isDeleting && charIndex <= text[index].length) {
      currentText = text[index].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
      currentText = text[index].substring(0, charIndex--);
    }
    document.getElementById("typing").textContent = currentText;

    if (charIndex === text[index].length) isDeleting = true;
    if (charIndex === 0 && isDeleting) {
      isDeleting = false;
      index = (index + 1) % text.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// CERTIFICATE MODAL
function openCert(src) {
  const modal = document.getElementById('certModal');
  modal.style.display = 'flex';
  document.getElementById('certModalImg').src = src;
}

function closeCert() {
  document.getElementById('certModal').style.display = 'none';
}

// SCROLL FADE-IN
const elements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("show");
  });
});

// SKILL BAR ANIMATION
const skillFills = document.querySelectorAll('.skill-fill');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  skillFills.forEach(fill => {
    const skillTop = fill.getBoundingClientRect().top;
    if(skillTop < triggerBottom) {
      fill.style.width = fill.getAttribute('data-width');
    }
  });
});

// MOBILE NAV TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// SMOOTH SCROLL & ACTIVE LINK HIGHLIGHT
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

navItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    if(navLinks.classList.contains('active')) navLinks.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || window.pageYOffset;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if(scrollPos >= top && scrollPos < bottom) {
      navItems.forEach(link => link.classList.remove('active-link'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if(activeLink) activeLink.classList.add('active-link');
    }
  });
});

function openPosterGallery() {
  document.getElementById("posterModal").style.display = "block";
}

function closePosterGallery() {
  document.getElementById("posterModal").style.display = "none";
}

window.onclick = function(event) {
  let modal = document.getElementById("posterModal");
  if(event.target == modal){
    modal.style.display = "none";
  }
}
