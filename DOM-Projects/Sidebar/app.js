const toggleBtn = document.querySelector(".nav-toggle")
const sideNav = document.querySelector(".sideNav")
const closeBtn = document.querySelector(".close-btn")

toggleBtn.addEventListener("click", () => {
	sideNav.classList.toggle("show-sideNav")
})

closeBtn.addEventListener("click", () => {
	sideNav.classList.remove("show-sideNav")
})
