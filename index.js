

let num1 = 8;
let num2 = 2;

numOne = document.getElementById("num1-el"); 
numTwo =document.getElementById("num2-el");
numOne.textContent = num1;
numTwo.textContent = num2; 

sum = document.getElementById("sum-el");

function add(){
	 addsum = num1 + num2;
	sum.textContent = addsum;
}
function subtract(){
	 subsum = num1 - num2;
	sum.textContent = subsum;
}

function divide(){
	divsum = num1 / num2;
	sum.textContent = divsum;
}
function multiply(){
	 multsum = num1 * num2;
	sum.textContent = multsum;
}