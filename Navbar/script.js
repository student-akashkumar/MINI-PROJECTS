// JavaScript to show/hide the dropdown when hovering
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    dropdown.querySelector(".dropdown-content").style.display = "inline-flex";
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.querySelector(".dropdown-content").style.display = "none";
  });
});

// JavaScript to close the dropdown when clicking outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector(".dropdown-content").style.display = "none";
    });
  }
};


