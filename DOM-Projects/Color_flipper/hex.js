const colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// using jquery
$(".btn").click(function () {
	let hexColor = "#"
	for (i = 0; i < 6; i++) {
		hexColor += colors[getRandomNumber()]
	}
	$("body").css("background", hexColor)
	$(".color").text(hexColor)
})

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length)
}

// vanilla

// const btn = document.querySelector(".btn")
// const color = document.querySelector(".color")

// btn.addEventListener("click", () => {
// 	let hexColor = "#"
// 	for (i = 0; i < 6; i++) {
// 		hexColor += colors[getRandomNumber()]
// 	}

// 	document.body.style.backgroundColor = hexColor
// 	color.textContent = hexColor
// })
// const getRandomNumber = () => {
// 	return Math.floor(Math.random() * colors.length)
// }
