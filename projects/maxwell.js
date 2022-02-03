function Home(){
    location.replace("M2Quiz1javellana.html")
}

let bttnquote = document.querySelector('button');
let quote =document.querySelector('p');

let quotes =['“Having low self-esteem is like driving through life with your hand-break on.”',' “Your nervous system cant tell failure from imagined failure.”','“Forgiveness is a scalpel that removes emotional scars.”','“Your most important sale in life is to sell yourself to yourself”','“Man maintains his balance, poise, and sense of security only as he is moving forward”'];

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

