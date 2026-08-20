/* ================================
   VARIABLES
================================ */

:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-light: #dbeafe;

    --background: #ffffff;
    --background-alt: #f8fafc;

    --card-background: #ffffff;

    --text: #0f172a;
    --text-light: #475569;
    --text-muted: #64748b;

    --border: #e2e8f0;

    --shadow:
        0 10px 30px rgba(15, 23, 42, 0.08);

    --shadow-hover:
        0 20px 45px rgba(15, 23, 42, 0.14);

    --radius: 18px;

    --transition: 0.3s ease;
}


/* ================================
   DARK MODE
================================ */

body.dark-mode {
    --background: #0b1120;
    --background-alt: #111827;

    --card-background: #172033;

    --text: #f8fafc;
    --text-light: #cbd5e1;
    --text-muted: #94a3b8;

    --border: #273449;

    --primary-light: rgba(37, 99, 235, 0.15);

    --shadow:
        0 10px 30px rgba(0, 0, 0, 0.25);

    --shadow-hover:
        0 20px 45px rgba(0, 0, 0, 0.4);
}


/* ================================
   RESET
================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}


body {
    font-family:
        "Segoe UI",
        Arial,
        sans-serif;

    background: var(--background);
    color: var(--text);

    line-height: 1.6;

    overflow-x: hidden;

    transition:
        background var(--transition),
        color var(--transition);
}


a {
    color: inherit;
}


img {
    max-width: 100%;
    display: block;
}


button,
a {
    -webkit-tap-highlight-color: transparent;
}


/* ================================
   NAVIGATION
================================ */

.navbar {
    height: 76px;

    width: 100%;

    padding: 0 7%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    background:
        rgba(255, 255, 255, 0.92);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    border-bottom:
        1px solid var(--border);

    transition: var(--transition);
}


body.dark-mode .navbar {
    background:
        rgba(11, 17, 32, 0.92);
}


.nav-logo {
    font-size: 1.65rem;
    font-weight: 800;

    color: var(--text);

    text-decoration: none;

    letter-spacing: -1px;
}


.nav-logo span {
    color: var(--primary);
}


.nav-menu {
    display: flex;
    align-items: center;
    gap: 30px;
}


.nav-menu ul {
    display: flex;
    align-items: center;

    gap: 28px;

    list-style: none;
}


.nav-link {
    text-decoration: none;

    font-size: 0.92rem;
    font-weight: 600;

    color: var(--text-light);

    position: relative;

    transition: var(--transition);
}


.nav-link::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: var(--primary);

    transition: width var(--transition);
}


.nav-link:hover {
    color: var(--primary);
}


.nav-link:hover::after {
    width: 100%;
}


.theme-btn {
    border: 1px solid var(--border);

    background: var(--card-background);
    color: var(--text);

    border-radius: 10px;

    padding: 9px 13px;

    cursor: pointer;

    font-weight: 600;

    transition: var(--transition);
}


.theme-btn:hover {
    border-color: var(--primary);

    color: var(--primary);
}


/* ================================
   MOBILE MENU BUTTON
================================ */

.menu-toggle {
    display: none;

    width: 44px;
    height: 44px;

    border: none;

    background: transparent;

    cursor: pointer;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 6px;

    z-index: 1100;
}


.menu-toggle span {
    display: block;

    width: 25px;
    height: 2px;

    border-radius: 10px;

    background: var(--text);

    transition: 0.3s ease;
}


.menu-toggle.active span:nth-child(1) {
    transform:
        translateY(8px)
        rotate(45deg);
}


.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}


.menu-toggle.active span:nth-child(3) {
    transform:
        translateY(-8px)
        rotate(-45deg);
}


/* ================================
   HERO
================================ */

.hero {
    width: min(1180px, 90%);

    min-height: 100vh;

    margin: auto;

    padding-top: 120px;

    display: grid;

    grid-template-columns:
        1.2fr 0.8fr;

    gap: 70px;

    align-items: center;
}


.hero-label,
.section-label {
    color: var(--primary);

    font-size: 0.78rem;

    font-weight: 800;

    letter-spacing: 2px;

    margin-bottom: 14px;
}


