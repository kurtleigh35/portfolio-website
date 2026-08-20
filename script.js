document.addEventListener("DOMContentLoaded", function () {

    const hamburger =
        document.getElementById("hamburger");

    const navPanel =
        document.getElementById("nav-panel");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const themeButton =
        document.getElementById("theme-button");

    const themeIcon =
        document.getElementById("theme-icon");

    const themeText =
        document.getElementById("theme-text");

    const year =
        document.getElementById("year");


    /* =========================
       YEAR
    ========================== */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       MOBILE MENU
    ========================== */

    function openMenu() {

        hamburger.classList.add("active");

        navPanel.classList.add("open");

        document.body.classList.add("menu-open");

        hamburger.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    }


    function closeMenu() {

        hamburger.classList.remove("active");

        navPanel.classList.remove("open");

        document.body.classList.remove("menu-open");

        hamburger.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }


    hamburger.addEventListener(
        "click",
        function () {

            if (
                navPanel.classList.contains("open")
            ) {

                closeMenu();

            }
            else {

                openMenu();

            }

        }
    );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 780) {

                closeMenu();

            }

        }
    );


    /* =========================
       DARK MODE
    ========================== */

    const savedTheme =
        localStorage.getItem(
            "portfolioTheme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeIcon.textContent = "☀️";

        themeText.textContent = "Light";

    }


    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");


            const isDark =
                document.body.classList.contains(
                    "dark"
                );


            if (isDark) {

                themeIcon.textContent = "☀️";

                themeText.textContent = "Light";

                localStorage.setItem(
                    "portfolioTheme",
                    "dark"
                );

            }
            else {

                themeIcon.textContent = "🌙";

                themeText.textContent = "Dark";

                localStorage.setItem(
                    "portfolioTheme",
                    "light"
                );

            }

        }
    );


    /* =========================
       ACTIVE NAVIGATION LINK
    ========================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    function updateNavigation() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const top =
                    section.offsetTop - 140;

                const bottom =
                    top + section.offsetHeight;


                if (
                    window.scrollY >= top &&
                    window.scrollY < bottom
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove("active");


                const target =
                    link.getAttribute("href");


                if (
                    target ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateNavigation
    );


    updateNavigation();

});
