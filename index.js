const results = document.querySelector("#results");

weatherApiKey = "6ed5d1ef9d494ad8b34125456233005";

addClicking();

function addClicking() {
	let spanElement;
	for (let i = 0; document.querySelectorAll("span")[i] !== undefined; i++) {
		spanElement = document.querySelectorAll("span")[i];
		spanElement.addEventListener("click", function displayWeather() {
			getWeather(document.querySelectorAll("span")[i].id);
		});
	}
}

function getWeather(cityName) {
	const img = document.querySelector("img");
	fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${cityName}`, {
		mode: "cors",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function displayData(response) {
			results.innerHTML = `
            <div>
                <p>City: ${response.location.name}</p>
                <p>Time: ${response.location.localtime}</p>
                <p>Temperature: ${response.current.temp_c}C</p>
                <p>Weather: ${response.current.condition.text}</p>
            </div>
            <img src="${response.current.condition.icon}">
            `;
		});

	console.log(cityName);
}
