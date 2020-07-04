//Geonames
const geoBaseUrl = 'http://api.geonames.org/searchJSON?q=';
const geoUser = '&username=izz88';

//Weatherbit
const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
const weatherKey = '&key=ca8ad9afa1224805a512cb293128295a'

//Pixabay
const imgUrl = 'https://pixabay.com/api/?key=17257813-2246e0d7e1d1d470c6dfee7fb&q='
const subUrl = '&image_type=photo'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
console.log(newDate)


// Responsive Navigation Bar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });

}
navSlide();

// Dropdown About Menu
const dropMenu = () => {
  const content = document.querySelector('.dropdown-content');
  const drop = document.querySelector('#dropdown');
  drop.addEventListener('click', () => {
    content.classList.toggle('show');
  })
}

dropMenu();

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
  } else {
    document.querySelector("#navbar").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}


// API
async function performAction(e) {
  event.preventDefault(e)
  try {
    const cityName = document.getElementById("from-box").value;
    const data1 = await getLocalation(geoBaseUrl, cityName, geoUser);
    const res1 = {
      destination: data1.geonames[0].name,
      country: data1.geonames[0].countryName,
    };
    const data2 = await getWeather(weatherUrl, cityName, weatherKey);
    const res2 = {
      weatherInfo: data2.data[0].weather.description,
    };
    const data3 = await getImages(imgUrl, cityName, subUrl);
    const res3 = { largeImg: data3.hits[0].largeImageURL };
    // create a single object to post
    const data = {
      destination: res1.destination,
      country: res1.country,
      weatherInfo: res2.weatherInfo,

    }
    // posting all the data to the server
    await fetch("http://localhost:8081/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    await updateUI();
  } catch (e) {
    console.log(e);
  }

}

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

const updateUI = async () => {
  const req = await fetch('http://localhost:8081/getData')
  try {
    const data = await req.json();
    console.log(data);
    document.getElementById('trip-to').innerHTML = 'City: ' + data.name;
    document.getElementById('weather').innerHTML = 'Info: ' + data.description;
  } catch (error) {
    console.log('Error', error)
  }
}


export {
  navSlide,
  dropMenu,
  performAction,
  updateUI
}