;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  const listMenuRef = $("a.scrollto")
  const buyNowButton = document.querySelector(".header-button-second")

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    mobileMenuRef.classList.toggle("is-open")

    buyNowButton.classList.toggle("is-open")
  })

listMenuRef.click(function() {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    if (window.screen.width < 1200) {
    menuBtnRef.classList.remove("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    mobileMenuRef.classList.remove("is-open")
  
}
})
  
})()