.hero h1 {
    font-size:
        clamp(3rem, 6vw, 5.4rem);

    line-height: 1.03;

    letter-spacing: -3px;

    margin-bottom: 20px;
}


.hero h1 span {
    display: block;

    color: var(--primary);
}


.hero h2 {
    font-size:
        clamp(1.25rem, 2vw, 1.7rem);

    color: var(--text-light);

    font-weight: 500;

    margin-bottom: 24px;
}


.hero-description {
    max-width: 650px;

    color: var(--text-light);

    font-size: 1.05rem;

    line-height: 1.8;
}


.hero-buttons {
    display: flex;

    gap: 14px;

    margin-top: 34px;

    flex-wrap: wrap;
}


.btn {
    min-height: 48px;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    padding: 13px 24px;

    border-radius: 10px;

    text-decoration: none;

    font-weight: 700;

    transition: var(--transition);
}


.primary-btn {
    background: var(--primary);

    color: white;
}


.primary-btn:hover {
    background: var(--primary-dark);

    transform: translateY(-2px);
}


.secondary-btn {
    border:
        1px solid var(--border);

    color: var(--text);

    background: var(--card-background);
}


.secondary-btn:hover {
    border-color: var(--primary);

    color: var(--primary);

    transform: translateY(-2px);
}


.hero-socials {
    display: flex;

    gap: 25px;

    margin-top: 28px;
}


.hero-socials a {
    color: var(--text-light);

    font-size: 0.9rem;

    font-weight: 600;

    text-decoration: none;
}


.hero-socials a:hover {
    color: var(--primary);
}


/* ================================
   PROFILE IMAGE
================================ */

.hero-image {
    display: flex;

    justify-content: center;
}


.image-wrapper {
    position: relative;

    width: 340px;
    height: 420px;

    border-radius: 30px;

    padding: 8px;

    background:
        linear-gradient(
            145deg,
            var(--primary),
            #60a5fa
        );

    box-shadow:
        0 30px 60px
        rgba(37, 99, 235, 0.2);
}


.profile-pic {
    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: center top;

    border-radius: 24px;

    background: var(--background-alt);
}


/* ================================
   GENERAL SECTIONS
================================ */

.section {
    padding: 105px 7%;
}


.section-alt {
    background: var(--background-alt);
}


.section-heading {
    max-width: 720px;

    margin-bottom: 50px;
}


.section-heading h2 {
    font-size:
        clamp(2rem, 4vw, 3.1rem);

    letter-spacing: -1.5px;

    margin-bottom: 15px;
}


.section-heading > p:not(.section-label) {
    color: var(--text-light);

    line-height: 1.8;
}


/* ================================
   ABOUT
================================ */

.about-container {
    display: grid;

    grid-template-columns:
        1.1fr 0.9fr;

    gap: 60px;

    align-items: start;
}


.about-text p {
    color: var(--text-light);

    margin-bottom: 18px;

    line-height: 1.85;
}


.about-highlights {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}


.highlight-card {
    padding: 25px;

    background:
        var(--card-background);

    border:
        1px solid var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        var(--shadow);

    transition:
        var(--transition);
}


.highlight-card:hover {
    transform:
        translateY(-5px);

    box-shadow:
        var(--shadow-hover);
}


.highlight-card > span {
    color: var(--primary);

    font-size: 1.2rem;

    font-weight: 800;
}


.highlight-card h3 {
    margin:
        12px 0 5px;

    font-size: 1rem;
}


.highlight-card p {
    color: var(--text-muted);

    font-size: 0.85rem;
}


/* ================================
   SKILLS
================================ */

.skills-container {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


.skill-card {
    padding: 30px;

    background:
        var(--card-background);

    border:
        1px solid var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        var(--shadow);

    transition:
        var(--transition);
}


.skill-card:hover {
    transform:
        translateY(-6px);

    border-color:
        rgba(37, 99, 235, 0.4);

    box-shadow:
        var(--shadow-hover);
}


.skill-icon {
    width: 48px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background:
        var(--primary-light);

    color:
        var(--primary);

    font-size: 0.75rem;

    font-weight: 900;

    margin-bottom: 20px;
}


.skill-card h3 {
    font-size: 1.1rem;

    margin-bottom: 20px;
}


.skill-tags {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;
}


.skill-tags span,
.tech-stack span {
    display: inline-block;

    padding: 6px 10px;

    background:
        var(--background-alt);

    border:
        1px solid var(--border);

    border-radius: 7px;

    color:
        var(--text-light);

    font-size: 0.78rem;

    font-weight: 600;
}


/* ================================
   PROJECTS
================================ */

.projects-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 24px;
}


