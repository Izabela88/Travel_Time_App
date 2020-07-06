


// Store data
const myTrips = () => {
  let trips;
  if (localStorage.getItem("trips") === null) {
    trips = [];
  } else {
    trips = JSON.parse(localStorage.getItem("trips"));
  }
  console.log(trips);
  return trips;
}

trips = myTrips();

// Create travel card in trips.html
createTravelCard(trips);

function createTravelCard(trips) {
  let i = 0;
  if (trips.length > 0) {
    for (i; i < trips.length; i++) {
      // DOM elements appendChild
      // Add div my-trip
      let showcaseBox = document.createElement("div");
      let showcase = document.getElementById("showcase  collection");
      showcase.appendChild(showcaseBox);
      // Add div class
      showcaseBox.className = "my-trip";
      // add div trip-img
      let tripImg = document.createElement("div");
      showcaseBox.appendChild(tripImg);
      // Add div class
      tripImg.className = "trip-img";
      // Add div trip-box
      let tripBox = document.createElement("div");
      showcaseBox.appendChild(tripBox);
      // Add div class
      tripBox.className = "trip-box";
      // // Add div trip-to
      let tripTo = document.createElement("div");
      tripBox.appendChild(tripTo);
      // // Add div class
      tripTo.className = "trip-to box";
      // // Add div country
      let country = document.createElement("div");
      tripBox.appendChild(country);
      // // Add div class
      country.className = "country box";
      // // // Add div departing-date
      let departingDate = document.createElement("div");
      tripBox.appendChild(departingDate);
      // // // Add div class
      departingDate.className = "departing-date box";
      // // // Add div weather
      let weather = document.createElement("div");
      tripBox.appendChild(weather);
      // // // Add div class
      weather.className = "weather box";
      // // // Add div temperature
      let temp = document.createElement("div");
      tripBox.appendChild(temp);
      // // // Add div class
      temp.className = "temp box";
      // Add div btns-box
      let btnBox = document.createElement("div");
      tripBox.appendChild(btnBox);
      // Add div class
      btnBox.className = "btn-box";
      // Add link
      let removeBtn = document.createElement("a");
      removeBtn.innerHTML = "Remove Trip";
      btnBox.appendChild(removeBtn);
      // Add link class
      removeBtn.className = "remove-btn  delete-item clear-tasks"
      // Update UI
      const destinationElements = document.querySelectorAll('.trip-to');
      destinationElements[i].innerHTML = 'City: ' + trips[i].destination;
      const countryElements = document.querySelectorAll('.country');
      countryElements[i].innerHTML = 'Country: ' + trips[i].country;
      const tempElements = document.querySelectorAll('.temp');
      tempElements[i].innerHTML = 'Temperature: ' + trips[i].temperature;
      const weatherElements = document.querySelectorAll('.weather');
      weatherElements[i].innerHTML = 'Weather Info: ' + trips[i].weatherInfo;
      const imgElements = document.querySelectorAll('.trip-img');
      imgElements[i].style.backgroundImage = `url(${trips[i].largeImg})`;
    }
  } else {
    const infoBox = document.querySelector(".info-box");
    infoBox.style.display = 'block';
  }
}

const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Remove taks event
taskList.addEventListener("click", removeTask);
// Clear task event
clearBtn.addEventListener("click", clearTasks);

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement.parentElement);
    }
  }
}
console.log()

// Function from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("trips") === null) {
    trips = [];
  } else {
    trips = JSON.parse(localStorage.getItem("trips"));
  }

  trips.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      trips.splice(index, 1);
    }
  });
  localStorage.setItem("trips", JSON.stringify(trips));
}

// Cear Tasks
function clearTasks() {
  taskList.innerHTML = '';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from Localc Storage
  clearTasksFromLocalStorage();
}

// Clear Tasks From Local Storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
