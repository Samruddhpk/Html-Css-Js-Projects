const colors = ["red", "green", "blue", "orange", "#f1f5f8"]

// const btn = document.querySelector(".btn")
// const color = document.querySelector(".color")

// btn.addEventListener("click", () => {
// 	const randomNumber = getRandomNumber()

// 	document.body.style.backgroundColor = colors[randomNumber]
// 	color.textContent = colors[randomNumber]
// })

// const getRandomNumber = () => {
// 	return Math.floor(Math.random() * colors.length)
// }

// using query
$(".btn").click(function () {
	const randomNumber = getRandomNumber()
	$("body").css("background", colors[randomNumber])
	$(".color").text(colors[randomNumber])
})

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length)
}