.project-card {
    position: relative;

    display: flex;

    flex-direction: column;

    padding: 35px;

    background:
        var(--card-background);

    border:
        1px solid var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        var(--shadow);

    overflow: hidden;

    transition:
        var(--transition);
}


.project-card:hover {
    transform:
        translateY(-7px);

    border-color:
        rgba(37, 99, 235, 0.45);

    box-shadow:
        var(--shadow-hover);
}


.project-top {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 25px;
}


.project-number {
    font-size: 2rem;

    font-weight: 800;

    color:
        var(--primary);
}


.project-type {
    font-size: 0.65rem;

    font-weight: 800;

    letter-spacing: 1px;

    color:
        var(--text-muted);
}


.project-card h3 {
    font-size: 1.35rem;

    margin-bottom: 15px;
}


.project-card > p {
    color:
        var(--text-light);

    font-size: 0.92rem;

    line-height: 1.75;

    margin-bottom: 12px;
}


.tech-stack {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin:
        12px 0 25px;
}


.project-link {
    display: flex;

    align-items: center;

    gap: 8px;

    margin-top: auto;

    color:
        var(--primary);

    font-size: 0.9rem;

    font-weight: 700;

    text-decoration: none;
}


.project-link span {
    transition:
        transform var(--transition);
}


.project-link:hover span {
    transform:
        translateX(5px);
}


/* ================================
   EXPERIENCE
================================ */

.experience-container {
    max-width: 900px;
}


.experience-card {
    display: grid;

    grid-template-columns:
        120px 1fr;

    gap: 35px;

    padding: 35px;

    background:
        var(--card-background);

    border:
        1px solid var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        var(--shadow);
}


.experience-date {
    color:
        var(--primary);

    font-size: 1.2rem;

    font-weight: 800;
}


.experience-type {
    color:
        var(--primary);

    font-size: 0.68rem;

    font-weight: 800;

    letter-spacing: 1.3px;

    margin-bottom: 8px;
}


.experience-content h3 {
    font-size: 1.4rem;

    margin-bottom: 4px;
}


.experience-content h4 {
    color:
        var(--text-muted);

    font-weight: 500;

    margin-bottom: 20px;
}


.experience-content ul {
    padding-left: 20px;
}


.experience-content li {
    color:
        var(--text-light);

    margin-bottom: 10px;

    line-height: 1.7;
}


/* ================================
   EDUCATION
================================ */

.education-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 22px;
}


.education-card {
    position: relative;

    padding: 35px;

    background:
        var(--card-background);

    border:
        1px solid var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        var(--shadow);

    transition:
        var(--transition);
}


.education-card:hover {
    transform:
        translateY(-5px);

    box-shadow:
        var(--shadow-hover);
}


.education-date {
    color:
        var(--primary);

    font-size: 0.8rem;

    font-weight: 800;
}


.education-status {
    display: inline-block;

    margin-left: 8px;

    padding: 3px 7px;

    background:
        var(--primary-light);

    color:
        var(--primary);

    border-radius: 5px;

    font-size: 0.62rem;

    font-weight: 800;
}


.education-card h3 {
    font-size: 1.3rem;

    margin:
        15px 0 4px;
}


.education-card h4 {
    color:
        var(--text-muted);

    font-weight: 500;

    margin-bottom: 18px;
}


.education-card > p:last-child {
    color:
        var(--text-light);

    line-height: 1.75;
}


/* ================================
   RESUME
================================ */

.resume-section {
    padding:
        100px 7%;

    background:
        linear-gradient(
            135deg,
            #1d4ed8,
            #2563eb,
            #3b82f6
        );

    color: white;

    text-align: center;
}


