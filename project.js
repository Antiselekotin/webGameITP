 


  let page = document.querySelectorAll(".button"),
    counter = 1,
    arr1 = [],
    arr2 = [];
  let answer = quantity();
 let event = setInterval(ignition, 600)


function keys () {
  let num = Math.round(Math.random() * 25);
  return(num);
}
function quantity () {
  let ans;
  for (let i = 0; i < 1; i++) {
   ans = prompt("Какой уровень сложности вы выбераете? (ввести цифру, max = 24)", "");
   if ( Boolean(ans/2) == false || ans > 24) {
      i--}
    }return(ans)
}
function ignition () {
if (counter >= answer){
    clearInterval(event)
}
    counter++;
    let x = keys()
    arr1.push(x)
page[x].style.backgroundColor = "blue";
setTimeout(function(){
page[x].style.backgroundColor = "#E6E6FA";
}, 500);
}
function checking (arr1, arr2){
  if(arr1.length < arr2.length){
    alert("I'm sorry but you are loh ebaliy")
  }else{
  let arraySum1 = arr1.reduce(function(x, y){
    return x + y;
}, 0);
let arraySum2 = arr2.reduce(function(x, y){
  return x + y;
}, 0)
if(arraySum1 === arraySum2){
  alert("CONGRATULATION!!!! YOU ARE WINNER!!!!")
}}
}


page[0].onclick = function(){
    arr2.push(0)
  page[0].style.backgroundColor = "blue"
  checking(arr1, arr2)
  }
   page[1].onclick = function(){
    arr2.push(1)
    page[1].style.backgroundColor = "blue"
    checking(arr1, arr2)
   }
   page[2].onclick = function(){
    arr2.push(2)
    page[2].style.backgroundColor = "blue"
    checking(arr1, arr2)
   }
   page[3].onclick = function(){
    arr2.push(3)
    page[3].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[4].onclick = function(){
    arr2.push(4)
    page[4].style.backgroundColor = "blue"
    checking(arr1, arr2)
   }
   page[5].onclick = function(){
    arr2.push(5)
    page[5].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[6].onclick = function(){
    arr2.push(6)
    page[6].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[7].onclick = function(){
    arr2.push(7)
    page[7].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[8].onclick = function(){
    arr2.push(8)
    page[8].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[9].onclick = function(){
    arr2.push(9)
    page[9].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[10].onclick = function(){
    arr2.push(10)
    page[10].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[11].onclick = function(){
    arr2.push(11)
    page[11].style.backgroundColor = "blue"
    checking(arr1, arr2)
     }
   page[12].onclick = function(){
    arr2.push(12)
    page[12].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[13].onclick = function(){
    arr2.push(13)
    page[13].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[14].onclick = function(){
    arr2.push(14)
    page[14].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[15].onclick = function(){
    arr2.push(15)
    page[15].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[16].onclick = function(){
    arr2.push(16)
    page[16].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[17].onclick = function(){
    arr2.push(17)
    page[17].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[18].onclick = function(){
    arr2.push(18)
    page[18].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[19].onclick = function(){
    arr2.push(19)
    page[19].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[20].onclick = function(){
    arr2.push(20)
    page[20].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[21].onclick = function(){
    arr2.push(21)
    page[21].style.backgroundColor = "blue"
    checking(arr1, arr2)
   }
   page[22].onclick = function(){
    arr2.push(22)
    page[22].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[23].onclick = function(){
    arr2.push(23)
    page[23].style.backgroundColor = "blue"
    checking(arr1, arr2)
    }
   page[24].onclick = function(){
    arr2.push(24)
    page[24].style.backgroundColor = "blue"
    checking(arr1, arr2) 
   }
