

// // Take data from local storage
// const getTrip = () => {

//   let trips;
//   if (localStorage.getItem("trips") === null) {
//     trips = [];
//   } else {
//     trips = JSON.parse(localStorage.getItem("trips"));
//   }
//   console.log(trips);
//   let i = 0;
//   if (trips.length > 0) {
//     for (i; i < trips.length; i++) {
//       document.getElementById('trip-to').innerHTML = 'City: ' + trips[i].destination;
//       document.getElementById('weather').innerHTML = 'Info: ' + trips[i].weatherInfo;
//     }
//   } else {
//     const tripHeader = document.querySelector(".my-trip h2");
//     tripHeader.style.display = 'initial';
//   }
// }


// export {
//   getTrip
// }