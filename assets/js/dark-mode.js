document.addEventListener("DOMContentLoaded", function () {
    function initializeDarkMode() {
        const toggle = document.getElementById("dark-mode-toggle");

        if (!toggle) {
            console.error("Dark Mode button not found!");
            return;
        }

        console.log("Dark Mode button found!");

        // Get stored theme or default to "custom" (light)
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

        console.log("Dark Mode script loaded successfully!");
    }

    // Wait for the full DOM to be loaded, then initialize dark mode
    window.addEventListener("load", initializeDarkMode);
});
