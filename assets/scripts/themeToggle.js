// themeToggle.js
// Copyright 2026 Rye (itsrye.dev)
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Theme toggle functionality with auto-detection
const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

// Auto-detect theme preference
function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return savedTheme;
    }

    // Use system preference if no saved theme
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }

    return "light";
}

// Set initial theme
const currentTheme = getInitialTheme();
htmlElement.setAttribute("data-theme", currentTheme);

// Update button icon and text based on theme
function updateThemeIcon() {
    const isDark = htmlElement.getAttribute("data-theme") === "dark";
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? "☀️" : "🌙";
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem("theme")) {
                const newTheme = e.matches ? "dark" : "light";
                htmlElement.setAttribute("data-theme", newTheme);
                updateThemeIcon();
            }
        });
}

if (themeToggle) {
    updateThemeIcon();

    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon();
    });
}