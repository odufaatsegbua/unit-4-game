// We need 4 crystals that will generat a random number\\
// Each crystal will have a random number between 1-12\\
// A new random number should generate every time there is a win or loss\\
// Any time a crystal is clicked, it should be added to the previous results\\


var randonNumber;
var losses;
var wins;

for(var i = 0; i < 4; i++) {
    var crystal = $("<div>");
    crystal.attr("class", 'crystal');
    $(".crystals").append(crystal);
}