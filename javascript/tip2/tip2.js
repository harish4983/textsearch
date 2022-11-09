const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const total=[];
bills.forEach(calc);
function calc(val){
    tip = Math.round((val>=30&&val<=300)?(val*0.15):(val*0.20));
    tips.push(tip);
    total.push(val+tip);
};
let sum=0;
total.forEach(calcavg);
function calcavg(value){
     sum+=value;
}
console.log(bills);
console.log(tips);
console.log(total);
console.log(sum/total.length);