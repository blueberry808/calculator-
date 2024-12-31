
//array containing all values 
let values = []
let total = ''; 


//establishing entire encompassing flex 
const flex_main = document.querySelector(".flex_main_container");
flex_main.style.display = "flex"; 
flex_main.style.flexDirection = "column"; 
flex_main.style.height = "500px"; 
flex_main.style.width = "1000px"; 



//output Box
//div with text content?


const outputBox = document.querySelector(".output-box"); 
outputBox.style.backgroundColor = "gray"; 
outputBox.style.width = '350px';
outputBox.style.height = '100px'; 
outputBox.style.flex = "auto"; 
outputBox.style.fontSize = "x-large"; 

outputBox.innerHTML ="What's up"; 
outputBox.style.color = "white";



//row 1 

const flex_1 = document.querySelector(".flex-container-2");
flex_1.style.display = "flex";
flex_1.style.flexDirection = "row";  

for(let i =7; i<10; i++){


    let newBtn = document.createElement("button"); 
    newBtn.id = i; 
    newBtn.textContent = i; 
    newBtn.style.height = '100px'; 
    newBtn.style.width = '100px'; 


    newBtn.addEventListener("click", function(event){
        values.push(parseInt(newBtn.id)); 
        updateDisplay();
    }); 

    flex_1.appendChild(newBtn);

}




//plus button 
let plusBtn = document.createElement("button");
plusBtn.id = "plus"; 
plusBtn.textContent = "+"; 
plusBtn.style.width = '50px';
flex_1.appendChild(plusBtn); 


plusBtn.addEventListener("click", function(event){
    for(let i = 0; i<values.length; i++){
        
        
    }


});


//row 2 


const flex_2 = document.querySelector(".flex-container-3");
flex_2.style.display = "flex";
flex_2.style.flexDirection = "row";  

for(let i =4; i<7; i++){

    let newBtn = document.createElement("button"); 
    newBtn.id = i; 
    newBtn.textContent = i; 
    newBtn.style.height = '100px'; 
    newBtn.style.width = '100px';    


    flex_2.appendChild(newBtn);





}



//row 3
let minusBtn = document.createElement("button");
minusBtn.id = "minus"; 
minusBtn.textContent = "-"; 
minusBtn.style.width = '50px';
flex_2.appendChild(minusBtn); 


const flex_3 = document.querySelector(".flex-container-4");
flex_3.style.display = "flex";
flex_3.style.flexDirection = "row";  

for(let i =1; i<4; i++){

    let newBtn = document.createElement("button"); 
    newBtn.id = i; 
    newBtn.textContent = i; 
    newBtn.style.height = '100px'; 
    newBtn.style.width = '100px';    


    flex_3.appendChild(newBtn);





}



let divBtn = document.createElement("button");
divBtn.id = "divide"; 
divBtn.textContent = "/"; 
divBtn.style.width = '50px'; 
flex_3.appendChild(divBtn); 





const flex_5 = document.querySelector(".flex-container-5"); 


//equal
const equalBtn = document.createElement("button"); 
equalBtn.id = "equal"; 
equalBtn.textContent = "="; 
let placeHolder = 350/3
equalBtn.style.width = placeHolder + 'px'; 
equalBtn.style.height = '90px'; 


//reset


const reset = document.createElement("button"); 
reset.id = "reset"; 
reset.textContent = "C"; 
reset.style.width = placeHolder + 'px'; 
reset.style.height = '90px'; 


//multiply
const multiply = document.createElement("button"); 
multiply.id = "multiply"; 
multiply.textContent = "*"; 
multiply.style.width = placeHolder + 'px'; 
multiply.style.height = '90px'; 



flex_5.appendChild(equalBtn); 
flex_5.appendChild(reset); 
flex_5.appendChild(multiply); 





//function to update output display:

function updateDisplay(){
    for(let i = 0; i<values.length; i++){
        total += values[i]; 
    }
    outputBox.innerHTML = total; 

}





/*
Need to: 
    -Add clear button
    -Add Multiply Button
        -Figure out general positioning of all buttons
    -Add functions (and figure that out)
    -Add output box



*/