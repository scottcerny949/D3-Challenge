// @TODO: YOUR CODE HERE!
// Load data from csv
d3.csv("assets/data/data.csv").then(function(dataJournalism) {

    console.log(dataJournalism);
  
    // log a list of states
    var states = dataJournalism.map(data => data.state);
    console.log("state", states);

    // log a list of state abbreviations
    var stateAbbr = dataJournalism.map(data => data.abbr);
    console.log("abbr", stateAbbr);

    // log a list of healthcare
    var healthCare = dataJournalism.map(data => data.healthcare);
    console.log("healthcare", healthCare);

    // log a list of states poverty
    var statePov = dataJournalism.map(data => data.poverty);
    console.log("poverty", statePov);
    
  
    // Cast each healthcare value in csv as a number using the unary + operator
    dataJournalism.forEach(function(data) {
      data.healthcare = +data.healthcare;
      console.log("State:", data.state);
      console.log("Health Care:", data.healthcare);
    });
  }).catch(function(error) {
    console.log(error);
  });
  