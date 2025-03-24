document.addEventListener("DOMContentLoaded", function () {
    function initializeDarkMode() {
        const toggle = document.getElementById("dark-mode-toggle");

        if (!toggle) {
            console.error("Dark Mode button not found!");
            return;
        }

        console.log("Dark Mode button found!");

        // Get stored theme or default to "dark" (start in dark mode)
        let storedTheme = localStorage.getItem("theme") || "dark";
        applyTheme(storedTheme);

        function applyTheme(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
            updateButtonText(theme);

            // Force reflow to apply theme immediately
            document.documentElement.classList.remove("theme-transition");
            void document.documentElement.offsetWidth; // Trigger reflow
            document.documentElement.classList.add("theme-transition");
        }

        function updateButtonText(theme) {
            toggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
        }

        // ✅ Ensure click event works correctly
        toggle.addEventListener("click", function () {
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let newTheme = (currentTheme === "dark") ? "custom" : "dark";
            applyTheme(newTheme);
        });

        console.log("Dark Mode script loaded successfully!");
    }

    // Wait until everything is fully loaded, then initialize
    window.addEventListener("load", initializeDarkMode);
});
