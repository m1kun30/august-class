console.log("Hello, World")

function conditionalexample (value) {
    if (value >30){
        return "very very large number";
    } else if ( value <=30 &&  value >20){
        return " very large number";
    }else if (value <=20 && value > 10){
        return " large number"
    }else{
        return "small  number"
    }
}
console.log( conditionalexample(5));