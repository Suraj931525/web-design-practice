// default function
function hello(){              // function definition
    console.log("hello function");   // block of code
}

hello()   // function calling
hello()   // function calling

// parameterized fuction

//named function
function add(a,b){                  //paramrter
    console.log(a+b)
}
add(4,2)                          //argument



//ananomous function
// function (a,b){                  //paramrter
//     console.log(a+b)
// }
// (4,2)                          //argument



// imediate invoke function
// (function(a,b){ 
//     console.log(a+b);
// }
// (4,5))




// function with expression

let mn=function(a,b){
    console.log(a*b);
}
mn(4,5)


//arrow function

let n=((a,b)=>{
console.log(a*b);
})
n(6,2)