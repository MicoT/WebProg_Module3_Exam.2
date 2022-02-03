function Home(){
    location.replace("main.html")
}

let bttnquote = document.querySelector('button');
let quote =document.querySelector('p');

let quotes =['“In a gentle way, you can change the world.”',' “Live as if you were to die tomorrow. Learn as if you were to live forever.”','“An eye for an eye only end up making the world blind.”','“Be the change you want to see in the world.”','“A man is but a product of his thoughts. What he thinks he becomes.”'];

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

