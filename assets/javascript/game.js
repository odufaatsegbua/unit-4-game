// We need 4 crystals that will generat a random number\\
// Each crystal will have a random number between 1-12\\
// A new random number should generate every time there is a win or loss\\
// Any time a crystal is clicked, it should be added to the previous results\\


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
        $('.blue').attr('value',blueCrystal);
        console.log("blue's value is: "+blueCrystal);
        yellowCrystal= Math.floor(Math.random() * 12) + 1;
        $('.yellow').attr('value',yellowCrystal);
        console.log("yellow's value is: "+yellowCrystal);
        greenCrystal= Math.floor(Math.random() * 12) + 1;
        $('.green').attr('value',greenCrystal);
        console.log("green's value is: "+greenCrystal);
        pinkCrystal= Math.floor(Math.random() * 12) + 1;
        $('.yellow').attr('value',pinkCrystal);
        console.log("pinks's value is: "+pinkCrystal);
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