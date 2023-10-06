let numberTarget = Math.round(Math.random() * 10);
let countAttempts =1
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnTryAgain = document.querySelector("#btnTryAgain");

// Eventos
btnTry.addEventListener('click',handleTryClick);
btnTryAgain.addEventListener('click', handleTryAgain)
document.addEventListener('keypress', keyEnter)

console.log(`Value ${numberTarget}`);

//funções
function handleTryClick(event){
    event.preventDefault();
   
    let attemptNumber = document.querySelector("#attemptNumber");
    console.log(`valor digitado= ${attemptNumber.value}`);

    if(attemptNumber.value <0 || attemptNumber.value == "" || attemptNumber.value > 10) {
        alert('Informe um número entre 0 e 10');
    } else {
        if( Number(attemptNumber.value) == numberTarget){
            toggleScreen();

            screen2.querySelector("h2").innerText  =  `Acertou em ${countAttempts} tentativas!`
        }
        countAttempts++; 
        document.querySelector("#attemptNumber").value= ""
    }
        
}
function handleTryAgain(){
    toggleScreen();
    countAttempts = 1;
    numberTarget = Math.round(Math.random() * 10);
    console.log(`Value ${numberTarget}`);
}

function toggleScreen (){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function keyEnter (e){
    if (e.key == "Enter" && screen1.classList.contains("hide")){
        handleTryAgain();
    }
}