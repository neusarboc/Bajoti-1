 // ========================
// ANIMACIÓ STAGGERED LETTERS AMB GSAP
// ========================

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona tots els textos que vols animar
  const animatedTexts = document.querySelectorAll('.animated-text');

  animatedTexts.forEach(animatedText => {
    // Crear spans per cada lletra
    animatedText.innerHTML = animatedText.textContent
      .split("")
      .map(char => `<span>${char}</span>`)
      .join("");

    // Animació GSAP
    gsap.from(animatedText.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: animatedText,
        start: "top 85%",  // quan entra a la vista
        end: "top 35%",    // quan surt
        scrub: true,       // anima segons scroll
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.05,       // retard entre lletres
      ease: "power2.out"
    });
  });
});
