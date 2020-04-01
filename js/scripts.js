// Back End

function evaluateYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

//Front End

$(document).ready(function() {
  console.log("JavaScript is working");

  //on click function
  $("form").submit(function(event) {
    event.preventDefault();
    var year = $("#input-1").val();
    $(".output1").text(`the year ${year} is ${evaluateYear(year)} and is a leap year`);

    
  });
});