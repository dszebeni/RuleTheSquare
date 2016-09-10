var x = 0; //forgatás szöge
var n = 0; //dobások száma
var szin = "crimson";
var numberofrotate = 0;
var numberofside = numberofrotate % 4;
var result = 0;
var s = 2000;
var run = false;

$('#side').html(numberofside);
$('#numberofrotate').html(numberofrotate);
$('#result').html(result);



//Elforgatásért felel--------------------------------
$(document).keydown(function (e) {
    if (e.keyCode == 39) {
        $("#square").rotate({
            angle: x,
            animateTo: x = x + 90,
            duration: 400,
            easing: $.easing.easeInOutExpo
        })
        numberofrotate = numberofrotate + 1;
        numberofside = numberofrotate % 4;
        $('#side').html(numberofside);
        $('#numberofrotate').html(numberofrotate);
    } else if (e.keyCode == 37) {
        $("#square").rotate({
            angle: x,
            animateTo: x = x - 90,
            duration: 400,
            easing: $.easing.easeInOutExpo
        })
        numberofrotate = numberofrotate - 1;
        numberofside = numberofrotate % 4;
        $('#side').html(numberofside);
        $('#numberofrotate').html(numberofrotate);
    }
});




function gameover() {
    
    start.style.visibility='visible';
    gameoverwrite.style.visibility='visible';
    circle.style.visibility='hidden';
    square.style.visibility='hidden';
    like.style.opacity='1';
    s=4000;
    run = false;

}




//a labda színeiért és mozgásáért felel-------------
var negszinszam = -1;



function loop() {


    
    var gatenumber = 0 + Math.floor(Math.random() * 4);
    $('#gatenumber').html(gatenumber);
    
    var szinszam = 0 + Math.floor(Math.random() * 4);
    
    switch (szinszam) {
        case 0:
        szin = "crimson";
        negszinszam = 0;
        break;
        case 3:
        szin = "purple";
        negszinszam = -1;
        break;
        case 2:
        szin = "cornflowerblue";
        negszinszam = -2;
        break;
        case 1:
        szin = "gold";
        negszinszam = -3;
        break;
    }
    	
    if(s>=801){
    s=s*(0.95); //gyorsíít
    }else{s=800}
   // s = (1/Math.log(s))*10000;

    $('#gate').css({
     "border-top-color": szin,
     
 })
    $('#gatebottom').css({
       "border-bottom-color": szin,
       
   })
    $('#gateleft').css({
     "border-left-color": szin,
     
 })
    $('#gateright').css({
        "border-right-color": szin,
        
    })
    
    



    if(gatenumber == 0){
        
        //---------------------------------------------------------------
        $('#circle').css({
           "background-color": szin,
           "top": "1%",
           "left": "50%"
       })
        $('#circle').animate({
           top: '+=45%',
       }, s, 'linear', function () {
           
           if (szinszam == numberofside) {
               result = result + 1;
               $('#result').html(result);
               loop();
               
           } else if (negszinszam == numberofside) {
               result = result + 1;
               $('#result').html(result);
               
               loop();
           } else {
               gameover();
           }
           
       });
        //---------------------------------------------------------------
    }else if(gatenumber == 1){
        
        //---------------------------------------------------------------
        $('#circle').css({
           "background-color": szin,
           "top": "90%",
           "left": "50%"
       })
        $('#circle').animate({
           top: '-=40%',
       }, s, 'linear', function () {
           
           if (szinszam == (numberofside+2)%4) {
               result = result + 1;
               $('#result').html(result);
               loop();
               
           } else if (negszinszam == numberofside+2) {
               result = result + 1;
               $('#result').html(result);
               
               loop();
           } else {
               gameover();
           }
           
       });
        //---------------------------------------------------------------
        
    }else if(gatenumber == 2){
        
        //---------------------------------------------------------------
        $('#circle').css({
           "background-color": szin,
           "top": "50%",
           "left": "10%"
       })
        $('#circle').animate({
           left: '+=37%',
       }, s, 'linear', function () {
           
           if (szinszam == (numberofside+1)%4) {
               result = result + 1;
               $('#result').html(result);
               loop();
               
           } else if (negszinszam == numberofside+1) {
               result = result + 1;
               $('#result').html(result);
               
               loop();
           } else {
               gameover();
           }
           
       });
        //---------------------------------------------------------------
        
        
    }else if(gatenumber == 3){
        
        //---------------------------------------------------------------
        $('#circle').css({
           "background-color": szin,
           "top": "50%",
           "left": "99%"
       })
        $('#circle').animate({
           left: '-=45%',
       }, s, 'linear', function () {
           
           if (szinszam == (numberofside+3)%4) {
               result = result + 1;
               $('#result').html(result);
               loop();
               
           } else if (negszinszam == numberofside+3) {
               result = result + 1;
               $('#result').html(result);
               
               loop();
           } else {
               gameover();
           }
           
       });
        //---------------------------------------------------------------
        
    }
    
   
    n = n + 1;
    $('#counter').html(n);
    $('#random').html(szinszam);

}


$(document).keydown(function (e) {
    if (e.keyCode == 32) {
        if (!run){
            start.style.visibility='hidden';
            gameoverwrite.style.visibility='hidden';
            circle.style.visibility='visible';
            square.style.visibility='visible';
            like.style.opacity='0';
            gamename.style.opacity='0';
            todo.style.opacity='0';
            result = 0;
            $('#result').html(result);
            n = 0;
            $('#counter').html(n);
            loop();
            run = true;
        }
        
    }
});
