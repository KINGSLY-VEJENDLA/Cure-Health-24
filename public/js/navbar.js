document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("navMenu");

    if (!menuButton || !menu) {
        console.error("Mobile navigation elements not found.");
        return;
    }

    menuButton.addEventListener("click", function () {

        const isOpen = menu.classList.toggle("active");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    /* Close menu when clicking a link */

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});