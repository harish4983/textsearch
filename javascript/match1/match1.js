let myFunction = (a, b, c) => (a+b+c)/3;

let davg= Math.round(myFunction(81,54,61));
console.log(davg);

let kavg=Math.round(myFunction(93,39,77));
console.log(kavg);

let checkwinner=(a,b)=>(a >= 2*b)?console.log("Dolphin wins (" +davg +" vs." +kavg+")"):console.log("Koala wins (" +kavg +" vs."+davg+")");
let winner= checkwinner(davg,kavg);
