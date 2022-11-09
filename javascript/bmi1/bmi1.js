const mark={
    fullName:"Mark miller",
    weight:92,
    height:1.95
};

const john={
    fullName:"john smith",
    weight:78,
    height:1.69
};

const BMI={
    calc: function(){
    return Math.round((this.weight/(this.height*this.height)));
}
}
let x= BMI.calc.call(mark);
console.log(x);
let y= BMI.calc.call(john);
console.log(y);

console.log((x>y)?("Mark's Bmi " +x+ " is Higher"):("John's BMI "+y+ " is Higher"));