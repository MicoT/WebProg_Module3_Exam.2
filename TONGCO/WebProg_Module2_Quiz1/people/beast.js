function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['“After some point it’s like you feel like you should quit but you want it so badly you just keep going.”',' “There were lots of smiles and personal relationships that we’ll all take forward in supporting what we do—creating original content for our subscribers.”','“Every day is different so there is no like routine.”','“My mindset was just ‘reinvest everything I make – every time I got a paycheck, that was the month’s budget.”','“You gotta fail for the most part to learn.”'];

function getRandomNumber(min,max){
    let step1 = max -min + 1;
    let step2 = Math.random() * step1;
    let result =Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click',()=> {
    let index =getRandomNumber(0, quotes.length-1);
    result.innerText = quotes[index];
});