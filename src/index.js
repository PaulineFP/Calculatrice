import '../assets/CSS/style.css';

let boutons = document.querySelectorAll("button");
let screenCalculator = document.querySelector("div#screen");
let clear = document.querySelector("button#clear");
let total = document.querySelector("div#total");

let array = [];

function update_screen(){
    screenCalculator.innerHTML = array.join('');
}

function clear_screen(){
    screenCalculator.innerHTML = "";
}

boutons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        
        //fetsh button
        if (button.classList.contains("field")){
            array.push(button.value);
            update_screen();
        }
   
        //Backtrack
        if (button.id.match("clear_one")){
          array.pop();
          update_screen();
         }
      
        //Result
        if (button.id.match("result")){
            let result = eval(array.join(''));
            array = [result];
            total.innerHTML =  array.join('') ;
            clear_screen();
        }
    })
})

//Reset calculator
clear.addEventListener('click', ()=> {
    array = [];
    screenCalculator.innerHTML = 0; 
    total.innerHTML = "";
})
