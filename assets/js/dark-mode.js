document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const theme = localStorage.getItem("theme");

    // Apply stored theme
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    // Toggle Dark Mode
    toggle.addEventListener("click", function () {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});
