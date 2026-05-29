let temp;


document.getElementById("Decrement").onclick=()=>{

temp = Number(document.getElementById("counter").textContent);
temp -= 1;
document.getElementById("counter").textContent = temp;

}

document.getElementById("Increment").onclick= ()=>{

temp = Number(document.getElementById("counter").textContent);
temp += 1;
document.getElementById("counter").textContent = temp;

}

document.getElementById("Reset").onclick= ()=>{

temp = Number(document.getElementById("counter").textContent);
temp = 0;
document.getElementById("counter").textContent = temp;

}