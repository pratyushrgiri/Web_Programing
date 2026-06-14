let submitButton= document.getElementById("Submit");

submitButton.onclick = ()=> {

    let name=document.getElementById("name");
    let roll=document.getElementById("rollNo");
    let email=document.getElementById("email");
    let phoneNo=document.getElementById("phoneNo");
    let feedback=document.getElementById("feedback");
    let male=document.getElementById("male");
    let female=document.getElementById("female");
    let plus2=document.getElementById("+2");
    let bachelor=document.getElementById("bachelor");



    //name check
    if(name.value==""){
        name.placeholder="Please Enter Name";
        name.classList.add("redplaceholder")
        console.log("name not entered");
    }
    else{
        console.log(`Name= ${name.value.trim()}`);
        name.classList.remove("redplaceholder")
        console.log("Name");
    }

    // numbercheck
    phoneNo.value.trim();
    if(phoneNo.value==""){
        phoneNo.placeholder="Please Enter The number";
        phoneNo.classList.add("redplaceholder");
        console.log("Enter the number");
    }
    else if(phoneNo.value.length!==10 || phoneNo.value.startsWith("9")=== false || Number(phoneNo.value)<=0){
        console.log("enter right no plz");
        phoneNo.placeholder="enter right no plz";
        phoneNo.classList.add("redplaceholder");
    }
    else{
        console.log(`PhoneNo= ${phoneNo.value}`);
        phoneNo.placeholder="PhoneNo";
        phoneNo.classList.remove("redplaceholder");
    }

    //emailcheck
    if(email.value==""){
        console.log("Enter the email")
        email.placeholder="Plz Enter the email";
        email.classList.add("redplaceholder");
    }
    else if(email.value.includes("@")){
        console.log(`Email: ${email.value}`);
        email.classList.remove("redplaceholder");
        email.placeholder="Email";

    }
    else{
        email.placeholder="Plz Enter the right email";
        email.classList.add("redplaceholder");
        console.log("enter the right email");
    }

    // sex check
    if(male.checked){
        console.log(`Sex: ${male.value}`);
    }

    else if(female.checked){
        console.log(`Sex: ${female.value}`);
        document.getElementById("sexError").textContent="";
    }

    else{
        console.log("the field is not checked");
        document.getElementById("sexError").textContent="(The field is not checked)";

    }

    // edu level check
        if(bachelor.checked){
        console.log(`Level: ${bachelor.value}`);
    }

    else if(plus2.checked){
        console.log(`Level: ${plus2.value}`);
        document.getElementById("levelError").textContent="";
    }

    else{
        console.log("the field is not checked");
        document.getElementById("levelError").textContent="(The field is not checked)";
    }

    // roll check
    if(Number(roll.value)>0 || roll.value){
        console.log(`Roll: ${roll.value}`);
        roll.placeholder="Roll";
        roll.classList.remove("redplaceholder");
    }
    else{
        console.log("Enter the rollno");
        roll.placeholder="Enter the rollnumber correctly";
        roll.classList.add("redplaceholder");
    }

    // feedback
    feedback.value==""? console.log("No feedback") : console.log(`feedback=>\n${feedback.value}`);
};