.resume-content {
    max-width: 700px;

    margin: auto;
}


.resume-section .section-label {
    color:
        #bfdbfe;
}


.resume-section h2 {
    font-size:
        clamp(2rem, 4vw, 3rem);

    margin-bottom: 15px;
}


.resume-section p:not(.section-label) {
    color:
        rgba(255,255,255,0.85);

    line-height: 1.8;

    margin-bottom: 30px;
}


.resume-btn {
    background: white;

    color:
        #1d4ed8;
}


.resume-btn:hover {
    transform:
        translateY(-3px);

    box-shadow:
        0 10px 30px
        rgba(0,0,0,0.15);
}


/* ================================
   CONTACT
================================ */

.contact-container {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}


.contact-card {
    min-width: 0;

    display: flex;

    align-items: center;

    gap: 16px;

    padding: 24px;

    background:
        var(--card-background);

    border:
        1px solid var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        var(--shadow);

    text-decoration: none;

    transition:
        var(--transition);
}


.contact-card:hover {
    transform:
        translateY(-5px);

    border-color:
        var(--primary);

    box-shadow:
        var(--shadow-hover);
}


.contact-icon {
    min-width: 46px;
    height: 46px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background:
        var(--primary-light);

    color:
        var(--primary);

    font-weight: 800;
}


.contact-card small {
    display: block;

    color:
        var(--text-muted);

    font-size: 0.65rem;

    font-weight: 800;

    letter-spacing: 1px;

    margin-bottom: 3px;
}


.contact-card strong {
    display: block;

    font-size: 0.88rem;

    overflow-wrap: anywhere;
}


/* ================================
   FOOTER
================================ */

footer {
    padding:
        35px 7%;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    background:
        var(--background-alt);

    border-top:
        1px solid var(--border);
}


.footer-brand strong {
    font-size: 1rem;
}


.footer-brand p,
.copyright {
    color:
        var(--text-muted);

    font-size: 0.8rem;
}


/* ================================
   FADE ANIMATION
================================ */

