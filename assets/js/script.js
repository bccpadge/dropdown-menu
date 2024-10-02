const dropdownBtn = document.querySelector("[data-js-toggle]");
const dropdownGroup = document.querySelector("[data-js-dropdown]");

dropdownBtn.addEventListener("click", () => {
  if (dropdownBtn.getAttribute("aria-expanded") === "false") {
    dropdownGroup.classList.add("active");
    dropdownBtn.setAttribute("aria-expanded", "true");
  } else {
    dropdownGroup.classList.remove("active");
    dropdownBtn.setAttribute("aria-expanded", "false");
  }
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    dropdownGroup.classList.remove("active");
    dropdownBtn.setAttribute("aria-expanded", "false");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("ul");
  const dropdownItems = list.querySelectorAll("li");
  let currentIndex = 0;

  const updateHighlight = () => {
    for (let i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].classList.remove('highlight'); // Remove highlight class
    }
    dropdownItems[currentIndex].classList.add('highlight');
    // Add highlight class to current item
  };

  // Keydown event listener
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      currentIndex = (currentIndex + 1) % dropdownItems.length; // Move down
      updateHighlight();
      event.preventDefault(); // Prevent default scroll behavior
    } else if (event.key === 'ArrowUp') {
      currentIndex = (currentIndex - 1 + dropdownItems.length) % dropdownItems.length; // Move up
      updateHighlight();
      event.preventDefault(); // Prevent default scroll behavior
    }
  });


  updateHighlight();
})