const menuIcon = document.querySelector(".navbar-menu-icon")
const mobileNav = document.querySelector(".mobile-nav")
const closeMobileNav = document.querySelector(".mobile-nav-close")

const filterMobile = document.querySelector(".mobile-nav-menu-filter")
const filterSection = document.querySelector(".filter-section")
const closeFilterSection = document.querySelector(".filter-section-close")

menuIcon.addEventListener("click", () => mobileNav.classList.add('mobile-nav-display'))
closeMobileNav.addEventListener("click", () => mobileNav.classList.remove('mobile-nav-display'))

filterMobile.addEventListener("click", () => filterSection.classList.add('filter-section-display'))
closeFilterSection.addEventListener("click", () => filterSection.classList.remove('filter-section-display'))