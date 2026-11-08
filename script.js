/* =================================
   CAFÉ AURELIA - JAVASCRIPT
================================= */


/* =================================
   1. MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");

        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


/* =================================
   2. DARK / LIGHT MODE
================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function setTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    themeIcon.classList.toggle("fa-moon", theme !== "dark");
    themeIcon.classList.toggle("fa-sun", theme === "dark");

    themeIcon.classList.toggle("fa-regular", theme !== "dark");
    themeIcon.classList.toggle("fa-solid", theme === "dark");

    localStorage.setItem("cafeTheme", theme);
}

// Load saved theme

const savedTheme = localStorage.getItem("cafeTheme") || "light";
setTheme(savedTheme);

// Switch theme

themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark-mode")
        ? "light"
        : "dark";

    setTheme(newTheme);
});


/* =================================
   3. FAQ ACCORDION
================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon i");

    question.addEventListener("click", () => {

        // Close other questions

        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");

                const otherIcon = otherItem.querySelector(".faq-icon i");
                otherIcon.classList.replace("fa-minus", "fa-plus");

                otherItem.querySelector(".faq-question")
                    .setAttribute("aria-expanded", "false");
            }
        });

        // Toggle selected question

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.classList.replace("fa-plus", "fa-minus");
        } else {
            icon.classList.replace("fa-minus", "fa-plus");
        }

        question.setAttribute(
            "aria-expanded",
            item.classList.contains("active")
        );
    });
});


/* =================================
   4. PRODUCT FAVORITE BUTTONS
================================= */

const favoriteButtons = document.querySelectorAll(".product-heart");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {
            icon.classList.replace("far", "fas");
            button.setAttribute("aria-pressed", "true");
        } else {
            icon.classList.replace("fas", "far");
            button.setAttribute("aria-pressed", "false");
        }

    });

});


/* =================================
   5. NEWSLETTER FORM
================================= */

const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    const emailInput = newsletterForm.querySelector("input");

    if (emailInput.value.trim() !== "") {

        alert("Thank you for subscribing to Café Aurelia!");

        newsletterForm.reset();

    }

});


/* =================================
   6. MOBILE DROPDOWN MENU
================================= */

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", event => {

    if (window.innerWidth <= 768) {

        event.preventDefault();

        const isOpen = dropdownMenu.style.display === "block";

        dropdownMenu.style.display = isOpen ? "none" : "block";

    }

});

// Reset dropdown when switching to desktop

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        dropdownMenu.style.display = "";
    }

});


/* =================================
   7. CURRENT YEAR IN FOOTER
================================= */

// Automatically update copyright year

const copyrightText = document.querySelector(".footer-bottom p");

if (copyrightText) {
    copyrightText.textContent =
        `© ${new Date().getFullYear()} Café Aurelia. All Rights Reserved.`;
}