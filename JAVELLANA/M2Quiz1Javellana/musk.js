function Home(){
    location.replace("main.html")
}

let bttnquote = document.querySelector('button');
let quote =document.querySelector('p');

let quotes =['“When something is important enough, you do it even if the odds are not in your favor. ”',' “If you need inspiring words dont do it”','“I could either watch it happen or be part of it”','“You have to be pretty driven to make it happen. otherwise you will just make yourself miserable.”','“Failure is an option here. If things are not failing you are not innovating enough”'];

bttnquote.addEventListener('click',()=> {
    let index =getRandomNumber(0, quotes.length-1);
    quote.innerText = quotes[index]; 
    
});

function getRandomNumber(min,max){
    let first = max -min + 1;
    let second = Math.random() * first;
    let quote =Math.floor(second) + min;

    return quote;
}

