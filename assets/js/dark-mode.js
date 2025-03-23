document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    if (!toggle) return;

    let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", storedTheme);

    function updateThemeElements(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // Force Masthead Text Update
        updateMastheadText(theme);
    }

    function updateMastheadText(theme) {
        document.querySelectorAll(".masthead a, .nav__list a").forEach(link => {
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue("--masthead-text-color");
        });
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
