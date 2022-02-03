function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['"Sometimes simple things are the most difficult things to achieve."','"Grief changes shape but it never ends."','"I was also raised to treat people exactly how I would like to be treated by others. It’s called respect."','"Falling in love and having a relationship are 2 different things."','"None of us are getting out of here alive, so please stop treating yourself like an afterthought. Eat the delicious food. Walk in the sunshine. Jump in the ocean."'];

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