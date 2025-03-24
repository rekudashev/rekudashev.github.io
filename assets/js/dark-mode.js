document.addEventListener("DOMContentLoaded", function () {
    function initializeDarkMode() {
        const toggle = document.getElementById("dark-mode-toggle");

        if (!toggle) {
            console.error("❌ Dark Mode button not found!");
            return;
        }

        console.log("✅ Dark Mode button found!");

        // Get stored theme or default to "dark" (Dark Mode by default)
        let storedTheme = localStorage.getItem("theme") || "dark";
        console.log("🔄 Initial theme:", storedTheme);
        applyTheme(storedTheme);

        function applyTheme(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
            updateButtonText(theme);

            console.log("🎨 Applied theme:", theme);
        }

        function updateButtonText(theme) {
            toggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
            console.log("📝 Button text updated to:", toggle.textContent);
        }

        // ✅ Ensure click event toggles the theme
        toggle.addEventListener("click", function () {
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let newTheme = (currentTheme === "dark") ? "custom" : "dark";
            console.log("🛠 Switching theme from", currentTheme, "to", newTheme);
            applyTheme(newTheme);
        });

        console.log("🚀 Dark Mode script loaded successfully!");
    }

    // Ensure script runs after full page load
    window.addEventListener("load", initializeDarkMode);
});
