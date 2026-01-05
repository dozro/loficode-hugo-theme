document.addEventListener("keydown", (e) => {
    // Theme toggle with 't' key
    if (e.key === "t" && !e.ctrlKey && !e.metaKey && !e.altKey) {
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
    if (e.key === "m" && !e.ctrlKey && !e.metaKey && !e.altKey) {
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