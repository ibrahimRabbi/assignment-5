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
         alert("plz input a posetive number");
        } else if (isNaN(value1) || isNaN(value2)) {
          alert("plz input a valid number");
        } else if (value1 == "" || value2 == "") {
          alert("plz input a number");
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
           alert("plz input a posetive number");
        }
        else if (isNaN(value1) || isNaN(value2)) {
           alert(" string is not allowed plz input a valid number");
        }
        else if (value1 == '' || value2 == '') {
           alert("plz input a number");
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

//** this function generate random color *****
function generateColor(div,apply) {
  div.addEventListener("mouseover", function () {
    const randomColor = ["#6495ed", "#e48ae4", "#b815b8", "#f7906b", "#f14f6f"];
    const generateNumber = Math.floor(Math.random() * randomColor.length);
    apply.style.backgroundColor = randomColor[generateNumber];
  })
}

  

//triangle function call and random color function call
const triangleBtn = document.getElementById("triangle-btn");
const base = document.getElementById("base-input");
const height = document.getElementById("height-input");

const triangle = document.getElementById("triangle");
const applyColor = document.getElementById("apply");
threeInputSumation(triangleBtn, base, height,"triangle");
generateColor(triangle,applyColor)


//rectangle function call and random color function call
const rectBtn = document.getElementById("rectangle-btn");
const rectWidth = document.getElementById("rect-base");
const rectLength = document.getElementById("rect-height");

const rectangle = document.getElementById("rectangle");
const applyRect = document.getElementById("apply-rect");
twoInputSumation(rectBtn, rectWidth, rectLength, 'rectangle');
generateColor(rectangle,applyRect);

//parallelogram eventlistener and random color function call
const parallelogramBtn = document.getElementById("parallelogram-btn");
const paraBase = document.getElementById("para-base")
const paraHeight = document.getElementById("para-height")

const parallelogram = document.getElementById("parallelo");
const applyPara = document.getElementById("apply-para")
twoInputSumation(parallelogramBtn, paraBase, paraHeight, 'parallelogram');
generateColor(parallelogram, applyPara);
 

 //rhombus function call and random color function call
const rhombusBtn = document.getElementById("rhombus-btn");
const rhombus1 = document.getElementById("rhombus-1");
const rhombus2 = document.getElementById("rhombus-2");

const rhombus = document.getElementById("rhombus")
const applyRhombus = document.getElementById("apply-rhombus");

threeInputSumation(rhombusBtn, rhombus1, rhombus2,"rhombus");
generateColor(rhombus, applyRhombus)

//pentagone function call and random color function call 
const pentagoneBtn = document.getElementById("pentagone-btn");
const pentagoneP = document.getElementById("pentagone-p");
const pentagoneB = document.getElementById("pentagone-b");

const pentagone = document.getElementById("pentagone");
const applyPentagone = document.getElementById("apply-pentagone")

threeInputSumation(pentagoneBtn, pentagoneP, pentagoneB,'pentagone');
generateColor(pentagone, applyPentagone)

//ellipse function call and random color function call 
const ellipseBtn = document.getElementById("ellipse-btn");
const ellipse1 = document.getElementById('ellipse-1')
const ellipse2 = document.getElementById('ellipse-2')

const ellipse = document.getElementById("ellipse")
const applyEllipse = document.getElementById("apply-ellipse")

ellipseBtn.addEventListener('click', function () {
  const pi = Math.PI;
  const sum = converter(ellipse1) * converter(ellipse2) * pi
  alert(sum)
  createElement('ellipase')
});
generateColor(ellipse,applyEllipse)



