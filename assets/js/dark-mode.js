document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    if (!toggle) return;

    let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", storedTheme);

    function updateThemeElements(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // Force Navicon Update
        updateNavicon(theme);
    }

    function updateNavicon(theme) {
        const navicon = document.querySelector(".navicon");
        if (navicon) {
            const rootStyles = getComputedStyle(document.documentElement);
            navicon.style.backgroundColor = rootStyles.getPropertyValue("--masthead-background-color").trim();
            navicon.style.color = rootStyles.getPropertyValue("--masthead-text-color").trim();

            // ✅ Force a Repaint to Ensure the Color Updates
            navicon.style.display = "none";
            setTimeout(() => {
                navicon.style.display = "block";
            }, 10);
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
