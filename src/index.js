import '../assets/CSS/style.css';

let boutons = document.querySelectorAll("button");
let screenCalculator = document.querySelector("div#screen");
let clear = document.querySelector("button#clear");
let total = document.querySelector("div#total");



let array = [];
const result = [];

boutons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        
        //fetsh button
        if (button.classList.contains("field")){
        array.push(button.value);
        let calcul = array.join('');
        screenCalculator.innerHTML = calcul;
        }
        //Backtrack
        if (button.value === "clear_one"){
          array.pop();
          screenCalculator.innerHTML = array.join('');
         }
         //Result
        if (button.value === "="){
            // result.push(eval(array));
            let calcul = array.join('');
            console.log(eval(calcul))
            //let resultat = eval(calcul);
            // 
            // console.log(resultat);
            //  result.push(resultat);
            result.push(eval(calcul));
             console.log(result);
             total.innerHTML = result;
        }
    })
})
//Reset calculator
clear.addEventListener('click', ()=> {
    array = [];
    console.log(array); 
    screenCalculator.innerHTML = 0; 
})


//document.write(5 + 6);
// document.getElementById('mon_element').setAttribute('onclick','nom_de lafonction('paramètre',event));