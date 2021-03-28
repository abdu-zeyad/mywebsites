alert("Hello Soccer Gamer");
var name = prompt('what is your nmae? ')

var fav = prompt('what is   your favorite game choose from :fifa,pes,pesmobile');

if (fav === 'pes' ) {
   
   alert('vote for pes ')
   console.log('pes is the best')
} else if (fav =='fifa') 
    

{
    
   alert('vote for fifa ')
   console.log('fifa is the best')
}
 else if (fav == 'pes mobile') {
   alert('vote for pesmobile ')
   console.log('pes mobile is the best')
 }
 
function pressed(){
   var text = document.getElementById("inp").value;
   if (text === "red") {
      document.getElementById("header").style.color ="red";
   }else{document.getElementById("header").style.color="black";}
}