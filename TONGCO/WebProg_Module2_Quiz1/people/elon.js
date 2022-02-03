function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['"When something is important enough, you do it even if the odds are not in your favor."','"Life is too short for long-term grudges"','"I think you should always bear in mind that entropy is not on your side."','"People should persue what they are passionate about. That will make them happier than pretty much anything else."','"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it is not."'];

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