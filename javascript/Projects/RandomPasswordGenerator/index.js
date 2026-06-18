

function randomPassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSigns){

    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const upperCase= lowerCase.toUpperCase();
    const numbers="1234567890";
    const signs="!@#$%^&*():?/";

    let allowedCaracters="";
    allowedCaracters+= includeLowerCase? lowerCase : "";
    allowedCaracters+= includeUpperCase? upperCase : "";
    allowedCaracters+= includeNumbers? numbers : "";
    allowedCaracters+= includeSigns? signs : "";
    let password="";
    console.log(allowedCaracters);

    if (passwordLength < 1) {
        return `(the length of the pass should be at least 1)`;
    }

    if (allowedCaracters === "") {
        return `(check any one of the conditions for password generation)`;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomindex = Math.floor(Math.random() * allowedCaracters.length);
        password += allowedCaracters[randomindex];
    }

    return password;
};

document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.getElementById('length');
    const lowerInput = document.getElementById('lower');
    const upperInput = document.getElementById('upper');
    const numbersInput = document.getElementById('numbers');
    const signsInput = document.getElementById('signs');
    const generateBtn = document.getElementById('generateBtn');
    const output = document.getElementById('passwordOutput');
    const copyBtn = document.getElementById('copyBtn');

    if (!generateBtn) return; 

    generateBtn.addEventListener('click', () => {
        const length = parseInt(lengthInput.value, 10) || 12;
        const pass = randomPassword(
            length,
            lowerInput.checked,
            upperInput.checked,
            numbersInput.checked,
            signsInput.checked
        );
        output.textContent = pass;
    });
})