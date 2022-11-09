// function calctip(bill){
//     return ((bill>=30&&bill<=300)?(bill*0.15):(bill*0.20));
// }
// const bill=[125,555,44];
// const tip=[calctip(bill[0]),calctip(bill[1]),calctip(bill[2])];
// console.log(tip);

// const total=[bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];

// console.log(total);

// const bill=[125,555,44];
// const tip=[];
// const total=[];
// bill.forEach(calctip);
// function calctip(val){
//     let tips=(val>=30&&val<=300)?(val*0.15):(val*0.20);
//     tip.push(tips);
//     total.push(val+tips);
// };
// console.log(tip);
// console.log(total);

const bill=[125,555,44];
const tip=[];
const total=[];
bill.map(calctip);
function calctip(val){
    let tips=(val>=30&&val<=300)?(val*0.15):(val*0.20);
    tip.push(tips);
    total.push(val+tips);
};
console.log(tip);
console.log(total);
