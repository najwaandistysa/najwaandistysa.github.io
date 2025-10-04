  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
});

const animatedElements = document.querySelectorAll('.animate-up');
animatedElements.forEach(el => observer.observe(el));

const typingTextElement = document.getElementById('typing-text');
const sentences = ["Siswi Jurusan Rekayasa Perangkat Lunak", "Front End Developer"];
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = sentences[sentenceIndex];
  const speed = 50;
  const deleteSpeed = 25;

  if (!isDeleting && charIndex < currentText.length) {
    typingTextElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && charIndex > 0) {
    typingTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWriter, deleteSpeed);
  } else if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => isDeleting = true, 1500);
    setTimeout(typeWriter, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    setTimeout(typeWriter, 500);
  }
}

const typingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeWriter();
      typingObserver.unobserve(entry.target);
    }
  });
});
typingObserver.observe(typingTextElement);

// Skrip JavaScript untuk memastikan hanya satu tautan yang aktif
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Hapus kelas 'active' dari semua tautan
      navLinks.forEach(function (l) {
        l.classList.remove('active');
      });
      // Tambahkan kelas 'active' ke tautan yang baru saja diklik
      this.classList.add('active');
    });
  });
});