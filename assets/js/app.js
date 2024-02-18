const btnNavMobile = document.querySelector("[data-js='btn-hamburger']")

const toggleNavbar = (event) => {
  if(event.type === 'touchstart') {
    event.preventDefault()
  }

  const navbar = document.querySelector(".menu")
  navbar.classList.toggle("active")
  const navbarActive = navbar.classList.contains('active')
  const ariaLabelTag = navbarActive ? "Fechar menu" : "Abrir menu"
  

  event.currentTarget.setAttribute('aria-expanded', navbarActive)
  event.currentTarget.setAttribute('aria-label', ariaLabelTag)
}

btnNavMobile.addEventListener("click", toggleNavbar)
btnNavMobile.addEventListener("touchstart", toggleNavbar)