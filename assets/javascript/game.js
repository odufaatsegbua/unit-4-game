// We need 4 crystals that will generat a random number\\
// Each crystal will have a random number between 1-12\\
// A new random number should generate every time there is a win or loss\\
// Any time a crystal is clicked, it should be added to the previous results\\


// $("document").ready(function () {
//     //randomly selects number between 19-120
//         var targetNumber = Math.floor(Math.random() * 101 + 19);
    
//     //displays target number in proper div
//       $("#number-to-guess").text(targetNumber);
    
    
//     //randomly selects numbers between 1-12 for each of the crystals
//       var numberOptions1 = Math.floor(Math.random() * 11 + 1);
//       var numberOptions2 = Math.floor(Math.random() * 11 + 1);
//       var numberOptions3 = Math.floor(Math.random() * 11 + 1);
//       var numberOptions4 = Math.floor(Math.random() * 11 + 1);
    
//     //console log numbers randomly selected for crystals
//       console.log("blueCrystal: " + numberOptions1);
//       console.log("yellowCrystal: " + numberOptions2);
//       console.log("greenCrystal: " + numberOptions3);
//       console.log("pinkCrystal: " + numberOptions4);
    
//       //beginning user score, wins #, and losses #
//       var counter = 0;
//       var wins = 0;
//       var losses = 0;
    
//       //displays var value to proper divs
//       $("#scoreboard").text(counter)
//       $('#numberWins').text(wins);
//       $('#numberLosses').text(losses);
    
//     //resets game after win or loss
//       function reset() {
    
//         targetNumber = Math.floor(Math.random() * 101 + 19);
    
//         $("#number-to-guess").text(targetNumber);
    
//         numberOptions1 = Math.floor(Math.random() * 11 + 1);
    
//         numberOptions2 = Math.floor(Math.random() * 11 + 1);
//         numberOptions3 = Math.floor(Math.random() * 11 + 1);
//         numberOptions4 = Math.floor(Math.random() * 11 + 1);
    
    
//         console.log("blueCrystal: " + numberOptions1);
//         console.log("yellowCrystal: " + numberOptions2);
//         console.log("greenCrystal: " + numberOptions3);
//         console.log("pinkCrystal: " + numberOptions4);
    
//         counter = 0;
//         $("#scoreboard").text(counter);
//       };
    
//       //if user wins
//       function win() {
//         alert("WINNER!!!!")
//         wins++;
//         console.log("wins:" + wins)
//         $("#numberWins").text(wins);
//         reset();
//       }
    
//       //if user loses
//       function lose() {
//         alert("TRY AGAIN!!")
//         losses++;
//         console.log("losses:" + losses);
//         $("#numberLosses").text(losses);
//         reset();
//       }
    
//       //on click function for blue crystal
//       $("#blueCrystal").on("click", function () {
    
//         counter += numberOptions1;
    
//         $("#scoreboard").text(counter);
    
//         if (counter === targetNumber) {
    
//           win();
    
//         }
//         else if (counter >= targetNumber) {
    
//           lose();
    
//         }
//       });
    
//       //on click function for yellow crystal
//       $("#yellowCrystal").on("click", function () {
    
//         counter += numberOptions2;
    
//         $("#scoreboard").text(counter)
    
//         if (counter === targetNumber) {
//           win();
    
//         }
//         else if (counter >= targetNumber) {
    
//           lose();
    
//         }
//       });
    
//       //on click function for green crystal
//       $("#greenCrystal").on("click", function () {
    
//         counter += numberOptions3;
    
//         $("#scoreboard").text(counter)
    
//         if (counter === targetNumber) {
    
//           win();
    
//         }
//         else if (counter >= targetNumber) {
    
//           lose();
    
//         }
//       });
    
//       //on click function for pink crystal
//       $("#pinkCrystal").on("click", function () {
    
//         counter += numberOptions4;
    
//         $("#scoreboard").text(counter)
    
//         if (counter === targetNumber) {
    
//           win();
    
//         }
//         else if (counter >= targetNumber) {
    
//           lose();
    
//         }
//       });
//     });

$(document).ready(function() {
    var win=0;
    var loss=0;
    function init() {
         compGuess=0;
         userScore=0;
         blueCrystal=0;
         yellowCrystal=0;
         greenCrystal=0;
         pinkCrystal=0;
         userScore=0;
        compGuess= Math.floor(Math.random() * 120) + 19;
        console.log(compGuess);
        $('#computerGuess').html(compGuess);
        blueCrystal= Math.floor(Math.random() * 12) + 1;
        $('.red').attr('value',redCrystal);
        console.log("Red's value is: "+redCrystal);
        greenCrystal= Math.floor(Math.random() * 12) + 1;
        $('.green').attr('value',greenCrystal);
        console.log("Green's value is: "+greenCrystal);
        blueCrystal= Math.floor(Math.random() * 12) + 1;
        $('.blue').attr('value',blueCrystal);
        console.log("Blue's value is: "+blueCrystal);
        yellowCrystal= Math.floor(Math.random() * 12) + 1;
        $('.yellow').attr('value',yellowCrystal);
        console.log("Yellow's value is: "+yellowCrystal);
        $('#showscore').html(userScore);    
    }
    init();
        $('.crystal').click(function play(){
            if($(this).hasClass('crystal')){
                score=parseInt($(this).attr('value'));
                userScore+=score;
                $('#showscore').html(userScore);    
            if(userScore===compGuess){
                 var audio= document.createElement('audio');
                     audio.setAttribute('src', 'assets/audio/you-win-sound-effect.mp3');
                 audio.play();
                    win++;
                 $('#wins').html(win);
                 init();
            }else if(userScore>compGuess){
                loss++;
                 var audio= document.createElement('audio');
                    audio.setAttribute('src', 'assets/audio/Lose-sound-effects.mp3');
                  audio.play();
                 $('#lose').html(loss);
                 init();
                }
            }
        });
    });