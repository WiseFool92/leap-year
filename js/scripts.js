// Back End
function evaluateYear(year) {
	if (year % 4 === 0) {
		return true;
  } else {
		return false;
}

	}
	
//Front End

$(document).ready(function() {
	console.log('JavaScript is working');

	//on click function
	$('form').submit(function(event) {
		event.preventDefault();
    var year = $("#input-1").val();
    console.log(evaluateYear(year));
	
    
   
	});
});
