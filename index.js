// *** convert input to number function ***
function converter(input){
    const convert = parseFloat(input.value);
        return convert;
}

// ***** this function work in 3 input sumation ******
function threeInputSumation(btn, input1, input2,name) {
    btn.addEventListener('click', function () {
        
        const value1 = input1.value;
        const value2 = input2.value;

        if (value1 < 0 || value2 < 0) {
          console.log("plz input a posetive number");
        } else if (isNaN(value1) || isNaN(value2)) {
          console.log("plz input a valid number");
        } else if (value1 == "" || value2 == "") {
          console.log("plz input a number");
        } else {
          const sum = 0.5 * converter(input1) * converter(input2);
          createElement(name, sum);
        
        }
    })
}

// ***  this function work sumation between 2 input ***
function twoInputSumation(btn, input1, input2,name) {
    btn.addEventListener('click',function(){
        
        const value1 = input1.value;
        const value2 = input2.value;

        if (value1 < 0 || value2 < 0){
          console.log("plz input a posetive number");
        }
        else if (isNaN(value1) || isNaN(value2)) {
          console.log("plz input a valid number");
        }
        else if (value1 == '' || value2 == '') {
          console.log("plz input a number");
        }
        else {
          const sum = converter(input1) * converter(input2);
           createElement(name,sum)
        }
})
}

//this function will create a new element

function createElement(name,result) {
    const cautch = document.getElementById("order-list");
    const list = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const button = document.createElement("button");

    div.setAttribute("class", "d-flex justify-content-between align-items-center");
    list.setAttribute("class", "mt-4")
    button.setAttribute('class',"btn btn-primary bt")
    div.appendChild(span)
    span.innerText = name;

    div.appendChild(span2)
    span2.innerHTML = result + "cm <sup>2</sup>";
    
    div.appendChild(button) 
    button.innerText = 'convert to m2'
      
    list.appendChild(div);
    cautch.appendChild(list);
}






//triangle function call
const triangleBtn = document.getElementById("triangle-btn");
const base = document.getElementById("base-input");
const height = document.getElementById("height-input");
threeInputSumation(triangleBtn, base, height,"triangle");



//rectangle function call
const rectBtn = document.getElementById("rectangle-btn");
const rectWidth = document.getElementById("rect-base");
const rectLength = document.getElementById("rect-height");
twoInputSumation(rectBtn,rectWidth,rectLength,'rectangle')


//parallelogram eventlistener
const parallelogramBtn = document.getElementById("parallelogram-btn");
const paraBase = document.getElementById("para-base")
const paraHeight = document.getElementById("para-height")
 twoInputSumation(parallelogramBtn,paraBase,paraHeight,'parallelogram')
 

 //rhombus function call
const rhombusBtn = document.getElementById("rhombus-btn");
const rhombus1 = document.getElementById("rhombus-1");
const rhombus2 = document.getElementById("rhombus-2");
threeInputSumation(rhombusBtn, rhombus1, rhombus2,"rhombus");

//pentagone function call 
const pentagoneBtn = document.getElementById("pentagone-btn");
const pentagoneP = document.getElementById("pentagone-p");
const pentagoneB = document.getElementById("pentagone-b");
threeInputSumation(pentagoneBtn, pentagoneP, pentagoneB,'pentagone');

//ellipse function call 
const ellipseBtn = document.getElementById("ellipse-btn");
const ellipse1 = document.getElementById('ellipse-1')
const ellipse2 = document.getElementById('ellipse-2')
ellipseBtn.addEventListener('click', function () {
    const pi = Math.PI;
    const sum = converter(ellipse1) * converter(ellipse2) * pi
    alert(sum)
    createElement('ellipase')
})