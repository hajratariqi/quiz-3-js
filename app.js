// let i = 10;
// do {
//     i--;
//     console.log(i);1
// } while (i > 10);



// let count = 0;
// while (count < 5) {
//     if (count === 2) break;
//     console.log(count);
//     count++;
// }

// const fillCity = () =>{
//     var cityName;
//     var zipEntered = document.getElementById("zip").value; // Get the ZIP code entered by the user

//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;

//             case "000":
//                 cityName = "Karachi";
//                 break;

//                 case "1111":
//                     cityName = "Islamabad";
//                     break;
            
//     }

//     document.getElementById("city").value = cityName; // Set the city field's value

// }


// function x(){
//     document.write(2 + 5 + "8");
//   }
//   x()  


// // non primitive type
// var arr =  null
// console.log(typeof arr);

// var str = "Hello";       // tag is 1
// var bool = true;         // tag is 2
// var num = 42;            // tag is 3

// var obj = {};            // tag is 0
// var arr = [];            // tag is 0
// var n = null;            // tag is 0


const isBracket = (bracket) => { 
    let stack = ['{', '[', '('];
    let check;
    
    for(var x of bracket){
        if(x == '{' || x == '(' || x == '['){
            stack.push(x)
        } 

        switch(x){
            case ']':
              check = stack.pop();
                if(check != '[') {
                    return 'NOT BALANCED'
                }
                break;
            case ')':
              check = stack.pop();
                if(check != '(') {
                    return 'NOT BALANCED'
                }
                break;

            case '}':
                    check = stack.pop();
                    if(check != '{') {
                    return 'NOT BALANCED'
                }
                break;
        }
}
return stack.length === 0 ? 'BALANCED' : 'NOT BALANCED';
}
console.log(isBracket('{[()]}'));

