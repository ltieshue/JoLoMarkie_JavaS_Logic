//What is this even doing! 1-2

var value = 0;
//var i = 0 //With this line of code value = 4374 and value + B = "437425"
//without above line of code (var i = 0) then value = 2187 and value + b = "218725"

// step 1
if(value > 0){
    value = 8;
} else {
    value = 10;
}

// step 2
var a = 0;

while(a > 5){
    value++;
    a++;
}

// step 3
a = 3;

while(a > 0){
    value = augmentA(value + i);
    a--;
}

// step 4
if(value > 25){
    value = 2;
} else {
    value = 1;
}

// step 5
*

for(i = 0; i < 7; i++){
    value *= 3;
}

// step 6
var b = "25";

augmentB(value);

function augmentA(val){
    if(val > 5){
        val *= 2;
    } else {
        val += val;
    }

    return val;
}

function augmentB(val){
    var i = 0;
    while(i < 3){
        val += i;
        i++;
    }
    return val;
}

//what is value + b?
console.log (value);
console.log (b);
console.log(value + b);
