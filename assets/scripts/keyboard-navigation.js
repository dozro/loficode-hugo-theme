// Keyboard navigation script
// Copyright (c) 2025 Rye (https://rye.dev). Licensed under Apache 2.0 License.

// Keyboard navigation for next and previous links
function handleShortcut(event) {
  if (event.key === "n") {
    event.preventDefault();
    document.getElementById("nav_next_a").click();
  } else if (event.key === "p") {
    event.preventDefault();
    document.getElementById("nav_previous_a").click();
  }
}

console.log("Keyboard navigation script by Rye (https://rye.dev) loaded.");
document.addEventListener("keydown", handleShortcut);

