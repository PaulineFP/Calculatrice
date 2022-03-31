import '../assets/CSS/style.css';

let boutons = document.querySelectorAll("button");
let screenCalculator = document.querySelector("div#screen");
let clear = document.querySelector("button#clear");



let array = [];
const resul = [];

boutons.forEach((button) =>{
    button.addEventListener('click', ()=>{
       
        if (button.classList.contains("field")){
        array.push(button.value);
        screenCalculator.innerHTML = array.join('');
        }
        // if (fleche retrour arriere){
        //      array.pop(); 
        // }
        // if (boutton total){

        // }
    })
})

clear.addEventListener('click', ()=> {
    array = [];
    console.log(array); 
    screenCalculator.innerHTML = 0; 
})


//document.write(5 + 6);
// document.getElementById('mon_element').setAttribute('onclick','nom_de lafonction('paramètre',event));