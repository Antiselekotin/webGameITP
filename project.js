 


  let page = document.querySelectorAll(".button"),
    counter = 1;
  let answer = quantity();
 

console.log(answer)
let event = setInterval(ignition, 600)

function keys () {
  let num = Math.round(Math.random() * 25);
  return(num);
}
function quantity () {
  for (let i = 0; i < 1; i++) {
  let ans = prompt("Какой уровень сложности вы выбераете? (ввести цифру, max = 24)", "");
//    if (ans = null || ans == '' || Boolean(ans/2) == false || ans > 24) {
//       i--}
      return(ans)
  }
}
function ignition () {
if (counter >= answer){
    clearInterval(event)
}
    counter++;
    let x = keys()
page[x].style.backgroundColor = "blue";
setTimeout(function(){
page[x].style.backgroundColor = "#E6E6FA";
}, 500);
}


page[0].onclick = function(){
    page[0].style.backgroundColor = "blue"
   }
   page[1].onclick = function(){
    page[1].style.backgroundColor = "blue"
   }
   page[2].onclick = function(){
    page[2].style.backgroundColor = "blue"
   }
   page[3].onclick = function(){
    page[3].style.backgroundColor = "blue"
   }
   page[4].onclick = function(){
    page[4].style.backgroundColor = "blue"
   }
   page[5].onclick = function(){
    page[5].style.backgroundColor = "blue"
   }
   page[6].onclick = function(){
    page[6].style.backgroundColor = "blue"
   }
   page[7].onclick = function(){
    page[7].style.backgroundColor = "blue"
   }
   page[8].onclick = function(){
    page[8].style.backgroundColor = "blue"
   }

   page[9].onclick = function(){
    page[9].style.backgroundColor = "blue"
   }
   page[10].onclick = function(){
    page[10].style.backgroundColor = "blue"
   }
   page[11].onclick = function(){
    page[11].style.backgroundColor = "blue"
   } 
   page[12].onclick = function(){
    page[12].style.backgroundColor = "blue"
   }
   page[13].onclick = function(){
    page[13].style.backgroundColor = "blue"
   }
   page[14].onclick = function(){
    page[14].style.backgroundColor = "blue"
   }
   page[14].onclick = function(){
    page[14].style.backgroundColor = "blue"
   }
   page[15].onclick = function(){
    page[15].style.backgroundColor = "blue"
   }
   page[16].onclick = function(){
    page[16].style.backgroundColor = "blue"
   }
   page[17].onclick = function(){
    page[17].style.backgroundColor = "blue"
   }
   page[18].onclick = function(){
    page[18].style.backgroundColor = "blue"
   }
   page[19].onclick = function(){
    page[19].style.backgroundColor = "blue"
   }
   page[20].onclick = function(){
    page[20].style.backgroundColor = "blue"
   }
   page[21].onclick = function(){
    page[21].style.backgroundColor = "blue"
   }
   page[22].onclick = function(){
    page[22].style.backgroundColor = "blue"
   }
   page[23].onclick = function(){
    page[23].style.backgroundColor = "blue"
   }
   page[24].onclick = function(){
    page[24].style.backgroundColor = "blue"
   }