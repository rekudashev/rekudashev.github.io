document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");

    if (!toggle) return;

    // Get stored theme or default to "custom"
    let storedTheme = localStorage.getItem("theme") || "custom";
    document.documentElement.setAttribute("data-theme", storedTheme);
    updateButtonText(storedTheme);

    function updateTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateButtonText(theme);
    }

    function updateButtonText(theme) {
        toggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    }

    toggle.addEventListener("click", function () {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = (currentTheme === "custom") ? "dark" : "custom";
        updateTheme(newTheme);
    });
});
