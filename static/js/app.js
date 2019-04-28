// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// d3 to build out data in table
data.forEach(function(ufoReport) {
    // console.log(ufoReport);
    var row = tbody.append("tr");
  
    Object.entries(ufoReport).forEach(function([key, value]) {
      // console.log(key, value);

      var cell = row.append("td");
        cell.text(value);
    });
  });

  var submit = d3.select("#filter-btn");

  submit.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

      console.log(inputValue);
      console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

      console.log(filteredData); 
      
    tbody.html("");

      filteredData.forEach(function(filteredUfoReport) {
        console.log(filteredUfoReport);
        
        var row = tbody.append("tr");
      
        Object.entries(filteredUfoReport).forEach(function([key, value]) {
          // console.log(key, value);
    
        var cell = row.append("td");
          cell.text(value);
        });
      });
  });