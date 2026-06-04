let age = document.getElementById("Age");
let enter=document.getElementById("Submit");
let output= document.getElementById("output");

enter.onclick= ()=>{
    let num= Number(age.value);
    if(num>100){
        output.textContent="Give me the secret to immortality..";

    }

    else if (num>=18){
        output.textContent="You are allowed to enter the site";

    }
     else if (num<0){
        output.textContent="Nice age i was also born in the stone age";

    }
    else if (num==0){
        output.textContent="Why is a newborn in this site huh!";

    }

    else {
        output.textContent="You Not allowed to enter the site";
        
    }
    age.value="";
}

