 var clickRock = document.querySelector(".r")
var clickPaper = document.querySelector(".p")
var clickScissors = document.querySelector(".s")
var coscore= document.getElementById("computerScore")
var urscore= document.getElementById("yourScore")
 var score =0    
var comscore =0
var str = document.getElementById("start")



function rps(){
var ropasc= ['r','p','s'];
var y = Math.floor(Math.random() * 3);
 return ropasc[y];}

function win(bone,cps){
  score++; 
  urscore.innerHTML=score;
  coscore.innerHTML=comscore;
  str.innerHTML= convertToWord(bone)+" beats " + convertToWord(cps) +" you win";
  

}
function lose(bone,cps){
  comscore++; 
  urscore.innerHTML=score;
  coscore.innerHTML=comscore;
  str.innerHTML= convertToWord( bone)+" losses to " + convertToWord(cps) +" you lost"
}

  function draw(bone,cps){
     
  
  str.innerHTML= convertToWord(bone)+" draws with " + convertToWord(cps)+" it's a draw";
    
    
  }



 function choose (bone){
    var cps = rps();
    
    switch (bone+cps){
      case "sp":
      case "pr":
      case "rs":
         win(bone,cps);
         break;
         case "ps":
         case "sr":
         case "rp":
         lose(bone,cps);
            break;
            case "rr":
               case"pp":
               case"ss":
               draw(bone,cps);
               break;


      }
    }
 
          



    
      clickPaper.addEventListener("click",function(){
         choose("p");
      })
      clickRock.addEventListener('click',function(){
      choose("r");
      })
      
      clickScissors.addEventListener("click", function(){
      choose("s");
      
      })
    
      function convertToWord(letter){
        if(letter =="r") return "Rock";
        if (letter=="p") return"Paper";
        if(letter == "s") return "Scissors";
      }
         convertToWord()

      