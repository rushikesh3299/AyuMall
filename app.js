const menuIcon = document.querySelector(".navbar-menu-icon")
const mobileNav = document.querySelector(".mobile-nav")
const closeMobileNav = document.querySelector(".mobile-nav-close")

menuIcon.addEventListener("click", () => mobileNav.classList.add('mobile-nav-display'))
closeMobileNav.addEventListener("click", () => mobileNav.classList.remove('mobile-nav-display'))