function toggle(element1, element2){
    element1.style.display = 'none';
    element2.style.visibility = 'visible';
}

function add(n1, n2){
    document.getElementById("ans").innerText = "The answer is: " + (Number(n1)+Number(n2));
}

function subtract(n1, n2){
    document.getElementById("ans").innerText = "The answer is: " + (Number(n1)-Number(n2));
}

function divide(n1, n2){
    document.getElementById("ans").innerText = "The answer is: " + (Number(n1)/Number(n2));
}

function multiply(n1, n2){
    document.getElementById("ans").innerText = "The answer is: " + (Number(n1)*Number(n2));
}