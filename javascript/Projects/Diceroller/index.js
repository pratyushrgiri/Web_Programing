let dice=document.getElementById("dice");
let roll=document.getElementById("Roll");

roll.onclick= ()=>{
let random= (Math.floor(Math.random()*6))+1;
console.log(random);

switch(random){

    case 1: dice.style.backgroundImage= "url(assets/1.png)";
    break;

    case 2: dice.style.backgroundImage= "url(assets/2.png)";
    break;

    case 3: dice.style.backgroundImage= "url(assets/3.png)";
    break;

    case 4: dice.style.backgroundImage= "url(assets/4.png)";
    break;

    case 5: dice.style.backgroundImage= "url(assets/5.png)";
    break;

    case 6: dice.style.backgroundImage= "url(assets/6.png)";
    break;

    default:
        break;
}
}
