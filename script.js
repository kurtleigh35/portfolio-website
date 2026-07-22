document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});

const button = document.getElementById("theme-btn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});