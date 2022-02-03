function Home(){
    location.replace("M2Quiz1javellana.html")
}

let bttnquote = document.querySelector('button');
let quote =document.querySelector('p');

let quotes =['“When life puts you in tough situations dont say "why me" just say "try me" ”',' “With drive and a bit of talent you can move mountains.”','“If something stands between you and your sucess, move it! Never be denied”','“Success isnt always about greatness. Its about consistency. Consistent work leads to success greatness will come”','“Blood, sweat, and respect. first two you give, Last one you earn”'];

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

