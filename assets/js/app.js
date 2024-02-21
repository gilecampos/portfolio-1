const mobileMenuButton = document.querySelector("[data-js='btn-hamburger']")
const navbar = document.querySelector(".menu")

const toggleNavbar = (event) => {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }

  const navbarActive = navbar.classList.toggle("active")
  const ariaLabelTag = navbarActive ? "Close menu" : "Open menu"

  event.currentTarget.setAttribute('aria-expanded', navbarActive)
  event.currentTarget.setAttribute('aria-label', ariaLabelTag)
}

mobileMenuButton.addEventListener("click", toggleNavbar)
mobileMenuButton.addEventListener("touchstart", toggleNavbar)
