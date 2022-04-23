let randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

let randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

let heading=document.querySelector(".container h1")

if(randomNumber1>randomNumber2)heading.textContent="🚩Player 1 wins";
else if(randomNumber2>randomNumber1)heading.textContent=" 🚩 Player 2 wins ";
else heading.textContent="Its a Draw";

document.querySelector(".img1").src=`images/dice${randomNumber1}.png`;

document.querySelector(".img2").src=`images/dice${randomNumber2}.png`;