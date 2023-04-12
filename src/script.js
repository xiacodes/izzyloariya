// ------------------------------------ //
// >> VARIABLES <<
const button = document.querySelector("#down-icon-box");
const toggler = document.querySelector(".toggle-box");
const togglerIcon = document.querySelector(".toggler-icon");
const hero = document.querySelector(".hero");
const aboutLink = document.querySelector("#about-link");
const navLinksSection = document.querySelector("#navlinks-section");

// ------------------------------------ //
// >> MAIN <<
button.addEventListener("click", smoothScroll);

// ------------------------------------ //
// >> FUNCTIONS <<
toggler.addEventListener("click", () => {
  if (toggler.dataset.mode === "light") {
    hideElement(navLinksSection, 2);
    toggler.dataset.mode = "night";
  } else {
    hideElement(navLinksSection, 1);
    toggler.dataset.mode = "light";
  }
});
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.dataset.target;
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 650;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressPercentage = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * progressPercentage);
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}
function hideElement(element, state) {
  if (state === 1) {
    element.style.display = "none";
  } else if (state === 2) {
    element.style.display = "block";
  }
}
