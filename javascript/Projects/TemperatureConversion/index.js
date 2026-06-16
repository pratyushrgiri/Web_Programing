// lets take a constant that has all the radio functions
// note querSelectorAll()function takes all the radio functions and puts it in an array
const temperatureRadios = document.querySelectorAll('input[type="radio"]');

console.log(temperatureRadios);
/*
logic 

we take a radiocheck variable which is null.

and we run a foreach on the temperatureradios is a node list which
is like an array but it has objects in it.

now we use foreach to reduce our code structure by using the same code for 
both the radio buttons.

now we add a event listener in the radio button if it is clicked then we 
going to check if the radio is clicked the first time or the second time
=>
    if it is the first time then the radio check value will be null
{
    here we will just change the value of radiocheck with the radio
}
    
    if it is the second time then the radio check value will be the 
    DOM of the radiobutton {

    we will use a if statement and check if the value of radio check 
    and the radio are the same or not if it is the same then certainly 
    the radio button is clicked for the second time so we 

        =>change the radio checked status to false
        and for continous working of the code we change the value of 
        radiocheck to null again

        **This is the way we can uncheck the radio btn and check it **

    }

The code of the explanation is given below and it is working :)..


By,
Past Pratyush 
To,
Future Pratyush

*/ 
let radiocheck=null;
temperatureRadios.forEach((radio) => {
    radio.addEventListener("click",()=>{
        console.log(radio);
        if(radiocheck===radio){
            radio.checked=false;
            radiocheck=null;
        }
        else{
            radiocheck=radio
        }
    });
});

temperatureRadios.forEach((radio) => {
    console.log(radio);
});

// Not for the temperature conversion and the error handeling

const temperatureInput= document.querySelector(".input");
const celsius= document.getElementById("celsius");
const fahrenheit= document.getElementById("fahrenheit");
const output= document.querySelector(".output");
const submit= document.querySelector("#calculate");
const error= document.querySelector("#error");

// functions
const errorMsg=(message)=>{
    error.textContent=message;
    error.style.display = "block";
    output.value="";
}
const errorClear=()=>{
     error.textContent="";
    error.style.display = "hide";
}


submit.addEventListener("click",()=>{

   let temperature=Number(temperatureInput.value);
   if(temperatureInput.value.trim()===""||Number.isNaN(temperature)){
    errorMsg("Enter the value of the temperature");
    return;
    }
    

    if(celsius.checked){
        output.value=`${(((temperature - 32) * 5) / 9).toFixed(2)} °C`;
        errorClear();
        return;
    }
    
    else if(fahrenheit.checked){
         output.value = `${((temperature * 9) / 5 + 32).toFixed(2)} °F`;
        clearError();
        return;
    }

        errorMsg("Check the °C or °F");
    
});