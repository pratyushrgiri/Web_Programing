
function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}
function calculate() {
    const display = document.getElementById('result');
    try{
        const result = eval(display.value);
        display.value = result;
    }
    catch(error){
        display.value = 'Error';
    }   }