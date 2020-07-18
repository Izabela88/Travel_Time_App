// API
//Geonames
const geoBaseUrl = 'http://api.geonames.org/searchJSON?q=';
const geoUser = '&username=izz88';

//Weatherbit
const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
const weatherKey = '&key=ca8ad9afa1224805a512cb293128295a'

//Pixabay
const imgUrl = 'https://pixabay.com/api/?key=17257813-2246e0d7e1d1d470c6dfee7fb&q='
const subUrl = '&image_type=photo'

async function performAction(e) {
  event.preventDefault();
  const cityName = document.getElementById("from-box").value;
  let newDate = document.getElementById("date-picker").value;
  try {
    const dataLocation = await getLocalation(geoBaseUrl, cityName, geoUser);
    const res1 = {
      destination: dataLocation.geonames[0].name,
      country: dataLocation.geonames[0].countryName,
    };
    const dataWeather = await getWeather(weatherUrl, cityName, weatherKey);
    const res2 = {
      temperature: dataWeather.data[0].temp,
      weatherInfo: dataWeather.data[0].weather.description,
    };
    const dataImages = await getImages(imgUrl, cityName, subUrl);
    const res3 = { largeImg: dataImages.hits[0].largeImageURL };

    // Create a single object to post
    const data = {
      destination: res1.destination,
      country: res1.country,
      temperature: res2.temperature,
      weatherInfo: res2.weatherInfo,
      largeImg: res3.largeImg,
      date: newDate
    }
    console.log(data);
    storeTripInLocalStorage(data);
    location.replace("http://localhost:8080/trips.html")
  } catch (e) {
    console.log(e);
  }
}

// Store data in Local Storage
function storeTripInLocalStorage(trip) {
  let trips;
  if (localStorage.getItem("trips") === null) {
    trips = [];
  } else {
    trips = JSON.parse(localStorage.getItem("trips"));
  }

  trips.push(trip);

  localStorage.setItem("trips", JSON.stringify(trips));
}

// Get data using API
const getLocalation = async (url, name, userkey) => {
  const res = await fetch(url + name + userkey)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

const getWeather = async (url, name, userkey) => {
  const res = await fetch(url + name + userkey)
  try {
    const data = await res.json();
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const getImages = async (url, name, subText) => {
  const res = await fetch(url + name + subText)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

export {
  performAction,
}