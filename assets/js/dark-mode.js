document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    if (!toggle) return;

    let storedTheme = localStorage.getItem("theme") || "custom";
    document.documentElement.setAttribute("data-theme", storedTheme);

    function updateTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    toggle.addEventListener("click", function () {
        let newTheme = (document.documentElement.getAttribute("data-theme") === "custom") ? "dark" : "custom";
        updateTheme(newTheme);
    });
});
