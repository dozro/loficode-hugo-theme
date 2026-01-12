// Keyboard navigation script
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

// Keyboard navigation for next and previous links

document.addEventListener("DOMContentLoaded", () => {
  console.log("Consolidated keyboard navigation script by Rye (https://itsrye.dev) loaded.");
  console.log("Keyboard navigation script loaded.");
  const navPrevEl = document.getElementById("ry_nav_previous_a")
  const navNextEl = document.getElementById("ry_nav_next_a")

  document.addEventListener("keydown", (e) => {
    // next page with 'n' key
    const activeElement = document.activeElement;
    if ((e.key === "n" || e.key === "ArrowRight") && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (
        activeElement.tagName !== "INPUT" &&
        activeElement.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        if (navNextEl)
          navNextEl.click();
        else
          console.error("No ry_nav_next_a element found for 'n' key navigation.");
      }
    }
    // previous page with 'p' key
    else if ((e.key === "p" || e.key === "ArrowLeft") && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const activeElement = document.activeElement;
      if (
        activeElement.tagName !== "INPUT" &&
        activeElement.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        if (navPrevEl)
          navPrevEl.click();
        else
          console.error("No ry_nav_previous_a element found for 'p' key navigation.");
      }
    } else if ((e.key === "Escape" || e.key === "x") && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const activeElement = document.activeElement;
      if (
        activeElement.tagName !== "INPUT" &&
        activeElement.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        if (document.getElementById("ry_close_post"))
          document.getElementById("ry_close_post").click();
        else
          console.error("No ry_close_post element found for Escape/x key navigation.");
      }
    }
    // Theme toggle with 't' key
    else if (e.key === "t" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const activeElement = document.activeElement;
      if (
        activeElement.tagName !== "INPUT" &&
        activeElement.tagName !== "TEXTAREA"
      ) {
        if (themeToggle) {
          themeToggle.click();
        }
      }
    }
    // Mute toggle with 'm' key
    else if (e.key === "m" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const activeElement = document.activeElement;
      if (
        activeElement.tagName !== "INPUT" &&
        activeElement.tagName !== "TEXTAREA"
      ) {
        if (muteToggle) {
          muteToggle.click();
        }
      }
    }
  });
});