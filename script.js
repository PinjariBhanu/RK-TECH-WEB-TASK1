let addBtnElement=document.getElementById("addBtn");
let subBtnElement=document.getElementById("subBtn");
let mulBtnElement=document.getElementById("mulBtn");
let divBtnElement=document.getElementById("divBtn");

let result="";

let numberInput1Element=document.getElementById("numberInput1");
let numberInput2Element=document.getElementById("numberInput2");
let resultElement=document.getElementById("result");


function addition(){
    let num1Value=numberInput1Element.value;
    let num2Value=numberInput2Element.value;
    if(num1Value==="" || num2Value===""){
        alert("Enter the number");
    }else{
        result=parseInt(num1Value) + parseInt(num2Value);
        resultElement.value=result;
    }
 
};

function subtraction(){
    let num1Value=numberInput1Element.value;
    let num2Value=numberInput2Element.value;
    if(num1Value==="" || num2Value===""){
        alert("Enter the number");
    }else{
        result=parseInt(num1Value) - parseInt(num2Value);
        resultElement.value=result;
    }

};

function multiplication(){
    let num1Value=numberInput1Element.value;
    let num2Value=numberInput2Element.value;
    if(num1Value==="" || num2Value===""){
        alert("Enter the number");
    }else{
        result=parseInt(num1Value) * parseInt(num2Value);
        resultElement.value=result;
    }
};

function division(){
    let num1Value=numberInput1Element.value;
    let num2Value=numberInput2Element.value;
    if(num1Value==="" || num2Value===""){
        alert("Enter the number");
    }else{
        result=parseInt(num1Value) / parseInt(num2Value);
        resultElement.value=result;
    }

};

addBtnElement.addEventListener("click",addition);
subBtnElement.addEventListener("click",subtraction);
mulBtnElement.addEventListener("click",multiplication);
divBtnElement.addEventListener("click",division);
