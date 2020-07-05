function getTrips() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    document.getElementById('trip-to').innerHTML = 'City: ' + task.destination;
    document.getElementById('weather').innerHTML = 'Info: ' + task.weatherInfo;
    // // Create li element
    // const li = document.createElement("li");
    // // Add class
    // li.className = "collection-item";
    // // Create text node and append to li
    // li.appendChild(document.createTextNode(task));
    // // Create new link element
    // const link = document.createElement("a");
    // // Add a class
    // link.className = "delete-item secondary-content";
    // // Add icon html
    // link.innerHTML = '<i class="fa fa-remove"></i>';
    // // Append the linkto li
    // li.appendChild(link);

    // // Append li to ul
    // taskList.appendChild(li);
  });
}