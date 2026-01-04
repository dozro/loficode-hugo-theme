// Keyboard navigation script for posts
// Copyright (c) 2025 Rye (https://rye.dev). Licensed under Apache 2.0 License.

// Keyboard navigation for next and previous links
function handleShortcut(event) {
    switch (event.key) {
        case "ArrowRight":
        case "n":
            event.preventDefault();
            document.getElementById("ry_nav_next_a").click();
            break;
        case "ArrowLeft":
        case "p":
            event.preventDefault();
            document.getElementById("ry_nav_previous_a").click();
            break;
        case "Escape":
        case "x":
            event.preventDefault();
            document.getElementById("ry_close_post").click();
            break;
    }
}

console.log("Keyboard navigation script for posts by Rye (https://rye.dev) loaded.");
document.addEventListener("keydown", handleShortcut);