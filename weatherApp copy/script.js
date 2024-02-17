const locationInput = document.getElementById("location-input");
let dropdown;
async function search(place) {
  const geoNameApi = `http://api.geonames.org/postalCodeSearchJSON?placename_startsWith=${place}&maxRows=10&username=arun&country=IN`;

  try {
    const res = await fetch(geoNameApi);
    const data = await res.json();

    dropdown.innerHTML = "";

    if (data.postalCodes) {
      data.postalCodes.forEach((postalCode) => {
        const listItem = document.createElement("li");
        listItem.textContent = postalCode.placeName;
        listItem.addEventListener("click", function () {
          locationInput.value = postalCode.placeName;
          clearAutocomplete();
          SelectFromOptions(postalCode);
        });
        dropdown.appendChild(listItem);
      });
    }
  } catch (error) {
    console.log("Error in autocomplete: " + error);
  }
}

dropdown = document.getElementById("search-dropdown");
let data;

function clearAutocomplete() {
  dropdown.innerHTML = "";
  locationInput.value = "";
}

function SelectFromOptions(postalCode) {
  // console.log("SelectFromOptions function has been invoked");
  const str = JSON.stringify(postalCode);
  // console.log("The single object: " + str);
  // console.log(postalCode.lat);
  // console.log(postalCode.lng);
  // console.log(postalCode.placeName);
  getWeatherDetails(postalCode.lat, postalCode.lng);
  const nme = document.getElementById("location");
  nme.innerHTML = `${postalCode.placeName}`;
}

let selectedIndex = -1;
locationInput.addEventListener("keydown", function (e) {
  const dropdownItems = document.querySelectorAll("#location-dropdown li");

  if (e.key === "ArrowDown" && selectedIndex <= dropdownItems.length - 1) {
    selectedIndex++;
  } else if (e.key === "ArrowUp" && selectedIndex > 0) {
    selectedIndex--;
  }

  // Highlight the selected item
  dropdownItems.forEach((item, index) => {
    item.classList.toggle("selected", index === selectedIndex);
  });
});

locationInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && selectedIndex !== -1) {
    const selectedListItem = document.querySelectorAll("#location-dropdown li")[
      selectedIndex
    ];
    if (selectedListItem) {
      const selectedPlace = data.postalCodes[selectedIndex];
      locationInput.value = selectedPlace.placeName;
      clearAutocomplete();
      SelectFromOptions(selectedPlace);
    }
  }
});

let data2;
async function getWeatherDetails(lat, lon) {
  const key = "e3b48c2b7880735a8c105294ce15004a";
  const api2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  try {
    const response = await fetch(api2);
    data2 = await response.json();
    // console.log(data2);
  } catch (e) {
    console.log("The error is: " + e);
  }
  const humidity = document.getElementById("humidityValue");
  const visibility = document.getElementById("visibilityValue");
  const airPressure = document.getElementById("airpressureValue");
  const wind = document.getElementById("windValue");
  const temp = document.getElementById("weather-value");

  temp.innerHTML = `${(data2.main.temp_max - 273).toFixed(2)}`;
  // temp.innerHTML = (data2.main.temp_max - 273).toFixed(2) + "°C";
  humidity.innerHTML = data2.main.humidity + "%";
  wind.innerHTML = data2.wind.speed + " mph";
  visibility.innerHTML = data2.visibility / 1000 + " km";
  airPressure.innerHTML = data2.main.pressure + " hPa";

  document.getElementById("location-input").value = "";
}

locationInput.addEventListener("input", function (e) {
  const place = e.target.value;
  if (place.trim() !== "") {
    search(place);
  } else {
    clearAutocomplete();
  }
});

let ampm = document.getElementById("ampm");
function displayTime() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = padZero(dateTime.getMinutes());
  let sec = padZero(dateTime.getSeconds());
  if (hr > 12) {
    hr = hr - 12;
    ampm.innerHTML = "PM";
  }

  document.getElementById("hours").innerHTML = padZero(hr);
  document.getElementById("mins").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500);