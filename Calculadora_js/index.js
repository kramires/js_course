
function outcome() {
    let number1 = Number(document.getElementById('num-one').value);
    let number2 = Number(document.getElementById('num-two').value);
    let total = 0;

    if (document.getElementById('box1').checked) {
        total = number1 + number2;
        //console.log(total);
    } else if (document.getElementById('box2').checked) {
        total = number1 - number2;
       // console.log(total);
    }else if (document.getElementById('box3').checked) {
        total = number1*number2;
        //console.log(total);
    }else{
        total = number1/number2;
        //console.log(total);
    }

    document.getElementById("resultArea").innerHTML = 'Result = ' + String(total);
}