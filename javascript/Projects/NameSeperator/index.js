
const submit=   document.getElementById("submit");
const firstName= document.getElementById("firstName");
const middleName= document.getElementById("middleName");
const LastName= document.getElementById("lastName");

submit.onclick= ()=>{
    let fullName=document.getElementById("Fullname").value.trim();
    let firstname= fullName.slice(0,fullName.indexOf(" ")).trim();
    let middlename = fullName.slice(fullName.indexOf(" "),fullName.lastIndexOf(" ")).trim();
    let lastname =fullName.slice(fullName.lastIndexOf(" ")).trim();
    firstName.textContent=`First Name =${firstname.toUpperCase()}`;
    middleName.textContent=`Middle Name =${middlename.toUpperCase()}`;
    LastName.textContent=`Last Name =${lastname.toUpperCase()}`;
}
