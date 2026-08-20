document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menu-toggle");

    const navMenu =
        document.getElementById("nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const themeButton =
        document.getElementById("theme-btn");

    const themeIcon =
        document.getElementById("theme-icon");

    const themeText =
        document.getElementById("theme-text");

    const currentYear =
        document.getElementById("current-year");


    /* =========================
       CURRENT YEAR
    ========================== */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================
       MOBILE MENU
    ========================== */

    function closeMenu() {

        menuToggle.classList.remove("active");

        navMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }


    function openMenu() {

        menuToggle.classList.add("active");

        navMenu.classList.add("active");

        document.body.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    }


    menuToggle.addEventListener(
        "click",
        function () {

            const menuIsOpen =
                navMenu.classList.contains("active");

            if (menuIsOpen) {
                closeMenu();
            }
            else {
                openMenu();
            }

        }
    );


    /* CLOSE MENU WHEN LINK IS CLICKED */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    /* CLOSE MENU WITH ESCAPE */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


    /* CLOSE MENU IF SCREEN BECOMES DESKTOP */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 800) {
                closeMenu();
            }

        }
    );


    /* =========================
       DARK MODE
    ========================== */

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        themeIcon.textContent = "☀️";

        themeText.textContent =
            "Light Mode";

    }


    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const darkModeActive =
                document.body.classList.contains(
                    "dark-mode"
                );


            if (darkModeActive) {

                themeIcon.textContent = "☀️";

                themeText.textContent =
                    "Light Mode";

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

            }
            else {

                themeIcon.textContent = "🌙";

                themeText.textContent =
                    "Dark Mode";

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

            }

        }
    );


    /* =========================
       SCROLL ANIMATION
    ========================== */

    const fadeElements =
        document.querySelectorAll(
            ".fade-in"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    fadeElements.forEach(
        function (element) {

            observer.observe(element);

        }
    );


    /* =========================
       ACTIVE NAV LINK
    ========================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                    &&
                    window.scrollY <
                    sectionTop +
                    sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active-link"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );

});