.fade-in {
    opacity: 0;

    transform:
        translateY(30px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}


.fade-in.visible {
    opacity: 1;

    transform:
        translateY(0);
}


/* ================================
   TABLET
================================ */

@media (max-width: 1000px) {

    .navbar {
        padding:
            0 5%;
    }


    .nav-menu ul {
        gap: 18px;
    }


    .hero {
        width: 90%;

        grid-template-columns:
            1fr 0.75fr;

        gap: 35px;
    }


    .image-wrapper {
        width: 290px;
        height: 370px;
    }


    .skills-container {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .contact-container {
        grid-template-columns:
            1fr;
    }

}


/* ================================
   MOBILE NAVIGATION
================================ */

@media (max-width: 800px) {

    .navbar {
        height: 68px;

        padding:
            0 20px;
    }


    .menu-toggle {
        display: flex;
    }


    .nav-menu {
        position: fixed;

        top: 0;
        right: -100%;

        width: min(82%, 340px);

        height: 100dvh;

        padding:
            95px 30px 35px;

        display: flex;

        flex-direction: column;

        align-items: stretch;

        justify-content:
            flex-start;

        gap: 30px;

        background:
            var(--card-background);

        border-left:
            1px solid var(--border);

        box-shadow:
            -15px 0 40px
            rgba(0,0,0,0.15);

        transition:
            right 0.35s ease;

        overflow-y: auto;

        z-index: 1050;
    }


    .nav-menu.active {
        right: 0;
    }


    .nav-menu ul {
        display: flex;

        flex-direction: column;

        align-items: stretch;

        gap: 5px;
    }


    .nav-link {
        display: block;

        width: 100%;

        padding:
            14px 5px;

        font-size: 1.05rem;

        border-bottom:
            1px solid var(--border);
    }


    .nav-link::after {
        display: none;
    }


    .theme-btn {
        width: 100%;

        min-height: 48px;
    }


    body.menu-open {
        overflow: hidden;
    }


    body.menu-open::after {
        content: "";

        position: fixed;

        inset: 0;

        background:
            rgba(0,0,0,0.45);

        z-index: 900;
    }


    /* HERO */

    .hero {
        width: 100%;

        min-height: auto;

        padding:
            110px 25px 80px;

        display: flex;

        flex-direction: column;

        text-align: center;

        gap: 40px;
    }


    .hero-content {
        order: 2;
    }


    .hero-image {
        order: 1;
    }


    .image-wrapper {
        width: 220px;
        height: 270px;

        border-radius: 24px;
    }


    .profile-pic {
        border-radius: 19px;
    }


    .hero h1 {
        font-size:
            clamp(2.6rem, 11vw, 4rem);

        letter-spacing: -2px;
    }


    .hero-description {
        max-width: 600px;

        margin: auto;

        font-size: 0.98rem;
    }


    .hero-buttons {
        justify-content: center;
    }


    .hero-socials {
        justify-content: center;
    }


    /* SECTIONS */

    .section {
        padding:
            80px 25px;
    }


    .section-heading {
        margin-bottom: 35px;
    }


    .about-container {
        grid-template-columns:
            1fr;

        gap: 35px;
    }


    .projects-grid {
        grid-template-columns:
            1fr;
    }


    .education-grid {
        grid-template-columns:
            1fr;
    }


    .experience-card {
        grid-template-columns:
            1fr;

        gap: 15px;
    }


    .experience-date {
        font-size: 0.9rem;
    }


    .resume-section {
        padding:
            80px 25px;
    }


    footer {
        padding:
            30px 25px;

        flex-direction: column;

        text-align: center;
    }

}


/* ================================
   SMALL MOBILE PHONES
================================ */

@media (max-width: 560px) {

    .section {
        padding:
            70px 18px;
    }


    .navbar {
        padding:
            0 16px;
    }


    .nav-logo {
        font-size: 1.5rem;
    }


    .nav-menu {
        width: 85%;

        padding-left: 25px;
        padding-right: 25px;
    }


    .hero {
        padding:
            100px 18px 65px;
    }


    .image-wrapper {
        width: 175px;
        height: 215px;

        border-radius: 20px;
    }


    .profile-pic {
        border-radius: 15px;
    }


    .hero-label {
        font-size: 0.68rem;

        letter-spacing: 1.5px;
    }


    .hero h1 {
        font-size: 2.65rem;

        letter-spacing: -1.7px;
    }


    .hero h2 {
        font-size: 1.08rem;
    }


    .hero-description {
        font-size: 0.92rem;

        line-height: 1.75;
    }


    .hero-buttons {
        flex-direction: column;

        width: 100%;
    }


    .hero-buttons .btn {
        width: 100%;
    }


    .hero-socials {
        gap: 18px;

        flex-wrap: wrap;
    }


    .section-heading h2 {
        font-size: 2rem;

        line-height: 1.15;
    }


    .about-highlights {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 10px;
    }


    .highlight-card {
        padding: 18px;
    }


    .highlight-card p {
        font-size: 0.75rem;
    }


    .skills-container {
        grid-template-columns:
            1fr;
    }


    .skill-card {
        padding: 25px 20px;
    }


    .project-card {
        padding: 25px 20px;
    }


    .project-top {
        align-items: flex-start;

        gap: 15px;
    }


    .project-number {
        font-size: 1.6rem;
    }


    .project-type {
        text-align: right;
    }


    .experience-card {
        padding: 25px 20px;
    }


    .education-card {
        padding: 25px 20px;
    }


    .contact-card {
        padding: 20px 17px;
    }


    .contact-card strong {
        font-size: 0.8rem;

        overflow-wrap: anywhere;
    }


    .resume-section {
        padding:
            70px 18px;
    }

}


/* ================================
   VERY SMALL PHONES
================================ */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 2.25rem;
    }


    .image-wrapper {
        width: 155px;
        height: 195px;
    }


    .about-highlights {
        grid-template-columns:
            1fr;
    }


    .project-card {
        padding:
            22px 17px;
    }


    .project-top {
        flex-direction: column;

        gap: 4px;
    }


    .project-type {
        text-align: left;
    }


    .contact-icon {
        min-width: 40px;

        height: 40px;
    }

}
