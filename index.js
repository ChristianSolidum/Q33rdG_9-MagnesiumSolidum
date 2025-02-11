let s = "";
s += "<h1>Christian Solidum - 9-Mg - Feb 2025 </h1>"; 
s += "<h2> Basic Calculator </h2>"

document.getElementById("header").innerHTML = s;

// function for the calculator buttons.
let textview = document.getElementById("textview");
let value = [];
let x = 0;
let cond = false;

function insert(num) { 
    textview.value += num;
    
    if (!isNaN(num) || num === ".") {
        if (cond) {
            value[value.length - 1] += num;
        } else {
            value.push(num);
            cond = true;
        }
    } else {
        value.push(num);
        cond = false;
    }
    
    console.log(value);
    console.log(textview.value)
}

function clean() {
    value = [];
    x = 0;
    textview.value = "";
}

function back() {
    textview.value = textview.value.slice(0, -1);
    value.pop();
}

function equal() {
    try {
        textview.value = eval(textview.value);
        value = [textview.value];
        cond = true;
    } catch (e) {
        textview.value = "Error";
    }
}
