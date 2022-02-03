function Home(){
    location.replace("main.html")
}

let bttnquote = document.querySelector('button');
let quote =document.querySelector('p');

let quotes =['“I dont stop when im tired, I stop when im done.”',' “Its so easy to be great nowadays because everyone else is weak”','“If you can get through things that you hate to do, on the other side is greatness”','“Most people who are criticizing and judging havent even tried what you failed at.”','“There is no better way to grow as a person than to do everyday something you hate.”'];

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

