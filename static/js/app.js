// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
  
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);

      var cell = tbody.append("td");
        cell.text(value);
    });
  });









