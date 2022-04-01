import '../assets/CSS/style.css';

let boutons = document.querySelectorAll("button");
let screenCalculator = document.querySelector("div#screen");
let clear = document.querySelector("button#clear");
let total = document.querySelector("div#total");



let array = [];

boutons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        
        //fetsh button
        if (button.classList.contains("field")){
            let calcul = eval(array.join(''));
            array.push(button.value);
            ///////////////
            screenCalculator.innerHTML = array;
            console.log(array);
            //Bien diférencier les boutouns field et autre pour opperateur
        }
        //Backtrack
        if (button.id.match("clear_one")){
          array.pop();
          screenCalculator.innerHTML = array.join('');
         }
         //Result
        if (button.id.match("result")){
            let result = eval(array.join(''));
            array = [result];
            total.innerHTML =  array ;
            screenCalculator.innerHTML = "";  
        }
    })
})
//Reset calculator
clear.addEventListener('click', ()=> {
    array = [];
    screenCalculator.innerHTML = 0; 
    total.innerHTML = "";
})
