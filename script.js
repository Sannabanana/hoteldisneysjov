var image = document.createElement("img")
image.src = "start-kort.png"
var islandElement = document.getElementById("island")
// islandElement.appendChild(image)
var hotelElement = document.getElementById("hotel")
var zooElement = document.getElementById("zoo")

function showArea(area) {
	islandElement.style.display = "none"
	hotelElement.style.display = "none"
	zooElement.style.display = "none"
	var areaElement = document.getElementById(area)
	areaElement.style.display = "initial"
}