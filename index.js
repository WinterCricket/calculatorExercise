

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1; 
document.getElementById("num2-el").textContent = num2;


sum = document.getElementById("sum-el");

function add(){
	 result = num1 + num2;
	sum.textContent =  result;
}
function subtract(){
	 result = num1 - num2;
	sum.textContent =  result;
}

function divide(){
	result = num1 / num2;
	sum.textContent =  result;
}
function multiply(){
	 result = num1 * num2;
	sum.textContent =  result;
}