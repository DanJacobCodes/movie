// Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee and senior tickets tend to be cheaper than the regular priced ticket.
//
// Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

//business logic
function Ticket(newRelease, matinee, age) {
  this.newRelease = newRelease;
  this.matinee = matinee;
  this.age = age;
}

function calculateCost(newRelease, matinee, age) {
  debugger;
  var cost = 8;
  if (newRelease === "newRelease") {
    cost += 3;
  }
  if (matinee === "matinee") {
    cost -= 2;
  }
  if (age === "adult") {
    cost += 3.5;
  }
  return cost;
}

function resetFields() {
    $('input[type="checkbox"]').prop('checked',false);
    $("#age").val("adult")
}

// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    // note - refactor if time
    var newRelease = "";
    var matinee = "";
    $("input:checkbox[name=newRelease]:checked").each(function() {
      newRelease = $(this).val()
    })
    $("input:checkbox[name=matinee]:checked").each(function() {
      matinee = $(this).val()
    })
    var age = $("#age").val();
    var newTicket = new Ticket(newRelease, matinee, age);
    debugger;
    var cost = calculateCost(newTicket.newRelease, newTicket.matinee, newTicket.age);
    $("#cost").show();
    $("#cost h2").text(cost);
    event.preventDefault();
    resetFields();
  });
});
