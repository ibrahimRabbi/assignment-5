// **triangle evenListener function ***
const base = document.getElementById("base-input");
const height = document.getElementById("height-input");
 function triangle() {
     const sum = 0.5 * converter(base) * converter(height)
    alert(sum);
     base.value = "";
     height.value = "";
}




// *** rectangle eventListener function ***
const rectWidth = document.getElementById("rect-base");
const rectLength = document.getElementById("rect-height");
function rectangle() {
    const sum = converter(rectWidth) * converter(rectLength)  
};



// *** convert input to number function ***
function converter(input) {
    const convert = parseFloat(input.value);
    return convert
}