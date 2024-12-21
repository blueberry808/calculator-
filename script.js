


//establishing entire encompassing flex 
const flex_main = document.createElement("div");
flex_main.style.display = "flex"; 
flex_main.style.flexDirection = "column"; 
flex_main.style.height = "1000px"; 
flex_main.style.width = "1000px"; 



//assigning each div in the calculator 

const space1 = document.querySelector(".seven"); 
const space2 = document.querySelector(".eight"); 
const space3 = document.querySelector(".nine"); 
const space4 = document.querySelector(".plus"); 

const flex_row_1 = document.createElement("div"); 
flex_row_1.style.display = "flex"; 
flex_row_1.style.flex = "auto"; 
flex_row_1.style.flexDirection = "row"; 

flex_row_1.appendChild(space1); 
flex_row_1.appendChild(space2); 
flex_row_1.appendChild(space3); 
flex_row_1.appendChild(space4); 



flexx_main.appendChild(flex_row_1); 




