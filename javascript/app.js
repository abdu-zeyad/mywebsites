alert("Hello Soccer Gamer");


var fav = prompt('what is your favorite game choose from :fifa,pes,pesmobile');

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
 


var i
var enterName 


while (enterName !== 'ahmad' )
{
   enterName = prompt('Enter ahmad ') }



var numberofimage = prompt('inter the number of goldenball image')
var pic ='';
 

for (var i=0 ; i<numberofimage ; i++){
   pic ='<img src="images/goldenball.jpg "> ' 
document.write(pic)
} 
  
function pressed(){
   var text = document.getElementById("inp").value;
   if (text === "red") {
      document.getElementById("header").style.color ="red";
   }else{document.getElementById("header").style.color="black";}
}

function names() {
   var aa = prompt('please enter your name ');
   console.log(aa);
}
