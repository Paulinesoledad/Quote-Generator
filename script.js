var items = [
    "You olny live once,but if you do it right,once is enough.",
      
      
 
     "If you want to live a happy life,tie it to a goal,not to people or things",
     
     "Never let the fear of striking out keep you from playing the game.",
     
 
     "Your time is limited,so do not waste it living someone elses life.",
      
 
     "In order to write about life first you must live it.",
     
 
     "Life is not a problem to be solve, but a reality to be experienced.",
      
     
      "The unexamined life is not worth living.",
       
 
     "Turn your wounds into wisdom.",
      
 
     "The purpose of our lives is to be happy.",
     
    "little drops of water makes an ocean",
 
     "a stitch in time saves nine",
 
     "tooth for tat",
 
     "a word is enough for the wise",
 
     "obedience is better than sacrifice",
 
     "make hay while the sun shine",
   ];

   function generateQuote (){
    setInterval(() => {
        var display = Math.floor(Math.random() * items.length);
        document.getElementById("words").innerHTML = items[display];
       }, 2000);
   }
 
   var timing = 60;
      function timer () {
        var end = setInterval(() => {
            document.getElementById("time").innerHTML = --timing;
            if (timing == 0) {
              clearInterval(end);
            }
          }, 2000);
      }
 
    
 
      

   document.getElementById("btnStart").addEventListener("click",() =>{
        generateQuote ()
        timer () 
        
    })
    function btnStop() {
        location.reload()
    };

    
 
       //   Math.floor(Math.random() * 20) + 10;
       //   var time = 0;
       setInterval(() => {
         // document.write(time--);
         // document.write("nerdyeye" + "<br>");
       }, 2000);