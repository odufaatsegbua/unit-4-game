// We need 4 crystals that will generat a random number\\
// Each crystal will have a random number between 1-12\\
// A new random number should generate every time there is a win or loss\\
// Any time a crystal is clicked, it should be added to the previous results\\


// var randonNumber;
// var losses;
// var wins;

// for(var i = 0; i < 4; i++) {
//     var crystal = $("<div>");
//     crystal.attr("class", 'crystal');
//     $(".crystals").append(crystal);
// }

$(document).ready(function () {
    //randomly selects number between 19-120
        var targetNumber = Math.floor(Math.random() * 101 + 19);
    
    //displays target number in proper div
      $("#number-to-guess").text(targetNumber);
    
    
    //randomly selects numbers between 1-12 for each of the crystals
      var numberOptions1 = Math.floor(Math.random() * 11 + 1);
      var numberOptions2 = Math.floor(Math.random() * 11 + 1);
      var numberOptions3 = Math.floor(Math.random() * 11 + 1);
      var numberOptions4 = Math.floor(Math.random() * 11 + 1);
    
    //console log numbers randomly selected for crystals
      console.log("blue: " + numberOptions1);
      console.log("red: " + numberOptions2);
      console.log("green: " + numberOptions3);
      console.log("purple: " + numberOptions4);
    
      //beginning user score, wins #, and losses #
      var counter = 0;
      var wins = 0;
      var losses = 0;
    
      //displays var value to proper divs
      $("#scoreboard").text(counter)
      $('#numberWins').text(wins);
      $('#numberLosses').text(losses);
    
    //resets game after win or loss
      function reset() {
    
        targetNumber = Math.floor(Math.random() * 101 + 19);
    
        $("#number-to-guess").text(targetNumber);
    
        numberOptions1 = Math.floor(Math.random() * 11 + 1);
    
        numberOptions2 = Math.floor(Math.random() * 11 + 1);
        numberOptions3 = Math.floor(Math.random() * 11 + 1);
        numberOptions4 = Math.floor(Math.random() * 11 + 1);
    
    
        console.log("blue: " + numberOptions1);
        console.log("red: " + numberOptions2);
        console.log("green: " + numberOptions3);
        console.log("purple: " + numberOptions4);
    
        counter = 0;
        $("#scoreboard").text(counter);
      };
    
      //if user wins
      function win() {
        alert("Lightning Cat sez purr!")
        wins++;
        console.log("wins:" + wins)
        $("#numberWins").text(wins);
        reset();
      }
    
      //if user loses
      function lose() {
        alert("Lightning Cat sez hiss!")
        losses++;
        console.log("losses:" + losses);
        $("#numberLosses").text(losses);
        reset();
      }
    
      //on click function for blue crystal
      $("#blue").on("click", function () {
    
        counter += numberOptions1;
    
        $("#scoreboard").text(counter);
    
        if (counter === targetNumber) {
    
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    
      //on click function for red crystal
      $("#red").on("click", function () {
    
        counter += numberOptions2;
    
        $("#scoreboard").text(counter)
    
        if (counter === targetNumber) {
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    
      //on click function for green crystal
      $("#green").on("click", function () {
    
        counter += numberOptions3;
    
        $("#scoreboard").text(counter)
    
        if (counter === targetNumber) {
    
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    
      //on click function for purple crystal
      var purple = $("#purple").on("click", function () {
    
        counter += numberOptions4;
    
        $("#scoreboard").text(counter)
    
        if (counter === targetNumber) {
    
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    });