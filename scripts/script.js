document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");

    window.addEventListener("scroll", function() {
        const headerRect = header.getBoundingClientRect();
        if (headerRect.bottom < 0) {
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
        }
    });
});