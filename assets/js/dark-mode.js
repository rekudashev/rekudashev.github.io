document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    if (!toggle) return;

    let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", storedTheme);

    function updateThemeElements(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // Force Navicon to Invert
        updateNavicon(theme);
    }

    function updateNavicon(theme) {
        const navicon = document.querySelector(".navicon");
        if (navicon) {
            navicon.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--masthead-background-color");
            navicon.style.color = getComputedStyle(document.documentElement).getPropertyValue("--masthead-text-color");
        }
    }

    updateThemeElements(storedTheme);

    toggle.addEventListener("click", function () {
        let newTheme = storedTheme === "dark" ? "light" : "dark";
        updateThemeElements(newTheme);
        storedTheme = newTheme;
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        let systemTheme = e.matches ? "dark" : "light";
        updateThemeElements(systemTheme);
    });
});
